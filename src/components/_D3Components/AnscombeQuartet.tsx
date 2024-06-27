import * as React from 'react';
import { useRef, useEffect, useCallback } from 'react';
import * as d3 from 'd3';
import { Selection, ScaleLinear } from 'd3';
import anscombeData from './data/anscombeQuartetData.json';

type LineType = { x: number, y: number; };

interface AnscombeData {
  id: number,
  dataset: string;
  x: number;
  y: number;
}

export default function AnscombeQuartet() {
  const quartetWrap = useRef<HTMLDivElement>(null);
  const boxWidth = 500;
  const boxHeight = 309;
  const margin = { top: 10, right: 20, bottom: 25, left: 25 };
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  /* Axis Creation */
  const drawAxes = useCallback((svg: Selection<SVGSVGElement, unknown, null, undefined>, xScale: ScaleLinear<number, number, never>, yScale: ScaleLinear<number, number, never>) => {
    svg
      .append('g')
      .attr('class', 'x-axis-anscombe axis-anscombe')
      .attr('transform', `translate(0,${boxHeight - margin.bottom})`)
      .call(d3.axisBottom(xScale))
      .selectAll('.tick line')
      .attr('y2', 4)
      .selectAll('.tick text')
      .classed('no-scale', true);

    svg
      .append('g')
      .attr('class', 'y-axis-anscombe axis-anscombe')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale).ticks(6))
      .selectAll('.tick line')
      .attr('x2', -4);

  }, [margin.bottom, margin.left]);

  /* Chart Creation */
  const makeChart = useCallback((dataset: string, container: HTMLDivElement) => {
    const data = anscombeData.filter((quad: AnscombeData) => quad.dataset === dataset);
    const lineData = [];
    const { m, b } = linearRegression(data);
    for (let x = 1; x < 21; x += 1) {
      const y = m * x + b;
      lineData.push({ x, y });
    }

    const yScale = d3
      .scaleLinear()
      .domain([0, 13])
      .range([boxHeight - margin.bottom, margin.top]);

    const xScale = d3
      .scaleLinear()
      .domain([0, 20])
      .range([margin.left, boxWidth - margin.right]);

    const scaledData = data.map((d: { x: d3.NumberValue; y: d3.NumberValue; }) => ({
      x: xScale(d.x),
      y: yScale(d.y),
    }));

    const svg = d3.select(container)
      .append('svg')
      .attr('viewBox', [0, 0, boxWidth, boxHeight])
      .attr("style", `height: auto; font: 10px sans-serif; overflow: visible;`)
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('class', `${dataset}-box anscombe-box`)
      .style('display', 'block');

    const regLine = d3
      .line<LineType>()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y));

    svg.selectAll('.regress-line').remove(); // remove line before redraw
    svg
      .append('path')
      .datum(lineData)
      .attr('fill', 'none')
      .attr('class', 'regress-line')
      .attr('stroke', '#ff7300')
      .attr('d', regLine);

    svg
      .selectAll('circle')
      .data(scaledData)
      .join('circle')
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('r', boxHeight / 100)
      .attr('fill', '#202020')
      .attr('stroke', '#202020');

    // This was to solve a hiccup between drawing the chart and axes
    timeoutRef.current = setTimeout(() => drawAxes(svg, xScale, yScale), 0);

    return svg;
  }, [drawAxes, margin.bottom, margin.left, margin.right, margin.top]);

  useEffect(() => {
    if (quartetWrap.current) {
      const container = document.createElement('div');
      container.classList.add('anscombe-main-div');
      quartetWrap.current.appendChild(container);

      d3.selectAll('.anscombe-box').remove();
      const classNames = [
        { name: 'box-one', dSet: 'I' },
        { name: 'box-two', dSet: 'II' },
        { name: 'box-three', dSet: 'III' },
        { name: 'box-four', dSet: 'IV' },
      ];
      const svgs = classNames.map(({ dSet }) => makeChart(dSet, container));
      svgs.forEach((elem) => container.appendChild(elem.node() as Node));
    }
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [makeChart]);

  function linearRegression(data: AnscombeData[]) {
    const n = data.length;
    const sumX = data.reduce((prev: number, curr: { x: number; }) => prev + +curr.x, 0);
    const sumY = data.reduce((prev: number, curr: { y: number; }) => prev + +curr.y, 0);
    const sumXY = data.reduce((prev: number, curr: { x: number; y: number; }) => prev + +curr.x * +curr.y, 0);
    const sumXsq = data.reduce((prev: number, curr: { x: number; }) => prev + +curr.x * +curr.x, 0);
    const m = (n * sumXY - sumX * sumY) / (n * sumXsq - sumX * sumX);
    const b = (sumY - m * sumX) / n;
    return { m, b };
  }

  return (
    <div className="d3-quartet-wrap" ref={quartetWrap} />
  );
};
