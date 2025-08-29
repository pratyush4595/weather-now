import axios from "axios";

const GEO_BASE_URL = "https://geocoding-api.open-meteo.com/v1/search";

export async function getCoordinates(city) {
    const res = await axios.get(GEO_BASE_URL, { params: { name: city, count: 1 } });
    return res.data?.results?.[0] || null;
}
