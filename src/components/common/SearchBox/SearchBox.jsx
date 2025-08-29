import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { getCoordinates } from "../../../services/geocodingService.js";
import { useGlobalContext } from "../../../context/GlobalContext.jsx";

function SearchBox() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [activeIndex, setActiveIndex] = useState(-1);
    const navigate = useNavigate();
    const resultsRef = useRef(null);
    const { loading, setLoading, setAlert } = useGlobalContext();

    // Debounced search
    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        const timer = setTimeout(async () => {
            setLoading(true);
            try {
                const data = await getCoordinates(query);
                if (data) {
                    setResults(
                        Array.isArray(data) ? data : [data]
                    );
                } else {
                    setResults([]);
                }
            } catch {
                setResults([]);
                setAlert({ message: "Something went wrong", type: "error" });
            } finally {
                setLoading(false);
                setTimeout(() => {
                    setAlert({ message: "", type: "" });
                }, 3000);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [query]);

    const handleSelect = (city) => {
        setQuery("");
        setResults([]);
        navigate(`/city/${city}`);
    };

    const handleKeyDown = (e) => {
        if (!results.length) return;

        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActiveIndex((prev) => (prev + 1) % results.length);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveIndex((prev) =>
                prev === 0 ? results.length - 1 : prev - 1
            );
        } else if (e.key === "Enter") {
            e.preventDefault();
            if (activeIndex >= 0) {
                handleSelect(results[activeIndex].name);
            } else {
                handleSelect(query);
            }
        }
    };

    return (
        <div className="position-relative w-100" style={{ maxWidth: "400px" }}>
            <div className="input-group shadow-sm rounded-pill overflow-hidden">
                <span className="input-group-text bg-body-secondary border-0">
                    <BsSearch className="text-muted" />
                </span>
                <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Search city..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>

            {/* Results Dropdown */}
            {query && results.length > 0 && (
                <ul
                    ref={resultsRef}
                    className="list-group position-absolute mt-1 shadow-sm rounded w-100"
                    style={{ zIndex: 1050 }}
                >
                    {results.map((city, idx) => (
                        <li
                            key={city.id || idx}
                            className={`list-group-item list-group-item-action ${idx === activeIndex ? "active" : ""
                                }`}
                            onClick={() => handleSelect(city.name)}
                            style={{ cursor: "pointer" }}
                        >
                            {city.name}
                            {city.country && (
                                <span className="text-muted ms-2">
                                    ({city.country})
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            )}

            {/* No results */}
            {query && !loading && results.length === 0 && (
                <div
                    className="position-absolute mt-1 bg-body border rounded shadow-sm p-2 small text-muted"
                    style={{ zIndex: 1050, width: "100%" }}
                >
                    No results found
                </div>
            )}
        </div>
    );
}

export default SearchBox;
