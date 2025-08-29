import { BsThermometerHalf, BsWind } from "react-icons/bs";
import "./CityHero.css";

const CityHero = ({ city, weather }) => {
    const temp = weather.current_weather?.temperature;
    const wind = weather.current_weather?.windspeed;

    return (
        <section className="city-hero mb-5" data-aos="fade-up">
            <div className="hero-overlay p-5 rounded-4 text-center text-white">
                <h1 className="display-4 fw-bold">{city}</h1>
                <p className="lead mb-4">{new Date().toLocaleString()}</p>
                <div className="d-flex justify-content-center gap-4 align-items-center">
                    <div className="fs-1">{temp}°C</div>
                    <div className="d-flex flex-column text-start">
                        <span><BsThermometerHalf /> Feels like {weather.hourly.apparent_temperature?.[0]}°C</span>
                        <span><BsWind /> {wind} km/h</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CityHero;
