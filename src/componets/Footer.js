import React from "react";
import '../styles/App.css';
import '../styles/Mariusz.css';
import { FaInstagram, FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";


function footer() {
  return (
    <footer className="footer">
    <div className="section-center">
      <div className="social-icon">
        {/* <!-- social icon --> */}
        <a href="https://www.youtube.com/" className="social-icon">
        <FaYoutube className="social-icon2"/>
        </a>
        {/* <!-- end of social icon -->
        <!-- social icon -->
        <!-- <a href="https://www.facebook.com/" className="social-icon">
            <i className="fab fa-facebook"></i>
          </a> --> */}
        {/* <!-- end of social icon -->
        <!-- social icon --> */}
        <a href="https://instagram.com/mariuszbrainard" className="social-icon">
        <FaInstagram className="social-icon2"/>
        </a>
        {/* <!-- end of social icon -->
        <!-- social icon --> */}
        <a href="https://instagram.com/mariusz_arts" className="social-icon">
          <FaInstagram className="social-icon2"/>
        </a>
        {/* <!-- end of social icon -->
        <!-- social icon --> */}
        <a href="https://www.linkedin.com/in/mariusz-brainard/" className="social-icon">
        <FaLinkedin className="social-icon2"/>
        </a>
        {/* <!-- end of social icon -->
        <!-- social icon --> */}
        <a href="https://github.com/xxxmarxxx" className="social-icon">
        <FaGithub className="social-icon2"/>
        </a>
        {/* <!-- end of social icon --> */}
      </div>
      <p className="footer-text">
        &copy;2021 <span className="text-primary">logoLogo</span>. all
        rights reserved
      </p>
    </div>
  </footer>


  );
}

export default footer;