import { useState, useEffect } from "react";
import { getCoordinates } from "../../services/geocodingService";
import { getWeather } from "../../services/weatherService";
import { useGlobalContext } from "../../context/GlobalContext";
import Loader from "../../components/common/Loader/Loader";
import HeroSection from "../../components/home/HeroSection/HeroSection";
import CurrentWeather from "../../components/home/CurrentWeather/CurrentWeather";
import TopCities from "../../components/home/TopCities/TopCities";
import WeatherHighlights from "../../components/home/WeatherHighlights/WeatherHighlights";
import "./Home.css";
import NoDataAlert from "../../components/common/NoDataFound/NoDataAlert";

const Home = () => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [topCities, setTopCities] = useState([]);
    const { setLoading, setAlert } = useGlobalContext();
    const [initialRender, setInitialRender] = useState(true);

    // Default: Hyderabad
    useEffect(() => {
        document.title = 'Weather Now | Real-Time Weather at Your Fingertips';
        
        fetchWeather("Hyderabad");
        fetchTopCities();
    }, []);

    const fetchWeather = async (city) => {
        try {
            setLoading(true);
            const coords = await getCoordinates(city);
            if (!coords) return;
            const data = await getWeather(coords.latitude, coords.longitude);
            setCurrentWeather({ city: coords.name, ...data });
        } catch (error) {
            console.log(error);
            setAlert({ message: "Something went worng", type: "error" });
        } finally {
            setLoading(false);
            setInitialRender(false);
            setTimeout(() => {
                setAlert({ message: "", type: "" });
            }, 3000);
        }
    };

    const fetchTopCities = async () => {
        const cities = ["New York", "London", "Delhi", "Tokyo", "Paris", "Sydney"];
        const promises = cities.map(async (c) => {
            const coords = await getCoordinates(c);
            if (!coords) return null;
            const data = await getWeather(coords.latitude, coords.longitude);
            return { city: coords.name, ...data };
        });
        const results = await Promise.all(promises);
        setTopCities(results.filter(Boolean));
    };

    return (
        <div className="home-page my-5">
            <HeroSection />

            {!initialRender && !currentWeather && (
                <NoDataAlert />
            )}

            <div className="container pt-5">
                {currentWeather && (
                    <>
                        <CurrentWeather weather={currentWeather} />
                        <TopCities cities={topCities} />
                        <WeatherHighlights weather={currentWeather} />
                    </>
                )}
            </div>
        </div>
    );
}

export default Home;
