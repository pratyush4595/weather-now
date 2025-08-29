import axios from "axios";

const BASE_URL = "https://api.open-meteo.com/v1/forecast";

export const getWeather = async (latitude, longitude) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                latitude,
                longitude,
                timezone: "auto",

                // Current weather
                current_weather: true,

                // Hourly metrics
                hourly: [
                    "temperature_2m",
                    "apparent_temperature",
                    "precipitation",
                    "precipitation_probability",
                    "rain",
                    "showers",
                    "snowfall",
                    "cloudcover",
                    "windspeed_10m",
                    "windgusts_10m",
                    "surface_pressure",
                    "visibility",
                    "uv_index",
                    "relativehumidity_2m",
                ].join(","),

                // Daily metrics
                daily: [
                    "temperature_2m_max",
                    "temperature_2m_min",
                    "precipitation_sum",
                    "precipitation_probability_max",
                    "windspeed_10m_max",
                    "uv_index_max",
                    "sunrise",
                    "sunset",
                ].join(","),
            },
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching weather:", error);
        return null;
    }
};
