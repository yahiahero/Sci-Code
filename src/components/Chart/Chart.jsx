import React from "react";
import useCreateChart from "../Chart/useCreateChart";

const Chart = ({
    data,
    title,
    colorRGBA,
    type = 'line',
    style = {}
}) => {
    const canvasId = 'chart' + title + Date.now()
    useCreateChart(canvasId, data, title, colorRGBA, type);
    return (
        <canvas id={canvasId} width="400" height="200" style={style}></canvas>
    )
}
export default Chart;
