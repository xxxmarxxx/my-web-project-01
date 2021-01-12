import React from 'react';
import '../styles/Mariusz.css';
import '../styles/App.css';
import Img2 from '../assets/image002.jpg'
import Img3 from '../assets/image003.jpg'
import Img4 from '../assets/image004.jpg'



const Gallery = () => {
    return ( 

<section className="products" id="specialities">
    <div className="section-center clearfix">
      {/* <!-- products info  --> */}
      <article className="products-info">
        {/* <!-- title --> */}
        <div>
          <h3 className="section-subtitle">gallery</h3>
          <h2 className="section-title">my procject</h2>
        </div>
        {/* <!-- end of title --> */}
        <p className="product-text">
          Minus natus magni mollitia sequi necessitatibus cumque porro rerum dolores atque.
        </p>
        <p className="product-text">
          Minus natus magni mollitia sequi necessitatibus cumque porro rerum dolores atque.
        </p>
        <a href="../assets/FinalesZertifikat_FbW25-2.pdf" className="main-btn">SEE Zertifikat</a>
      </article>
      {/* <!-- end of products info --> */}
      {/* <!-- products inventory --> */}
      <article className="products-inventory clearfix">
        {/* <!-- single product --> */}
        <div className="product">
          <img src={Img2} alt="single product" className="product-img" />
          <h3 className="product-title">Image 1</h3>
          <h3 className="product-price">Spreewald</h3>
        </div>
        {/* <!--end of single product --> */}
        {/* <!-- single product --> */}
        <div className="product">
          <img src={Img3} alt="single product" className="product-img" />
          <h3 className="product-title">
            Image 2
          </h3>
          <h3 className="product-price">Potsdam</h3>
        </div>
        {/* <!--end of single product --> */}
        {/* <!-- single product --> */}
        <div className="product">
          <img src={Img4} alt="single product" className="product-img" />
          <h3 className="product-title">Image 3</h3>
          <h3 className="product-price">Berlin</h3>
        </div>
        {/* <!--end of single product --> */}
      </article>
      {/* <!--end of  products inventory --> */}
    </div>
  </section>

     );
}
 
export default Gallery;