import { useGlobalContext } from "../../../context/GlobalContext";
import './Loader.css';

const Loader = () => {
    const { loading } = useGlobalContext();

    if (!loading) return null;

    return (
        <div className="loader-container">
            <div className="loader">
                <div className="loader-highlight"></div>
            </div>
        </div>
    );
}

export default Loader;