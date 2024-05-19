import * as React from 'react';
import { useRef, useEffect, useCallback } from 'react';
import * as d3 from 'd3';
import weatherData from './data/weatherData.json';

interface MinMax {
  date: string;
  temp: number;
  index: number;
  className: string;
  title: string;
}

export default function NycWeather() {
  const width = 1090;
  const tempHeight = 545;
  const precipHeight = 164;
  const barWidth = Math.floor(width / weatherData.length);
  const temperatureSvg = useRef<SVGSVGElement>(null);
  const precipitationSvg = useRef<SVGSVGElement>(null);
  const tempRange = { min: -10, max: 100 };
  const margin = { top: 30, right: 40, bottom: 25, left: 40 };

  const formatNewDate = (mmDDyyyy: string) => {
    const dateArray = mmDDyyyy.split('-');
    return new Date(`${dateArray[1]}/${dateArray[0]}/${dateArray[2]}`);
  };

  const axisXY = useCallback((svgSelection: any, height: number, yScale: any, label: string, rightAxis: boolean, isPrecip: boolean) => {
    const snowYScale = d3
      .scaleLinear()
      .domain([0, 29.75])
      .range([precipHeight - margin.bottom, 0]);

    const dateScale = d3
      .scaleTime()
      .domain([formatNewDate(weatherData[0].date), formatNewDate(weatherData[weatherData.length - 1].date)])
      .range([margin.left, width - margin.right]);

    // Precip Chart
    if (isPrecip) {
      svgSelection
        .append('g')
        .attr('class', 'x-axis-weather')
        .attr('transform', `translate(0, ${height - margin.bottom})`)
        .call(d3.axisBottom(dateScale).tickFormat(d3.timeFormat('%b') as any))
        .selectAll('.x-axis-weather text')
        .attr('transform', `translate(${width / 12 / 2 - 3},0)`);

      // Vertical Lines
      svgSelection.selectAll('g.tick line')
        .attr('y1', yScale(96))
        .attr('y2', height + 10)
        .attr('transform', `translate(0,-${height - 9})`)
        .attr('stroke-width', '0.5')
        .attr('stroke', 'lightgrey');

      svgSelection
        .append('g')
        .attr('class', 'y-axis-precip')
        .attr('transform', `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(yScale));

      // horiz lines
      svgSelection.selectAll('.y-axis-precip line')
        .attr('x2', width - (margin.left + margin.right) + 10)
        .attr('stroke-width', '0.5')
        .attr('stroke', 'lightgrey');

      svgSelection
        .append('text')
        .attr('class', 'axis-label')
        .text(label)
        .attr('text-anchor', 'middle')
        .attr(
          'transform',
          `translate(5,${height / 2 - (margin.top / 2)}) rotate(90)`,
        )
        .attr('x', 0)
        .attr('y', 0);
    } else {
      // Temperature Chart
      svgSelection
        .append('g')
        .attr('class', 'x-axis-weather')
        .attr('transform', `translate(0, ${margin.top})`)
        .call(d3.axisTop(dateScale).tickFormat(d3.timeFormat('%b') as any))
        .selectAll('.x-axis-weather text')
        .attr('transform', `translate(${width / 12 / 2 - 3},0)`);

      svgSelection.selectAll('g.tick line')
        .attr('y1', yScale(96))
        .attr('y2', height + 10)
        .attr('transform', `translate(0,${-margin.top - margin.bottom - 10})`)
        .attr('stroke-width', '0.5')
        .attr('stroke', 'lightgrey');

      svgSelection
        .append('g')
        .attr('class', 'y-axis-fahrenheit')
        .attr('transform', `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(yScale).tickFormat((d) => `${d}° F`));

      // horiz lines
      svgSelection.selectAll('.y-axis-fahrenheit line')
        .attr('x2', width - (margin.left + margin.right) + 10)
        .attr('stroke-width', '0.5')
        .attr('stroke', 'lightgrey');
    }

    if (rightAxis) {
      svgSelection
        .append('g')
        .attr('class', 'y-axis-right')
        .attr('transform', `translate(${width - margin.right}, 0)`)
        .call(d3.axisRight(snowYScale)
          .tickValues(d3.range(snowYScale.domain()[0], snowYScale.domain()[1] + 1, 3.5)))
        .selectAll('.tick line')
        .attr('stroke-width', '0.5')
        .attr('stroke', 'lightgrey')
        .selectAll('g.tick line')
        .filter((_: any, i: number) => i === 0)
        .attr('stroke', 'black');

      d3.select('.y-axis-right').selectAll('.tick text').attr('fill', 'rgb(175, 135, 189)');
      d3.select('.y-axis-right').selectAll('.domain').attr('stroke', 'rgb(175, 135, 189)');

      svgSelection.append('text')
        .attr('class', 'y-axis-snow-text')
        .attr('text-anchor', 'middle')
        .text('SNOW FALL IN.')
        .attr('fill', 'rgb(175, 135, 189)')
        .attr(
          'transform',
          `translate(${width},${height / 2 - (margin.top / 2)}) rotate(-90)`,
        )
        .attr('x', 0)
        .attr('y', 0);
    }
  }, [margin.bottom, margin.left, margin.right, margin.top, precipHeight, width]);

  /* ********************** Scales ********************** */
  const xScale = d3
    .scaleLinear()
    .domain([0, weatherData.length])
    .range([margin.left, Math.floor(width - margin.right)]);

  const tempYScale = d3
    .scaleLinear()
    .domain([tempRange.min, tempRange.max])
    .range([tempHeight - margin.bottom, margin.top]);

  const precipYScale = d3
    .scaleLinear()
    .domain([0, 8.5])
    .range([precipHeight - margin.bottom, 0]);

  const precipLine = d3
    .line()
    .curve(d3.curveBasis)
    .x((d) => xScale(+d[0]))
    .y((d) => precipYScale(+d[1]));

  const snowYScale = d3
    .scaleLinear()
    .domain([29.75, 0])
    .range([precipHeight - margin.bottom, 0]);

  // *************************** Draw MinMax ********************************* //
  const drawMinMax = useCallback((svgSelection: any) => {
    getMinMax().forEach((temp) => minMaxClosure(temp));
    function minMaxClosure(tempObj: MinMax) {
      const lineGroup = svgSelection.append('g');
      const convertDate = (dateString: string) => {
        const parseDate = d3.timeParse('%d-%m-%Y');
        const formatDate = d3.timeFormat('%B %d, %Y');
        const date = parseDate(dateString) as Date;
        return formatDate(date);
      };
      lineGroup
        .append('line')
        .attr('x1', xScale(tempObj.index + tempObj.index / weatherData.length))
        .attr('x2', xScale(tempObj.index + 10 + tempObj.index / weatherData.length))
        .attr('y1', tempYScale(+tempObj.temp))
        .attr('y2', tempYScale(+tempObj.temp))
        .attr('class', `${tempObj.className}-line`)
        .attr('stroke-width', 1)
        .attr('stroke', 'steelblue');

      lineGroup
        .append('text')
        .attr('x', xScale(tempObj.index + 11 + tempObj.index / weatherData.length))
        .attr('y', tempYScale(+tempObj.temp))
        .attr('text-anchor', 'start')
        .attr('class', `${tempObj.className}-text`)
        .text(`${tempObj.title}: ${tempObj.temp}° on ${convertDate(tempObj.date)}`);
    }
  }, [tempYScale, xScale]);

  /* ********************** Temperature Chart ********************** */
  useEffect(() => {
    if (width > 0 && temperatureSvg.current) {
      /* ****************** Call Make Axes ****************** */
      axisXY(d3.select(temperatureSvg.current), tempHeight, tempYScale, 'Degree F°', false, false);

      /* *************** Draw Temperature Bars *************** */
      d3.selectAll('.temp-bars').remove();
      d3.select(temperatureSvg.current)
        .selectAll('rect')
        .data(weatherData)
        .join('rect')
        .attr('class', 'temp-bars')
        .attr('width', barWidth)
        .attr('height', (d) => tempYScale(+d.min_temp) - tempYScale(+d.max_temp))
        .attr('x', (_, i) => xScale(i + i / weatherData.length))
        .attr('y', (d) => tempYScale(+d.max_temp))
        .attr('rx', barWidth * 0.25)
        .attr('fill', 'rgb(209,192,172)');

      drawMinMax(d3.select(temperatureSvg.current));
    }
  }, [axisXY, barWidth, drawMinMax, tempYScale, xScale]);

  /* ********************** Precipitation Chart ********************** */
  const drawPrecipLine = useCallback((svgSelection: any, array: any[]) => {
    svgSelection
      .append('text')
      .attr('class', 'precip-label')
      .attr('x', xScale(+array[array.length - 1][0] - 1))
      .attr('y', precipYScale(+array[array.length - 1][1] + 0.5))
      .attr('text-anchor', 'end')
      .text(`${array[array.length - 1][1].toFixed(2)} in`);

    svgSelection
      .append('path')
      .data([array])
      .attr('d', precipLine)
      .attr('stroke', '#303030')
      .attr('stroke-width', 1)
      .attr('fill', 'none');
  }, [precipLine, precipYScale, xScale]);

  const drawSnowGraph = useCallback((svgSelection: any, array: any[]) => {
    svgSelection
      .append('g')
      .attr('class', 'snow-graph')
      .selectAll('rect')
      .attr('class', 'snow-bar')
      .data(array)
      .join('rect')
      .attr('width', barWidth)
      .attr('height', (d: (string | number)[]) => snowYScale(+d[1]))
      .attr('x', (d: (string | number)[]) => xScale(+d[0]))
      .attr('y', (d: (string | number)[]) => (precipHeight - snowYScale(+d[1]) - margin.bottom))
      .attr('fill', 'rgb(221,198,229)');
  }, [barWidth, margin.bottom, snowYScale, xScale]);

  useEffect(() => {
    if (width > 0 && precipitationSvg.current) {
      const svg = d3.select(precipitationSvg.current);
      axisXY(d3.select(precipitationSvg.current), precipHeight, precipYScale, 'PRECIP. IN.', true, true);
      let currentPrecipArray: number[][] = [];
      let currentSnowArray: number[][] = [];
      let monthlyPrecipTotal = 0;
      let monthlySnowTotal = 0;
      let currentMonth = '';
      for (let i = 0; i < weatherData.length; i += 1) {
        const { date, precip, snow_fall } = weatherData[i];
        const currDate = date.split('-');
        const currMonYear = [currDate[1], currDate[2]].join('');
        if (currMonYear === currentMonth) {
          monthlyPrecipTotal += +precip;
          monthlySnowTotal += +snow_fall;
          currentPrecipArray.push([i + 1.5, monthlyPrecipTotal]); // the 1.5 shifts the x val
          currentSnowArray.push([i, monthlySnowTotal]);
        } else {
          if (currentPrecipArray.length > 0) {
            drawSnowGraph(svg, currentSnowArray);
            drawPrecipLine(svg, currentPrecipArray);
            currentPrecipArray = [[i, 0]];
            currentSnowArray = [[i, 0]];
          }
          currentMonth = currMonYear;
          monthlyPrecipTotal = +precip;
          monthlySnowTotal = +snow_fall;
          currentPrecipArray.push([i + 2, monthlyPrecipTotal]);
          currentSnowArray.push([i + 2, monthlySnowTotal]);
        }
        if (i === weatherData.length - 1) {
          drawSnowGraph(svg, currentSnowArray);
          drawPrecipLine(svg, currentPrecipArray);
        }
      }
    }
  }, [axisXY, drawPrecipLine, drawSnowGraph, precipYScale]);

  /* ********************** Acquire MinMax Temp ********************** */
  function getMinMax() {
    // Yearly low object
    const yearlyMin: MinMax = {
      date: '',
      temp: Infinity,
      index: 0,
      className: 'low-temp',
      title: 'Low',
    };

    // Yearly high object
    const yearlyMax: MinMax = {
      date: '',
      temp: -Infinity,
      index: 0,
      className: 'high-temp',
      title: 'High',
    };
    const minMax = [yearlyMin, yearlyMax];
    for (let i = 0; i < weatherData.length; i += 1) {
      if (weatherData[i].min_temp < yearlyMin.temp) {
        yearlyMin.date = weatherData[i].date;
        yearlyMin.temp = weatherData[i].min_temp;
        yearlyMin.index = i;
      }
      if (weatherData[i].max_temp > yearlyMax.temp) {
        yearlyMax.date = weatherData[i].date;
        yearlyMax.temp = weatherData[i].max_temp;
        yearlyMax.index = i;
      }
    }
    return minMax;
  }

  return (
    <div className="nyc_weather-wrap">
      <svg ref={temperatureSvg} viewBox={`0, 0, ${width},${tempHeight}`} />
      <svg ref={precipitationSvg} viewBox={`0, 0, ${width},${precipHeight}`} />
      <div className="about-text">New York City - Temperature and Cumulative Monthly Precipitation - 2016</div>
    </div>
  );
}
