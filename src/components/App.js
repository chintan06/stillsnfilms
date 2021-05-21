import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import HeroImage from "./HeroImage";
import SocialIcon from "./SocialIcon";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Navbar />
      <HeroImage />
      <About />
      <Contact />
      <SocialIcon />
      <div className="contact-bar">
        <a className="contact_a">
          <i className="fa fa-phone" aria-hidden="true"></i>
        </a>
      </div>
    </>
  );
}

export default App;
