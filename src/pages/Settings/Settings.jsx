import { useEffect } from "react";
import { BsHourglassSplit } from "react-icons/bs";
import "./Settings.css";

const Settings = () => {

    useEffect(() => {
        document.title = 'Settings | Weather Now';
    }, []);

    return (
        <div className="coming-soon d-flex flex-column align-items-center justify-content-center text-center">
            <BsHourglassSplit className="coming-icon mb-3" />
            <h2 className="fw-bold">Coming Soon</h2>
            <p className="text-muted">
                I'm working hard to bring you this feature. Stay tuned!
            </p>
        </div>
    );
};

export default Settings;
