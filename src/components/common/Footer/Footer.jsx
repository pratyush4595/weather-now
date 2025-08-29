import { Link } from "react-router-dom";
import { FaCloudSun, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-4 border-top" data-aos="fade-up">
      <div className="container">
        <div className="row align-items-center gy-3">
          
          {/* Brand */}
          <div className="col-md-4 text-center text-md-start">
            <Link to="/" className="footer-brand d-flex align-items-center gap-2 justify-content-center justify-content-md-start">
              <FaCloudSun className="sun-icon" />
              <span className="brand-text">
                Weather <span className="highlight">Now</span>
              </span>
            </Link>
            <p className="small text-muted mb-0">
              Your quick and reliable weather companion.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 text-center">
            <ul className="list-inline mb-0 footer-links">
              <li className="list-inline-item">
                <Link to="/about">About</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/privacy">Privacy</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="col-md-4 text-center text-md-end">
            <div className="social-links d-flex justify-content-center justify-content-md-end gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center mt-3 small text-muted">
          © {new Date().getFullYear()} Weather Now. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
