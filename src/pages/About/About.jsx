import { useEffect } from "react";
import { BsCloudSun, BsLightning, BsGlobe2 } from "react-icons/bs";
import "./About.css";

function About() {
    useEffect(() => {
        document.title = 'About Us | Weather Now';
    }, []);

    return (
        <section className="about-page container py-5" data-aos="fade-up">
            <div className="text-center mb-5">
                <BsCloudSun className="about-icon mb-3" />
                <h2 className="fw-bold">About Weather Now</h2>
                <p className="lead text-muted mx-auto about-intro">
                    Weather Now is built for <span className="fw-semibold">Jamie</span>, an outdoor enthusiast,
                    to check current conditions quickly and plan activities smarter.
                    It’s fast, accurate, and designed with elegance in mind.
                </p>
            </div>

            <div className="row g-4">
                <div className="col-md-4">
                    <div className="about-card h-100 p-4 rounded-4 shadow-sm text-center">
                        <BsGlobe2 className="fs-1 text-primary mb-3" />
                        <h5>Global Coverage</h5>
                        <p className="text-muted">
                            Access reliable weather data for cities worldwide, powered by Open-Meteo.
                        </p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="about-card h-100 p-4 rounded-4 shadow-sm text-center">
                        <BsLightning className="fs-1 text-warning mb-3" />
                        <h5>Real-Time Updates</h5>
                        <p className="text-muted">
                            Stay updated with the latest forecasts, refreshed frequently for accuracy.
                        </p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="about-card h-100 p-4 rounded-4 shadow-sm text-center">
                        <BsCloudSun className="fs-1 text-info mb-3" />
                        <h5>Designed for You</h5>
                        <p className="text-muted">
                            Built with a modern, responsive design that adapts to your lifestyle.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
