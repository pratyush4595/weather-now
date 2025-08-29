import {
    BsDroplet,
    BsEye,
    BsSpeedometer2,
    BsCloudRain,
    BsSun,
    BsMoonStars,
} from "react-icons/bs";

import './WeatherHighlights.css';

const WeatherHighlights = ({ weather }) => {
    if (!weather) return null;

    // Extract required values safely
    const humidity = weather.hourly?.relativehumidity_2m?.[0] ?? "--";
    const pressure = weather.hourly?.surface_pressure?.[0] ?? "--";
    const visibility = weather.hourly?.visibility?.[0] / 1000 ?? "--"; // in km
    const rainChance = weather.hourly?.precipitation_probability?.[0] ?? "--";
    const uvIndex = weather.hourly?.uv_index?.[0] ?? "--";

    // Calculate day length if data is available
    const sunrise = weather.daily?.sunrise?.[0];
    const sunset = weather.daily?.sunset?.[0];
    let dayLength = "--";
    if (sunrise && sunset) {
        const sr = new Date(sunrise);
        const ss = new Date(sunset);
        const diff = (ss - sr) / 1000 / 60 / 60; // in hours
        dayLength = `${Math.floor(diff)}h ${Math.floor((diff % 1) * 60)}m`;
    }

    return (
        <section className="mb-5" data-aos="fade-up">
            <h2 className="fw-bold text-center mb-4 display-6 text-gradient">
                Weather Highlights
            </h2>

            <div className="row g-4">
                {/* Humidity */}
                <div className="col-6 col-md-4 col-lg-2">
                    <div className="highlight-card text-center p-4 rounded-4 shadow-sm h-100">
                        <BsDroplet className="fs-2 text-primary mb-2" />
                        <h6 className="fw-semibold">Humidity</h6>
                        <p className="fs-5 mb-0">{humidity}%</p>
                    </div>
                </div>

                {/* Air Pressure */}
                <div className="col-6 col-md-4 col-lg-2">
                    <div className="highlight-card text-center p-4 rounded-4 shadow-sm h-100">
                        <BsSpeedometer2 className="fs-2 text-secondary mb-2" />
                        <h6 className="fw-semibold">Pressure</h6>
                        <p className="fs-5 mb-0">{pressure} hPa</p>
                    </div>
                </div>

                {/* Visibility */}
                <div className="col-6 col-md-4 col-lg-2">
                    <div className="highlight-card text-center p-4 rounded-4 shadow-sm h-100">
                        <BsEye className="fs-2 text-info mb-2" />
                        <h6 className="fw-semibold">Visibility</h6>
                        <p className="fs-5 mb-0">{visibility} km</p>
                    </div>
                </div>

                {/* Rain Chance */}
                <div className="col-6 col-md-4 col-lg-2">
                    <div className="highlight-card text-center p-4 rounded-4 shadow-sm h-100">
                        <BsCloudRain className="fs-2 text-primary mb-2" />
                        <h6 className="fw-semibold">Rain Chance</h6>
                        <p className="fs-5 mb-0">{rainChance}%</p>
                    </div>
                </div>

                {/* UV Index */}
                <div className="col-6 col-md-4 col-lg-2">
                    <div className="highlight-card text-center p-4 rounded-4 shadow-sm h-100">
                        <BsSun className="fs-2 text-warning mb-2" />
                        <h6 className="fw-semibold">UV Index</h6>
                        <p className="fs-5 mb-0">{uvIndex}</p>
                    </div>
                </div>

                {/* Day Duration */}
                <div className="col-6 col-md-4 col-lg-2">
                    <div className="highlight-card text-center p-4 rounded-4 shadow-sm h-100">
                        <BsMoonStars className="fs-2 text-dark mb-2" />
                        <h6 className="fw-semibold">Day Length</h6>
                        <p className="fs-6 mb-0">{dayLength}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeatherHighlights;
