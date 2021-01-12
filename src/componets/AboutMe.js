import React from 'react';
import "../styles/Mariusz.css";
import Img1 from '../assets/image001.jpg'

const AboutMe = () => {
    return ( 

<section className="about" id="about">
    <div className="section-center clearfix">
      <article className="about-img">
        <div className="about-picture-container">
          <img src={Img1} alt="tea kettle" className="about-picture" />
        </div>
        
      </article>
      <article className="about-info">
        {/* <!-- section title --> */}
        <div>
          <h3 className="section-subtitle">about me</h3>
          <h2 className="section-title">Photography</h2>
        </div>
        {/* <!-- section title --> */}
        <p className="about-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio aperiam sit odit laborum nam obcaecati
          assumenda enimm adipisci cupiditate? Minus natus magni mollitia sequi necessitatibus cumque porro rerum dolores
          atque.
        </p>

        <p className="about-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus natus magni mollitia sequi necessitatibus
          cumque porro rerum dolores atque.
        </p>
        <a href="#top" className="main-btn">learn more</a>
      </article>
    </div>
  </section>

     );
}
 
export default AboutMe;