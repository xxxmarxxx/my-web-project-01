import React from "react";
import "../styles/Mariusz.css";
import {
  FaLightbulb,
  FaDesktop,
  FaCameraRetro,
  FaCamera,
} from "react-icons/fa";

const Skills = () => {
  return (
    <section class="skills clearfix">
      {/* <!-- single skill --> */}
      <article class="skill">
        <span class="skill-icon">
          <FaCamera className="social-icon2" />
        </span>
        <h3 class="skill-title">street photo</h3>
        {/* <!-- ten words --> */}
        <p class="skill-text">We use highest quality.</p>
      </article>
      {/* <!-- end of single skill -->
      <!-- single skill --> */}
      <article class="skill">
        <span class="skill-icon">
          <FaLightbulb className="social-icon2" />
        </span>
        <h3 class="skill-title">light painting</h3>
        {/* <!-- ten words --> */}
        <p class="skill-text">We use highest quality.</p>
      </article>
      {/* <!-- end of single skill -->
      <!-- single skill --> */}
      <article class="skill">
        <span class="skill-icon">
          <FaCameraRetro className="social-icon2" />
          <i class="fas fa-camera-retro"></i>
        </span>
        <h3 class="skill-title">street photo</h3>
        {/* <!-- ten words --> */}
        <p class="skill-text">We use highest quality.</p>
      </article>
      {/* <!-- end of single skill -->
      <!-- single skill --> */}
      <article class="skill">
        <span class="skill-icon">
          <FaDesktop className="social-icon2" />
          <i class="fas fa-desktop"></i>
        </span>
        <h3 class="skill-title">street photo</h3>
        {/* <!-- ten words --> */}
        <p class="skill-text">We use highest quality.</p>
      </article>
      {/* <!-- end of single skill --> */}
    </section>
  );
};

export default Skills;
