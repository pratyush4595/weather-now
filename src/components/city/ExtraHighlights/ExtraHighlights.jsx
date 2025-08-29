import { BsSun, BsUmbrella, BsWind } from "react-icons/bs";
import "./ExtraHighlights.css";

const ExtraHighlights = ({ weather }) => {
    return (
        <section data-aos="fade-up">
            <h2 className="mb-3">Extra Highlights</h2>
            <div className="row g-4">
                <div className="col-md-4 col-12" data-aos="fade-up" data-aos-delay="100">
                    <div className="highlight-card text-center p-4 rounded-4 shadow-sm">
                        <BsSun className="highlight-icon text-warning mb-3" />
                        <h6 className="highlight-label">UV Index</h6>
                        <p className="highlight-value">{weather.daily.uv_index_max?.[0]}</p>
                    </div>
                </div>
                <div className="col-md-4 col-12" data-aos="fade-up" data-aos-delay="200">
                    <div className="highlight-card text-center p-4 rounded-4 shadow-sm">
                        <BsUmbrella className="highlight-icon text-primary mb-3" />
                        <h6 className="highlight-label">Precipitation Chance</h6>
                        <p className="highlight-value">{weather.daily.precipitation_probability_max?.[0]}%</p>
                    </div>
                </div>
                <div className="col-md-4 col-12" data-aos="fade-up" data-aos-delay="300">
                    <div className="highlight-card text-center p-4 rounded-4 shadow-sm">
                        <BsWind className="highlight-icon text-info mb-3" />
                        <h6 className="highlight-label">Max Wind Gust</h6>
                        <p className="highlight-value">{weather.daily.windspeed_10m_max?.[0]} km/h</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExtraHighlights;
