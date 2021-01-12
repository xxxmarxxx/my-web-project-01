import React from "react";
// import ReactDOM from "react-dom";
import Footer from "./Footer";
import Contact from "./Contact";
import Gallery from "./Gallery";
import About from "./AboutMe";
import Skill from "./Skills";
import Header from "./Header";
import Nav from "./Nav";

import '../styles/App.css';

function App() {
  return (
    <div className="App">

      <Nav />
      <Header />
      <Skill />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

