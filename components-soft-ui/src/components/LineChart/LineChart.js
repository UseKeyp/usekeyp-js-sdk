import {Line} from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

/**
 * Line chart with Soft UI styling using ChartJS line chart component
 * @param data - ChartJS data object
 * @param title - Chart title
 * @returns {JSX.Element} - Line chart component
 * @constructor
 */
const LineChart = ({data, title}) => {
    return (
        <div className="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none">
            <div
                className="relative z-20 flex flex-col min-w-0 break-words bg-white border-0 border-solid dark:bg-gray-950 border-black-125 dark:shadow-soft-dark-xl rounded-2xl bg-clip-border">
                <div className="p-6 pb-0 mb-0 border-b-0 border-solid border-black-125 rounded-t-2xl">
                    <h6 className="dark:text-white">{title}</h6>
                    <p className="leading-normal text-sm dark:opacity-60">
                        <i className="fa fa-arrow-up text-lime-500" aria-hidden="true"></i>
                    </p>
                </div>
                <div className="flex-auto p-2">
                    <div>
                        <div>
                            <Line
                                data={data}
                                options={{
                                    scales: {
                                        y: {
                                            beginAtZero: true,
                                            grid: {
                                                drawTicks: false,
                                                display: true,
                                            },
                                            ticks: {
                                                display: true,
                                                color: "#B0BBC1",
                                                font: {
                                                    size: 12,
                                                },
                                            },
                                        },
                                        x: {
                                            grid: {
                                                drawOnChartArea: false,
                                                drawTicks: false,
                                            },
                                            ticks: {
                                                beginAtZero: true,
                                                font: {
                                                    size: 12,
                                                },
                                                color: "#B0BBC1",
                                            },
                                        },
                                    },
                                    plugins: {
                                        legend: false,
                                        tooltip: {
                                            titleColor: 'black',
                                            bodyColor: 'black',
                                            backgroundColor: '#EEF0F2',
                                            borderColor: '#B0BBC1',
                                            borderWidth: 0.5,
                                        },
                                    },
                                    interaction: {
                                        intersect: false,
                                        mode: 'nearest',
                                    },
                                    elements: {
                                        point: {
                                            radius: 0,
                                        },
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LineChart;
