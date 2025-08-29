import { useRef, useState } from "react";
import {
    BsSun,
    BsCloudSun,
    BsCloud,
    BsCloudRain,
    BsSnow,
    BsUmbrella,
    BsWind,
    BsThermometerHalf,
} from "react-icons/bs";
import "./Forecast7Day.css";

const Forecast7Day = ({ weather }) => {
    const days = weather?.daily?.time?.slice(0, 7) || [];
    const scrollerRef = useRef(null);
    const [openIdx, setOpenIdx] = useState(null);

    // Icon logic (simple fallback)
    const getIconForDay = (i) => {
        const max = weather?.daily?.temperature_2m_max?.[i] ?? 0;
        const min = weather?.daily?.temperature_2m_min?.[i] ?? 0;
        const precipProb = weather?.daily?.precipitation_probability_max?.[i] ?? 0;
        const precipSum = weather?.daily?.precipitation_sum?.[i] ?? 0;

        if (max <= 2 || min <= 0) return <BsSnow className="cond-icon text-info" />;
        if (precipProb >= 60 || precipSum > 1.5)
            return <BsCloudRain className="cond-icon text-primary" />;
        if (precipProb >= 30) return <BsCloud className="cond-icon text-secondary" />;
        return <BsCloudSun className="cond-icon text-warning" />;
    };

    const fmtDay = (d) =>
        new Date(d).toLocaleDateString("en-US", { weekday: "short" });
    const fmtDate = (d) =>
        new Date(d).toLocaleDateString("en-US", { day: "numeric", month: "short" });

    const scrollByCards = (dir = 1) => {
        const node = scrollerRef.current;
        if (!node) return;
        const amount = Math.round(node.clientWidth * 0.9);
        node.scrollBy({ left: dir * amount, behavior: "smooth" });
    };

    return (
        <section className="mb-5 forecast7-container" data-aos="fade-up">
            <h2 className="mb-3">7 Day Forecast</h2>

            <div className="forecast-scroller position-relative">
                {/* Prev button */}
                <button
                    className="scroll-btn prev d-none d-md-flex justify-content-md-center"
                    type="button"
                    aria-label="Scroll left"
                    onClick={() => scrollByCards(-1)}
                >
                    ‹
                </button>

                {/* Cards scroller */}
                <div className="scroller" ref={scrollerRef}>
                    {days.map((day, i) => {
                        const max = weather.daily.temperature_2m_max?.[i];
                        const min = weather.daily.temperature_2m_min?.[i];
                        const rainProb = weather.daily.precipitation_probability_max?.[i];
                        const windMax = weather.daily.windspeed_10m_max?.[i];
                        const uvMax = weather.daily.uv_index_max?.[i];
                        const sunrise = weather.daily.sunrise?.[i];
                        const sunset = weather.daily.sunset?.[i];

                        const isOpen = openIdx === i;

                        return (
                            <article
                                key={i}
                                className={`day-card ${isOpen ? "open" : ""}`}
                                role="button"
                                tabIndex={0}
                                onClick={() => setOpenIdx(isOpen ? null : i)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        setOpenIdx(isOpen ? null : i);
                                    }
                                }}
                                aria-expanded={isOpen}
                            >
                                {/* Header */}
                                <header className="d-flex justify-content-between align-items-center mb-2">
                                    <div className="d-flex flex-column">
                                        <span className="day fw-semibold">{fmtDay(day)}</span>
                                        <span className="date text-muted small">{fmtDate(day)}</span>
                                    </div>
                                    {getIconForDay(i)}
                                </header>

                                {/* Temps */}
                                <div className="temps d-flex align-items-center gap-2">
                                    <span className="temp-high chip">{Math.round(max)}°</span>
                                    <span className="temp-low text-muted">
                                        {Math.round(min)}°
                                    </span>
                                </div>

                                {/* Mini metrics */}
                                <div className="mini-row text-muted">
                                    <span className="d-inline-flex align-items-center gap-1">
                                        <BsUmbrella /> {rainProb ?? "--"}%
                                    </span>
                                    <span className="d-inline-flex align-items-center gap-1">
                                        <BsWind /> {windMax ?? "--"} km/h
                                    </span>
                                    <span className="d-inline-flex align-items-center gap-1 d-none d-sm-inline-flex">
                                        <BsSun /> {uvMax ?? "--"}
                                    </span>
                                </div>

                                {/* Expandable details */}
                                <div className="details" aria-hidden={!isOpen}>
                                    <div className="divider" />
                                    <div className="detail-grid">
                                        <div className="detail">
                                            <span className="label">Sunrise</span>
                                            <span className="value">
                                                {sunrise ? sunrise.split("T")[1] : "--"}
                                            </span>
                                        </div>
                                        <div className="detail">
                                            <span className="label">Sunset</span>
                                            <span className="value">
                                                {sunset ? sunset.split("T")[1] : "--"}
                                            </span>
                                        </div>
                                        <div className="detail">
                                            <span className="label">Feels</span>
                                            <span className="value d-inline-flex align-items-center gap-1">
                                                <BsThermometerHalf />
                                                {Math.round((max + min) / 2)}°
                                            </span>
                                        </div>
                                    </div>
                                    <p className="hint text-muted small mb-0">
                                        Tap card to collapse
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Next button */}
                <button
                    className="scroll-btn next d-none d-md-flex justify-content-md-center"
                    type="button"
                    aria-label="Scroll right"
                    onClick={() => scrollByCards(1)}
                >
                    ›
                </button>
            </div>

            <p className="text-center text-muted small mt-2 d-md-none">
                Swipe to see more days • Tap a card for details
            </p>
        </section>
    );
};

export default Forecast7Day;
