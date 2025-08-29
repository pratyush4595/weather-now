import { Link } from "react-router-dom";
import { BsThermometerHalf, BsWind, BsCloudSun } from "react-icons/bs";
import './TopCities.css';

const TopCities = ({ cities }) => {
  if (!cities || cities.length === 0) return null;

  return (
    <section className="mb-5" data-aos="fade-up">
      {/* Heading */}
      <h2 className="fw-bold text-center mb-4 display-6 text-gradient">
        Top Cities Weather
      </h2>

      <div className="row g-4">
        {cities.map((city, idx) => (
          <div className="col-12 col-sm-6 col-lg-4" key={idx}>
            <Link
              to={`/city/${city.city}`}
              className="text-decoration-none text-dark"
            >
              <div className="card city-card shadow-sm border-0 rounded-4 p-4 h-100 text-center bg-light-subtle">
                {/* City Name */}
                <h5 className="fw-bold mb-3">{city.city}</h5>

                {/* Weather Icon */}
                <BsCloudSun className="fs-1 text-warning mb-2" />

                {/* Temperature */}
                <h4 className="fw-semibold">
                  {city.current_weather.temperature}°C
                </h4>
                <p className="text-muted mb-3">Current Temperature</p>

                {/* Extra Details */}
                <div className="d-flex justify-content-center gap-4">
                  <div className="d-flex flex-column align-items-center">
                    <BsThermometerHalf className="fs-5 text-danger" />
                    <small>
                      {city.hourly?.apparent_temperature?.[0] ?? "--"}°C
                    </small>
                    <small className="text-muted">Feels</small>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <BsWind className="fs-5 text-info" />
                    <small>{city.current_weather.windspeed} km/h</small>
                    <small className="text-muted">Wind</small>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCities;
