import './HeroSection.css';

const HeroSection = () => {
    return (
        <section
            className="container hero-section d-flex align-items-center text-white text-center"
            style={{
                background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)),
              url('/images/weather-hero.jpg') center/cover no-repeat`
            }}
        >
            <div data-aos="fade-up">
                <h1 className="display-4 fw-bold">Weather Now</h1>
                <p className="lead">Check live weather conditions instantly, anywhere.</p>
            </div>
        </section>
    );
}
export default HeroSection;
