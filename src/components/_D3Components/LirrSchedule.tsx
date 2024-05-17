import * as React from 'react';
import { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import * as d3 from 'd3';
import routes from './data/routes.json';
import trainData from './data/trainData.json';
import './style/lirrSchedule.scss';
import Checkbox from '../ControlledCheckbox';
import DualThumbSlider from '../DualThumbSlider';
import RadioButton from '../RadioButton';

interface TrainData {
  trip_id: string;
  arrival_time: string;
  departure_time: string;
  stop_name: string;
  stop_sequence: string;
  route_id: string;
  destination: string;
  direction_id: string;
}

// Add train direction radio, route checkboxes

interface LirrScheduleProps {
  parentRef: React.RefObject<HTMLDivElement>;
}
export default function LirrSchedule({ parentRef }: LirrScheduleProps) {
  const dropdownRef = useRef<HTMLSelectElement>(null);
  const height = 714;
  const width = 1180;
  const [timeRange, setTimeRange] = useState<[number, number]>([0, 24]);
  const [trainDirection, setTrainDirection] = useState<'Eastbound' | 'Westbound'>('Eastbound');
  const [routeObject, setRouteObject] = useState<{ routeName: string, routeId: string; }>({ routeId: '', routeName: '' });
  const margin = { top: 0, right: 0, bottom: 0, left: 0 };
  const currentRouteObject = routes.filter(({ route_long_name }) => route_long_name === routeObject.routeName)[0];
  const mainRoutesArray = (trainData as TrainData[]).filter(({ route_id }) => route_id === routeObject.routeId);
  const currentStarts: string[] = routes.filter(({ route_id }) => route_id === routeObject.routeId).flatMap(({ eastboundStarts, westboundStarts }) => {
    if (trainDirection === 'Eastbound') {
      return eastboundStarts;
    }
    return westboundStarts;
  });
  const [startingStation, setStartingStation] = useState<string[]>([]);

  // Dimensions
  useEffect(() => {
    if (parentRef.current && width) {
      handleRouteChange(); // set initial route
    }
  }, [parentRef, width]);

  interface Scales {
    x: d3.ScaleTime<number, number, never> | undefined;
    y: d3.ScaleLinear<number, number, never> | undefined;
    yCoordinate: ((stationName: string) => number) | undefined;
  }

  interface Axes {
    x: any | undefined;
    y: any | undefined;
    vert: any | undefined;
  }

  const scale: Scales = useMemo(() => ({
    x: undefined,
    y: undefined,
    yCoordinate: undefined,
  }), []);

  const axis: Axes = useMemo(() => ({
    x: undefined,
    y: undefined,
    vert: undefined,
  }), []);

  // Date Domain
  const dateDomain = useCallback(() => {
    const startDateBase = new Date('January 1, 2000 00:00:00');
    const endDateBase = new Date('January 1, 2000 00:00:00');
    const [startHour, endHour] = [Math.ceil(timeRange[0]), Math.ceil(timeRange[1])];

    const start = new Date(startDateBase.getTime());
    start.setHours(startHour);

    const end = new Date(endDateBase.getTime());
    end.setHours(endHour);
    end.setMinutes(59);
    end.setSeconds(59);
    end.setMilliseconds(999); // Set the end time to the last millisecond of the hour

    return [start, end];
  }, [timeRange]);

  const plotTrains = useCallback(() => {
    // ** Create Route Pairs ** //
    function createRoutePairs() {
      const eastWestSort = mainRoutesArray.filter(
        ({ direction_id }) => direction_id === trainDirection,
      );

      const makeRoutePart = (branchElement: TrainData) => ({
        arrival_time: branchElement.arrival_time,
        departure_time: branchElement.departure_time,
        stop_sequence: branchElement.stop_sequence,
        stop_name: branchElement.stop_name,
        destination: branchElement.destination,
      });

      const routePairs = [];
      let ignoreBranch = false;
      for (let i = 0; i < eastWestSort.length - 1; i += 1) {
        const { stop_name, stop_sequence } = makeRoutePart(eastWestSort[i]);
        if (stop_sequence === '1') {
          if (!startingStation.includes(stop_name)) {
            ignoreBranch = true;
          } else {
            ignoreBranch = false;
          }
        }

        const startRoute = makeRoutePart(eastWestSort[i]);
        const stopRoute = makeRoutePart(eastWestSort[i + 1]);
        if (!ignoreBranch && stopRoute.stop_sequence !== '1') {
          routePairs.push({ start: startRoute, stop: stopRoute });
        }
      }
      routePairs.filter(Boolean);
      return routePairs;
    }

    d3.selectAll('.chart-group').remove();
    d3.selectAll('#chart-area').remove();
    d3.select('#lirr-chart-svg')
      .append('clipPath')
      .attr('id', 'chart-area')
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', width)
      .attr('height', height);

    const chartGroup = d3
      .select('#lirr-chart-svg')
      .append('g')
      .attr('clip-path', 'url(#chart-area)')
      .attr('class', 'chart-group');

    // Scale line upon zoom
    const scaleRouteLine = d3.scaleLinear().domain([1, 24]).range([5, 1.125 ]);

    chartGroup
      .selectAll('.train-line')
      .data(createRoutePairs)
      .enter()
      .append('line')
      .attr('class', 'train-line')
      .attr('x1', (d) => scale.x!(parseTime(d.start.departure_time)))
      .attr('y1', (d) => scale.yCoordinate!(d.start.stop_name))
      .attr('x2', (d) => scale.x!(parseTime(d.stop.arrival_time)))
      .attr('y2', (d) => scale.yCoordinate!(d.stop.stop_name))
      .attr('stroke', '#303030')
      .attr('stroke-opacity', '0.8')
      .attr("stroke-width", scaleRouteLine(timeRange[1] - timeRange[0]))
      .attr('shape-rendering', 'geometricPrecision');
  }, [mainRoutesArray, scale.x, scale.yCoordinate, startingStation, timeRange, trainDirection]);

  const drawAxis = useCallback(() => {
    if (axis.y) {
      d3.selectAll('.x-axis-group').remove();
      d3.selectAll('.grid-lines').remove();

      // Station Axis
      d3.select('#lirr-chart-svg')
        .attr('class', 'station-axis')
        .attr('transform', `translate(${margin.left}, 0)`)
        .call(axis.y)
        .selectAll('.tick line')
        .attr('stroke-width', '0.2');

      // Time Axis
      d3.select('#lirr-chart-svg')
        .append('g')
        .attr('class', 'x-axis-group')
        .attr(
          'transform',
          `translate(0, ${height + margin.top - margin.bottom + 10})`,
        )
        .call(axis.x)
        .selectAll('.tick line')
        .attr('stroke-width', 0.5)
        .attr('stroke-opacity', 0.8)
        .attr('stroke-color', 'rgb(240, 213, 182)');

      // Center Time Labels
      d3.select('#lirr-chart-svg')
        .selectAll('.x-axis-group text')
        .attr('transform', `translate(${width / ((timeRange[1] - timeRange[0]) + 1) / 2})`);

      /// Vertical Lines
      d3.select('#lirr-chart-svg')
        .append('g')
        .attr('class', 'grid-lines')
        .attr('transform', `translate(0, ${height + margin.top - margin.bottom})`)
        .call(axis.vert)
        .selectAll('.tick line')
        .attr('stroke', 'rgb(240, 213, 182)')
        .attr('stroke-opacity', 0.7)
        .attr('stroke-width', 0.5);
    }
  }, [axis.vert, axis.x, axis.y, height, margin.bottom, margin.left, margin.top, timeRange, width]);

  // This should only run once, as startingStation is only empty on initialization.
  if (currentStarts.length > 0 && startingStation.length === 0) {
    setStartingStation([currentStarts[0]]);
  }

  /*
  We are resetting the current start to index 0 every time the route changes,
  ergo, we are not interested in including currentStarts as a dependency.
  */
  useEffect(() => {
    if (currentRouteObject) {
      setStartingStation([currentStarts[0]]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRouteObject, trainDirection]);

  useEffect(() => {
    if (currentRouteObject) {
      scale.y = d3
        .scaleLinear()
        .domain([0, d3.max(currentRouteObject.stops, (d) => d.distance) as number])
        .range(
          trainDirection === 'Eastbound'
            ? [height - margin.bottom + margin.top, margin.top]
            : [margin.top, height - margin.bottom + margin.top],
        );

      scale.x = d3
        .scaleTime()
        .domain(dateDomain())
        .range([margin.left, width - margin.right]);

      axis.x = d3
        .axisBottom(scale.x)
        .ticks(d3.timeHour.every(1))
        .tickPadding(10)
        .tickSize(-height + margin.bottom - 10)
        .tickFormat(d3.timeFormat('%H:%M') as any);

      axis.y = d3
        .axisLeft(scale.y)
        .tickValues(currentRouteObject.stops.map(({ distance }) => distance))
        .tickFormat((d, i) => currentRouteObject.stops[i].station)
        .tickSize(-width + (margin.left + margin.right));

      axis.vert = d3
        .axisBottom(scale.x)
        .ticks(d3.timeMinute.every(10))
        .tickSize(-height + margin.bottom)
        .tickFormat('' as any);

      scale.yCoordinate = (stationName: string) => {
        const yCoord = scale.y!(currentRouteObject.stops.filter(({ station }) => station === stationName)[0].distance);
        return yCoord;
      };
      drawAxis();
      plotTrains();
    }
  }, [axis, currentRouteObject, dateDomain, drawAxis, height, margin.bottom, margin.left, margin.right, margin.top, plotTrains, scale, trainDirection, width]);

  function parseTime(timeStr: string) {
    // Split the time string by colon
    const parts = timeStr.split(':');
    // Create a new Date object for January 1, 2000
    const date = new Date('January 1, 2000');
    // Set hours, minutes, and seconds
    date.setHours(parseInt(parts[0], 10));
    date.setMinutes(parseInt(parts[1], 10));
    date.setSeconds(parseInt(parts[2], 10));
    return date;
  }

  function handleRouteChange() {
    if (dropdownRef.current) {
      const [routeName, routeId] = dropdownRef.current.value.split('---');
      setRouteObject({ routeName, routeId });
    }
  }

  function handleStartStationChange(e: any) {
    const { value } = e.target;
    const index = startingStation.indexOf(value);
    if (index === -1) {
      setStartingStation((s) => [...s, value]);
    } else if (startingStation.length > 1) {
      setStartingStation((s) => s.filter((station) => station !== value));
    }
  }

  function handleTrainDirection(e: { target: { value: "Eastbound" | "Westbound"; }; }) {
    setTrainDirection(e.target.value);
  }

  const addZero = (num: number): string => num < 10 ? `0${num}` : `${num}`;

  return (
    <>
      <svg id="lirr-chart-svg" viewBox={`-90, -5, ${width + 90}, ${height + 40}`} />
      <div className='lirr_schedule-controls'>
        <div className='route_branch-group'>
          <h4>LIRR Branch</h4>
          <select ref={dropdownRef} onChange={handleRouteChange} name="branch" id="branch-select">
            {routes.map(({ route_id, route_long_name }) => (
              <option key={route_id} value={`${route_long_name}---${route_id}`}>{route_long_name}</option>
            ))}
          </select>
        </div>
        <div className='train_direction-group'>
          <h4>Train Direction</h4>
          <ul className='lirr-radio_group d3-list'>
            <li key="radio-eastbound"><RadioButton checked={trainDirection === 'Eastbound'} label='Eastbound' onChange={handleTrainDirection} /></li>
            <li key="radio-westbound"><RadioButton checked={trainDirection === 'Westbound'} label='Westbound' onChange={handleTrainDirection} /></li>
          </ul>
        </div>
        <div className='starting_station-group'>
          <h4>Starting Station</h4>
          <ul className="lirr-starting_station d3-list">
            {currentStarts.map((stop, i) => (
              <li key={`${stop}-${i}`}>
                <Checkbox key={`${stop}-${i + 1}`} handleChange={(e) => handleStartStationChange(e)} label={stop} checked={startingStation.includes(stop)} />
              </li>
            ))}
          </ul>
        </div>
        <div className='time_range-group'>
          <h4>Time Range</h4>
          <div className='range_slider-wrapper'>
            <DualThumbSlider setState={setTimeRange} state={timeRange} />
            <div className='range_slider-wrapper-display'>
              <p>{`${addZero(Math.ceil(timeRange[0]))}:00hrs`}</p><p>{`${addZero(Math.ceil(timeRange[1]))}:00hrs`}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
