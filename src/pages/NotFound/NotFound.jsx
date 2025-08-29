import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsCloudLightningRain } from "react-icons/bs";
import "./NotFound.css";

function NotFound() {

    useEffect(() => {
        document.title = '404 Error | Page Not Found | Weather Now';
    }, []);

    return (
        <section className="not-found d-flex flex-column align-items-center justify-content-center text-center">
            <BsCloudLightningRain className="not-found-icon mb-4" />

            <h1 className="display-3 fw-bold">404</h1>
            <h4 className="fw-semibold mb-3">Oops! Page not found</h4>
            <p className="text-muted mb-4">
                The page you’re looking for doesn’t exist or may have been moved.
            </p>

            <Link to="/" className="btn btn-primary px-4 py-2 rounded-4 shadow-sm">
                ⬅ Back to Home
            </Link>
        </section>
    );
}

export default NotFound;
