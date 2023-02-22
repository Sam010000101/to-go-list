import { React, useState, useEffect } from "react";
import OpenMeteoAPI from "../utils/APIs/OpenMeteoAPI";
import {
    Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./style.css";

ChartJS.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
);

function Weather(props) {

    const { destinationData } = props;
    const [chartOptions, setchartOptions] = useState({
        responsive: true,
        maintainAspectRatio: false,
        pointStyle: false,
        borderWidth: 2,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false,
                text: destinationData.properties.country
            }
        }
    });
    const [weatherData, setWeatherData] = useState({
        datasets: [],
        labels: []
    });

    const [currLocation, setCurrLocation] = useState("");
    const { lat, lon, name } = destinationData.properties;

    useEffect(() => {
        if (typeof destinationData.properties.lat !== "undefined" && name !== currLocation) {

            setCurrLocation(name);

            OpenMeteoAPI.searchTerms(lat, lon)
                .then(res => {
                    if (res.data.length === 0) {
                        throw new Error("no results found.");
                    }
                    if (res.data.status === "error") {
                        throw new Error(res.data.message);
                    }
                    const { daily } = res.data;
                    const interval = 15;
                    const fortnightly = {
                        precipitation: [],
                        temperature: [],
                        // labels: [],
                    };

                    for (let i = 0; i < daily.time.length - interval; i += interval) {
                        fortnightly.precipitation.push(daily.precipitation_sum[i]);
                        fortnightly.temperature.push(daily.temperature_2m_mean[i]);
                        // fortnightly.labels.push(daily.time[i]);
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
                        labels: [
                            "January",
                            "Mid Jan",
                            "February",
                            "Mid Feb",
                            "March",
                            "Mid Mar",
                            "April",
                            "Mid Apr",
                            "May",
                            "Mid May",
                            "June",
                            "Mid Jun",
                            "July",
                            "Mid Jul",
                            "August",
                            "Mid Aug",
                            "September",
                            "Mid Sept",
                            "October",
                            "Mid Oct",
                            "November",
                            "Mid Nov",
                            "December",
                            "Mid Dec",]
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
    }, [destinationData, chartOptions, currLocation, lat, lon, name]);

    console.log("Weather");
    return (
        <div className={Object.hasOwn(destinationData.properties, "lat") ? "group loaded" : "group"}>
            <div className="pt-3 gap-2 flex justify-center mx-1 mt-2  bg-[#025] rounded-t-xl rounded-b w-full h-[48px]">
                <h2 className="font-itim text-md relative text-blue-200 font-bold leading-6">Weather View</h2>
            </div>
            <div className="flex flex-row justify-center pt-2" id="current-weather">
                <div className="w-full bg-white">
                    <div className="block group-[.loaded]:hidden mt-2 xl:mt-5 text-slate-400 text-center px-10 lg:px-24 xl:px-36 2xl:px-52">
                        <p>Our weather data covers the entirety of the last year and will help you make an informed decision about the best time for your trip</p>
                    </div>

                    <ul className="hidden group-[.loaded]:block text-[12px] text-slate-700" id="weather-chart-key">
                        <li className="inline-block mr-4" id="chart-temperature"><span className="text-[22px] inline-block relative top-[2px] mr-1 text-temperature">&mdash; </span>Mean temperature</li>
                        <li className="inline-block" id="chart-precipitation"><span className="text-[22px] inline-block relative top-[2px] mr-1 text-precipitation">&mdash; </span>Precipitation</li>
                    </ul>

                    <div className="relative hidden group-[.loaded]:block" id="weather-chart">
                        <Line options={chartOptions} data={weatherData} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Weather;
