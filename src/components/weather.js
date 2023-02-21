import { React, useState, useEffect } from "react";
import OpenMeteoAPI from "./utils/APIs/OpenMeteoAPI";
import {
    Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
} from "chart.js";

import {Line} from "react-chartjs-2";

ChartJS.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
);

function Weather(props) {

    const {destinationData} = props;
    const [chartOptions, setchartOptions] = useState({
        responsive: true, 
        pointStyle: false,
        borderWidth: 2,
        plugins: {
            legend: {
                align: "center",
                position: "top",
            },
            title: {
                display: true,
                text: destinationData.properties.country
            }
        }
    });
    const [weatherData, setWeatherData] = useState({
        datasets: [],
        labels: []
    });

    useEffect(() => {
        if (typeof destinationData.properties.lat !== "undefined") {
            
            const {lat, lon} = destinationData.properties;
            
            OpenMeteoAPI.searchTerms(lat, lon)
            .then(res => {
                if (res.data.length === 0) {
                    throw new Error("no results found.");
                }
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                const {daily} = res.data;
                const interval = 15;
                const fortnightly = {
                    precipitation: [],
                    temperature: [],
                    labels: [],
                };

                for (let i = 0; i < daily.time.length - interval; i += interval) {
                    fortnightly.precipitation.push(daily.precipitation_sum[i]);
                    fortnightly.temperature.push(daily.temperature_2m_mean[i]);
                    fortnightly.labels.push(daily.time[i]);
                }

                const wd = {
                    datasets: [
                        {
                            label: "Precipitation",
                            data: fortnightly.precipitation,
                            borderColor: "rgb(53, 162, 235)",
                            backgroundColor: "rgba(255, 255, 255, 0)"
                        },
                        {
                            label: "Mean temperature",
                            data: fortnightly.temperature,
                            borderColor: "rgb(255, 99, 132)",
                            backgroundColor: "rgba(255, 255, 255, 0)"
                        }
                    ],
                    labels: fortnightly.labels
                }
                
                setWeatherData(wd);
                setchartOptions({
                    ...chartOptions,
                    title: {
                        display: true,
                        text: destinationData.properties.country
                    }
                });
            })
        }
       
    }, [destinationData, chartOptions])

    return ( 
        <div className= "container mx-auto bg-slate-400 h-36 rounded-xl">
            <h1>Weather</h1>
            <div className="flex flex-row justify-center pt-2" id="current-weather">
                <div className="relative w-full px-3 -top-10">
                    <Line options={chartOptions} data={weatherData} />
                </div>
            </div>
        </div>
    );
}
export default Weather;
