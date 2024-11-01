"use client";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface StatisticsChartProps {
  profit: number;
  loss: number;
}

const StatisticsChart: React.FC<StatisticsChartProps> = ({ profit, loss }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const data = [profit, loss];
    const colors = ["#1fc29f", "#fd7f4a"]; // Зеленый и Красный
    const width = 240;
    const height = 240;
    const radius = Math.min(width, height) / 2;

    // Удаляем предыдущие элементы, если они есть
    d3.select(svgRef.current).selectAll("*").remove();

    // Создаем SVG элемент
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Создаем круговую диаграмму
    const pie = d3.pie();
    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    const arcs = svg
      .selectAll(".arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");

    arcs
      .append("path")
      .attr("d", arc as any)
      .attr("fill", (d, i) => colors[i]);
  }, [profit, loss]);

  return <svg ref={svgRef} />;
};

export default StatisticsChart;
