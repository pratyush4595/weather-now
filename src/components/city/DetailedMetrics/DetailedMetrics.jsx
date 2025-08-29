import { BsDroplet, BsEye, BsSpeedometer2, BsCloud, BsThermometerHalf, BsSun } from "react-icons/bs";
import "./DetailedMetrics.css";

const DetailedMetrics = ({ weather }) => {
    return (
        <section className="mb-5" data-aos="fade-up">
            <h2 className="mb-3">Detailed Metrics</h2>
            <div className="row g-4">
                <div className="col-md-4 col-lg-3 col-6" data-aos="fade-up" data-aos-delay="100">
                    <div className="metric-card p-4 text-center rounded-4 shadow-sm">
                        <BsDroplet className="metric-icon text-primary mb-3" />
                        <h6 className="metric-label">Humidity</h6>
                        <p className="metric-value">{weather.hourly.relativehumidity_2m?.[0]}%</p>
                    </div>
                </div>
                <div className="col-md-4 col-lg-3 col-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="metric-card p-4 text-center rounded-4 shadow-sm">
                        <BsSpeedometer2 className="metric-icon text-danger mb-3" />
                        <h6 className="metric-label">Pressure</h6>
                        <p className="metric-value">{weather.hourly.surface_pressure?.[0]} hPa</p>
                    </div>
                </div>
                <div className="col-md-4 col-lg-3 col-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="metric-card p-4 text-center rounded-4 shadow-sm">
                        <BsEye className="metric-icon text-info mb-3" />
                        <h6 className="metric-label">Visibility</h6>
                        <p className="metric-value">{(weather.hourly.visibility?.[0] / 1000).toFixed(1)} km</p>
                    </div>
                </div>
                <div className="col-md-4 col-lg-3 col-6" data-aos="fade-up" data-aos-delay="400">
                    <div className="metric-card p-4 text-center rounded-4 shadow-sm">
                        <BsCloud className="metric-icon text-secondary mb-3" />
                        <h6 className="metric-label">Cloud Cover</h6>
                        <p className="metric-value">{weather.hourly.cloudcover?.[0]}%</p>
                    </div>
                </div>
                {/* Extra examples to enrich dashboard */}
                <div className="col-md-4 col-lg-3 col-6" data-aos="fade-up" data-aos-delay="500">
                    <div className="metric-card p-4 text-center rounded-4 shadow-sm">
                        <BsThermometerHalf className="metric-icon text-warning mb-3" />
                        <h6 className="metric-label">Feels Like</h6>
                        <p className="metric-value">{weather.hourly.apparent_temperature?.[0]}°C</p>
                    </div>
                </div>
                <div className="col-md-4 col-lg-3 col-6" data-aos="fade-up" data-aos-delay="600">
                    <div className="metric-card p-4 text-center rounded-4 shadow-sm">
                        <BsSun className="metric-icon text-success mb-3" />
                        <h6 className="metric-label">UV Index</h6>
                        <p className="metric-value">{weather.daily.uv_index_max?.[0]}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailedMetrics;
