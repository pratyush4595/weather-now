import { BsWind, BsDroplet, BsSunrise, BsSunset } from "react-icons/bs";
import { Link } from "react-router-dom";
import './CurrentWeather.css';

const CurrentWeather = ({ weather }) => {
    if (!weather || !weather.current_weather) return null;

    return (
        <section className="mb-5" data-aos="fade-up">
            {/* Heading */}
            <h2 className="fw-bold text-center mb-4 display-6 text-gradient">
                Current Weather in {weather.city}
            </h2>

            {/* Card */}
            <div className="card shadow-lg border-0 rounded-4 p-4 text-center bg-light-subtle">
                {/* Temperature */}
                <h3 className="display-4 fw-semibold text-dark mb-2">
                    {weather.current_weather.temperature}°C
                </h3>
                <p className="text-muted mb-4">Feels like today’s temperature</p>

                {/* Weather Stats */}
                <div className="row g-4 mt-3">
                    <div className="col-6 col-md-3">
                        <div className="d-flex flex-column align-items-center">
                            <BsWind className="fs-2 mb-2 text-info" />
                            <small className="fw-medium">Wind</small>
                            <span className="fw-semibold">
                                {weather.current_weather.windspeed} km/h
                            </span>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="d-flex flex-column align-items-center">
                            <BsDroplet className="fs-2 mb-2 text-primary" />
                            <small className="fw-medium">Humidity</small>
                            <span className="fw-semibold">
                                {weather.hourly.relativehumidity_2m?.[0] ?? "--"}%
                            </span>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="d-flex flex-column align-items-center">
                            <BsSunrise className="fs-2 mb-2 text-warning" />
                            <small className="fw-medium">Sunrise</small>
                            <span className="fw-semibold">
                                {weather.daily.sunrise?.[0].split("T")[1]}
                            </span>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="d-flex flex-column align-items-center">
                            <BsSunset className="fs-2 mb-2 text-danger" />
                            <small className="fw-medium">Sunset</small>
                            <span className="fw-semibold">
                                {weather.daily.sunset?.[0].split("T")[1]}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Button */}
                <div className="mt-4">
                    <Link
                        to={`/city/${weather.city}`}
                        className="btn btn-gradient px-4 py-2 rounded-pill shadow-sm"
                    >
                        View Full Report →
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CurrentWeather;
