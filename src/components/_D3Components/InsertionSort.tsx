import * as React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import * as d3 from 'd3';
import RadioButton from '../RadioButton';

export default function InsertionSort() {
  const height = 670;
  const width = 1090;
  const [lineHeights, setLineHeights] = useState<number[]>([]);
  const [numberOfBars, setNumberOfBars] = useState<15 | 20 | 50 | 100 | undefined>(undefined);
  const margin = { top: 10, right: 10, bottom: 10, left: 10 };
  const isStarted = useRef(false);
  const duration = useRef<number>(190);
  const svgRef = useRef<SVGSVGElement>(null);

  const getLineHeights = useCallback(() => {
    if (!numberOfBars) return;
    return d3.shuffle(d3.range(5, 500, 500 / numberOfBars));
  }, [numberOfBars]);
  const concatId = (id: number) => `rect${id}`.replace('.', '-').substring(0, 15); // create unique id for bars to track movement
  const lineY = d3
    .scaleLinear()
    .domain([0, d3.max(lineHeights, (d) => +d) as number])
    .range([height - margin.bottom, margin.top]);

  useEffect(() => {
    if (numberOfBars === undefined) {
      setNumberOfBars(20);
    }
  }, [numberOfBars]);

  useEffect(() => {
    const hasLineHeights = getLineHeights();
    if (hasLineHeights) {
      setLineHeights(hasLineHeights);
    }
  }, [getLineHeights]);

  useEffect(() => {
    if (svgRef.current && lineHeights.length > 0) {
      const svg = d3.select(svgRef.current);
      svg.selectAll('.insertion_sort-rect').remove();
      svg.selectAll('rect')
        .data(lineHeights)
        .join('rect')
        .attr('id', (d) => concatId(d))
        .attr('class', 'insertion_sort-rect')
        .attr('x', (d, i) => (width / lineHeights.length) * i)
        .attr('y', (d) => lineY(d))
        .attr('width', (width / lineHeights.length) * 0.99)
        .attr('height', (d) => lineY(0) - lineY(d))
        .attr('fill', '#202020');
    }
  }, [lineHeights, lineY]);

  function insertionSort(j = 1) {
    if (!isStarted.current) {
      return;
    }
    if (j < lineHeights.length) {
      const key = lineHeights[j];
      const i = j - 1;
      d3.select(svgRef.current)
        .selectAll('rect')
        .attr('fill', '#202020');

      d3.select(svgRef.current)
        .select(`#${concatId(key)}`)
        .attr('fill', '#d67c63');

      whileSorting(i, key, () => {
        if (isStarted.current) {
          // Check if we should continue after callback
          insertionSort(j + 1);
        }
      });
    }
    // On Completion - we'll have advanced `j` 1 past the usable index,
    // therefore we're looking for length, not length-1
    if (j === lineHeights.length) {
      isStarted.current = false;
      d3.timeout(() => {
        d3.select(svgRef.current)
          .selectAll('rect')
          .transition()
          .duration(500)
          .style('fill', '#292929')
          .ease(d3.easeQuadIn);
      }, 0);
    }
  }

  function whileSorting(i: number, key: number, doneCallback: { (): void; (): void; }) {
    if (i >= 0 && lineHeights[i] > key) {
      // on every move of the bar the speed is increased by 7.5% and reset at each new key
      duration.current *= 0.925;
      lineHeights[i + 1] = lineHeights[i];
      const swapElements = { one: lineHeights[i], two: key };
      animateSwapElements(swapElements, () => whileSorting(i - 1, key, doneCallback));
    } else {
      lineHeights[i + 1] = key;
      doneCallback();
      // resetting duration
      duration.current = 190;
    }
  }

  function animateSwapElements(swapElements: { one: any; two: any; }, callback: { (): void; (): void; }) {
    // It seems duration has to be passed to this local variable in order to update ¯\_(ツ)_/¯
    // const d = duration;
    const { one, two } = swapElements;
    const sel1 = `#${concatId(one)}`;
    const sel2 = `#${concatId(two)}`;
    const x1 = d3.select(sel1).attr('x');
    const x2 = d3.select(sel2).attr('x');
    Promise.all([
      d3
        .select(sel1)
        .transition()
        .ease(d3.easeLinear)
        .duration(duration.current)
        .attr('x', x2)
        .end(),
      d3
        .select(sel2)
        .transition()
        .ease(d3.easeLinear)
        .duration(duration.current)
        .attr('x', x1)
        .end(),
    ])
      .then(callback)
      .catch((err) => new Error(`Animation Failed:${err}`));
  }

  function handleToggleStart() {
    if (isStarted.current === false) {
      isStarted.current = true;
      insertionSort();
    } else {
      isStarted.current = false;
    }
  }

  function handleReset() {
    if (isStarted.current === false) {
      const newLineHeights = getLineHeights();
      if (newLineHeights) {
        setLineHeights(newLineHeights);
      }
    }
  }

  function handleChangeNumBars(num: number) {
    if (isStarted.current === false) {
      setNumberOfBars(num as (15 | 20 | 50 | 100));
    }
  }

  return (
    <>
      <svg ref={svgRef} viewBox={`0, 0, ${width}, ${height}`} style={{ display: 'block' }} />
      <div className="insertion_sort-controls">
        <button onClick={handleToggleStart} type="button">Start / Stop</button>
        <button onClick={handleReset} type="button">Reset</button>
      </div>
      <div className='insertion_sort-number_of_elements-group'>
        <h4>Number Of Elements To Sort</h4>
        <ul className="insertion_sort-number_of_elements">
          {[15, 20, 50, 100].map((num) => {
            return <RadioButton key={`radio-insert-${num}`} checked={num === numberOfBars} label={`${num}`} onChange={() => handleChangeNumBars(num)} />;
          })}
        </ul>
      </div>
    </>
  );
}
