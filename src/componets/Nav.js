import React from 'react';
import '../styles/Mariusz.css';
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
    return ( 
        <>
        {/* // <!-- nav button --> */}
    <span class="nav-btn" id="nav-btn">
    <FaBars className="social-icon2"/>
      
    </span>
    {/* // <!-- nav --> */}
    <nav class="navbar" id="navbar">
      <div class="navbar-header">
        <span class="nav-close" id="nav-close">
        <FaTimes className="social-icon2"/>
          <i class="fas fa-times"></i>
        </span>
      </div>
      <ul class="nav-items">
        <li><a href="#top" class="nav-link" id="nav-link1">home</a></li>
        <li><a href="#about" class="nav-link" id="nav-link2">about</a></li>
        <li>
          <a href="#specialities" class="nav-link" id="nav-link3"
            >specialities</a
          >
        </li>
        <li><a href="#contact" class="nav-link" id="nav-link4">contact</a></li>
      </ul>
    </nav>
    
    </>

     );
}
 
export default Navigation;
