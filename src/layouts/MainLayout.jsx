import { Outlet } from "react-router-dom";
import Loader from "../components/common/Loader/Loader";
import Navbar from "../components/common/Navbar/Navbar";
import Footer from "../components/common/Footer/Footer";
import GlobalAlert from "../components/common/GlobalAlert/GlobalAlert";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Loader />
            <GlobalAlert />
            <Outlet />
            <Footer />
        </>
    );
}

export default MainLayout;