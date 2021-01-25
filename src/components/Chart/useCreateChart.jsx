import React from "react";
import Chart from 'chart.js';

const useCreateChart = (containerId, data, title, colorRGBA, type, timeoutSec = 7) => {

    const buildNewChart = (ctx) => {
        const myChart = new Chart(ctx, {
            type,
            data: {
                labels: data.labels,
                datasets: [{
                    label: title,
                    data: data.data,
                    backgroundColor: [
                        rgbToRgbaColor(colorRGBA, 0.2),
                    ],
                    borderColor: [
                        rgbToRgbaColor(colorRGBA, 1),
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                legend: {
                    fontSize: 44,
                }
            }
        });
        return myChart;
    }

    React.useEffect(() => {
        var retries = 0;
        const creatChart = () => {
            retries += 0;
            if (retries > timeoutSec * 10) return;
            const element = document.getElementById(containerId)

            if (element) {
                const ctx = element.getContext('2d');
                if (ctx) {
                    buildNewChart(ctx);
                }
            } else {
                setTimeout(creatChart, 100);
            }
        };

        creatChart();
    }, [containerId]);

}
const rgbToRgbaColor = (rgb, a) => {
    return rgb.replace('rgb', 'rgba').replace(')', `, ${a})`)
}

export default useCreateChart;
