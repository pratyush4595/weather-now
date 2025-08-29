import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import "./HourlyChart.css";

const HourlyChart = ({ weather }) => {
    const hours = weather.hourly?.time?.slice(0, 24) || [];
    const temps = weather.hourly?.temperature_2m?.slice(0, 24) || [];
    const chartData = hours.map((time, i) => ({
        time: new Date(time).getHours() + ":00",
        temp: temps[i],
    }));

    return (
        <section className="mb-5" data-aos="fade-up">
            <h2 className="mb-3">Hourly Temperature</h2>
            <div className="chart-wrapper p-3 rounded-4 shadow-sm bg-body">
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="temp" stroke="#0d6efd" strokeWidth={2} dot={{ r: 3 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
};

export default HourlyChart;
