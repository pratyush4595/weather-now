import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCoordinates } from "../../services/geocodingService";
import { getWeather } from "../../services/weatherService";
import { useGlobalContext } from "../../context/GlobalContext";
import NoDataAlert from "../../components/common/NoDataFound/NoDataAlert";
import CityHero from "../../components/city/CityHero/CityHero";
import HourlyChart from "../../components/city/HourlyChart/HourlyChart";
import Forecast7Day from "../../components/city/Forecast7Day/Forecast7Day";
import DetailedMetrics from "../../components/city/DetailedMetrics/DetailedMetrics";
import ExtraHighlights from "../../components/city/ExtraHighlights/ExtraHighlights";

const CityPage = () => {
    const { city } = useParams();
    const [weather, setWeather] = useState(null);
    const { setLoading, setAlert } = useGlobalContext();
    const [initialRender, setInitialRender] = useState(true);

    useEffect(() => {
        document.title = `Weather in ${city} | Weather Now`;

        fetchCityWeather(city);
    }, [city]);

    const fetchCityWeather = async (cityName) => {
        try {
            setLoading(true);
            const coords = await getCoordinates(cityName);
            if (!coords) return;
            const data = await getWeather(coords.latitude, coords.longitude);
            setWeather({ city: coords.name, ...data });
        } catch (error) {
            setAlert({ message: "Something went wrong", type: "error" });
        } finally {
            setLoading(false);
            setInitialRender(false);
            setTimeout(() => {
                setAlert({ message: "", type: "" });
            }, 3000);
        }
    };


    if (!initialRender && !weather) return <NoDataAlert />;
    if (!weather) return null;

    return (
        <div className="city-page container py-5">
            <CityHero city={weather.city} weather={weather} />
            <HourlyChart weather={weather} />
            <Forecast7Day weather={weather} />
            <DetailedMetrics weather={weather} />
            <ExtraHighlights weather={weather} />
        </div>
    );
};

export default CityPage;
