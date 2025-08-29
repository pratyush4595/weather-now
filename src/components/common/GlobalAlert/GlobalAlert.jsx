import { useGlobalContext } from '../../../context/GlobalContext';
import './GlobalAlert.css';

const GlobalAlert = () => {
    const { alert } = useGlobalContext();

    if (!alert.message) return null;

    return (
        <div className="alert-container">
            <div className={`custom-alert alert alert-${alert.type === "success" ? "success" : "danger"} d-flex align-items-center shadow`} role="alert">
                <i className={`bi bi-${alert.type === "success" ? "check" : "exclamation"}-circle-fill me-3`}></i>
                <div>
                    <h6 className="alert-heading mb-1">{alert.type === "success" ? "Success" : "Error"}</h6>
                    <p className="mb-0">{alert.message}</p>
                </div>
            </div>
        </div>
    );
}

export default GlobalAlert;