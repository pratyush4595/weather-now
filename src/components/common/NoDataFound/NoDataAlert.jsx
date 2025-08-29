import { BsExclamationCircle } from "react-icons/bs";
import "./NoDataAlert.css";

function NoDataAlert({ message = "No data found." }) {
    return (
        <div
            className="no-data-alert d-flex flex-column align-items-center justify-content-center text-center p-4 rounded-4 shadow-sm mt-5 mb-2"
            data-aos="fade-up"
        >
            <BsExclamationCircle className="no-data-icon mb-3" />
            <h5 className="fw-semibold">{message}</h5>
            <p className="text-muted small">
                Please try again later.
            </p>
        </div>
    );
}

export default NoDataAlert;
