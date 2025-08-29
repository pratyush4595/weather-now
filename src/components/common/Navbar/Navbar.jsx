import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsSun, BsMoon } from "react-icons/bs";
import { FaCloudSun } from "react-icons/fa";
import SearchBox from "../SearchBox/SearchBox";
import './Navbar.css';

function Navbar() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Theme toggler
    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    }

    // Mobile toggler
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    }

    // Close mobile menu on navitem click
    const handleNavItemClick = () => {
        if (isMenuOpen) setIsMenuOpen(false);
    };

    const handleFahrenheitClick = () => {
        alert('This feature is coming soon... !');
    }

    return (
        <nav className="navbar nav-tabs navbar-expand-lg shadow-sm bg-body-tertiary sticky-top py-3">
            <div className="container">
                {/* Brand */}
                <Link to="/" className="navbar-brand brand-logo d-flex align-items-center gap-2">
                    <FaCloudSun className="sun-icon" />
                    <span className="brand-text">
                        Weather <span className="highlight">Now</span>
                    </span>
                </Link>

                {/* Actions for mobile */}
                <div className="d-lg-none ms-auto d-flex align-items-center gap-2">
                    {/* Unit toggle */}
                    <div className="btn-group" role="group" aria-label="Units">
                        <button className="btn btn-sm btn-secondary">°C</button>
                        <button className="btn btn-sm btn-outline-secondary" onClick={handleFahrenheitClick}>°F</button>
                    </div>

                    {/* Theme toggle */}
                    <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={toggleTheme}
                        title="Toggle theme"
                    >
                        {theme === "light" ? <BsMoon /> : <BsSun />}
                    </button>
                </div>

                {/* Mobile Toggle Button */}
                <button
                    className={`navbar-toggler custom-toggler ${isMenuOpen ? 'open' : ''}`}
                    type="button"
                    onClick={toggleMenu}
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar"
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle navigation"
                >
                    <i className={`bi ${isMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
                </button>

                {/* Mobile search bar */}
                <div className="w-100 d-lg-none d-flex justify-content-center my-2">
                    <SearchBox />
                </div>

                {/* Navbar content */}
                <div className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? 'show' : ''}`} id="mainNavbar">
                    {/* Search bar */}
                    <div className="d-none d-lg-block ms-auto me-auto">
                        <SearchBox />
                    </div>

                    {/* Nav links */}
                    <ul className="navbar-nav me-4">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link text-center" onClick={handleNavItemClick}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/settings" className="nav-link text-center" onClick={handleNavItemClick}>Settings</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link text-center" onClick={handleNavItemClick}>About</NavLink>
                        </li>
                    </ul>

                    {/* Actions */}
                    <div className="d-none d-lg-block d-flex align-items-center gap-2">
                        {/* Unit toggle */}
                        <div className="btn-group me-2" role="group" aria-label="Units">
                            <button className="btn btn-sm btn-secondary">°C</button>
                            <button className="btn btn-sm btn-outline-secondary" onClick={handleFahrenheitClick}>°F</button>
                        </div>

                        {/* Theme toggle */}
                        <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={toggleTheme}
                            title="Toggle theme"
                        >
                            {theme === "light" ? <BsMoon /> : <BsSun />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
