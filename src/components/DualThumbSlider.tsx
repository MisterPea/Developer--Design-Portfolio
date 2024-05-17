import React, { useCallback, useEffect, useRef, useState } from "react";

type StateTuple = [number, number];
type SetStateFunction = React.Dispatch<React.SetStateAction<StateTuple>>;

interface DualThumbSliderProps {
  // External Set State
  setState?: React.Dispatch<React.SetStateAction<[number, number]>>;
  // External State
  state?: [number, number];
  defaultValues?: [number, number];
  range?: [number, number];
  steps?: number;
}

export default function DualThumbSlider({ defaultValues = [0, 24], range = [0, 24], steps = 24, setState, state }: DualThumbSliderProps) {

  // Hook to allow the use of either internal or external state
  const useOptionalState = (initialState: StateTuple, state?: StateTuple, setState?: SetStateFunction): [StateTuple, SetStateFunction] => {
    const [localState, localSetState] = useState<StateTuple>(initialState);
    return state && setState ? [state, setState] : [localState, localSetState];
  };

  const rangeRef = useRef<HTMLDivElement>(null);
  const rangeMinRef = useRef<HTMLDivElement>(null);
  const rangeMaxRef = useRef<HTMLDivElement>(null);
  const previousState = useRef<[number, number]>(defaultValues);
  const [dragging, setDragging] = useState<"min" | "max" | null>(null);
  const [location, setLocation] = useOptionalState(defaultValues, state, setState);

  // Method to compare previous state with new state – if there's inequality, we set the state.
  const compareState = useCallback((newState: [number, number]) => {
    if (newState[0] !== previousState.current[0] || newState[1] !== previousState.current[1]) {
      previousState.current = newState;
      setLocation(newState);
    }
  }, [setLocation]);

  const getPercentage = useCallback((value: number) => {
    return ((value - range[0]) / (range[1] - range[0])) * 100;
  }, [range]);

  const getStepValue = useCallback((percentage: number) => {
    const stepSize = 100 / (steps - 1);
    const stepIndex = Math.round(percentage / stepSize);
    return stepIndex * stepSize;
  }, [steps]);

  const handleDrag = useCallback(
    (event: MouseEvent) => {
      if (!dragging || !rangeRef.current) return;

      const rangeRect = rangeRef.current.getBoundingClientRect();
      const percentage = Math.min(Math.max(0, (event.clientX - rangeRect.left) / rangeRect.width), 1) * 100;
      const stepPercentage = getStepValue(percentage);
      const value = range[0] + (stepPercentage / 100) * (range[1] - range[0]);

      if (dragging === "min" && value < location[1]) {
        // We're doing a comparison between the current state and new state. If there is difference we update the state.
        compareState([value, location[1]]);
      } else if (dragging === "max" && value > location[0]) {
        compareState([location[0], value]);
      }

    },
    [dragging, getStepValue, range, location, compareState]
  );

  const handleMouseUp = useCallback(() => {
    setDragging(null);
  }, []);

  const startDrag = useCallback((thumb: "min" | "max") => {
    setDragging(thumb);
  }, []);

  useEffect(() => {
    if (dragging) {
      window.addEventListener("pointermove", handleDrag);
      window.addEventListener("pointerup", handleMouseUp);
    } else {
      window.removeEventListener("pointermove", handleDrag);
      window.removeEventListener("pointerup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("pointermove", handleDrag);
      window.removeEventListener("pointerup", handleMouseUp);
    };
  }, [dragging, handleDrag, handleMouseUp]);

  return (
    <div ref={rangeRef} className="dual_range-container">
      <div className="dual_range-track" />
      <div
        className="dual_range-selection"
        style={{
          left: `calc(${getPercentage(location[0])}% - 3.5px)`,
          width: `calc(${getPercentage(location[1] - location[0])}% )`,
        }}
      />
      <div
        ref={rangeMinRef}
        className="dual_range-min drag"
        style={{ left: `calc(${getPercentage(location[0])}% - 7.5px)` }}
        onPointerDown={() => startDrag("min")}
      />
      <div
        ref={rangeMaxRef}
        className="dual_range-max drag"
        style={{ left: `calc(${getPercentage(location[1])}% - 7.5px)` }}
        onPointerDown={() => startDrag("max")}
      />
    </div>
  );
}