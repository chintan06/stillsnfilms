import React from "react";
import { hero, hero1, hero2 } from "../assets/images";

const HeroImage = () => {
  return (
    <section id="home">
      <div className="container-fluid p-0">
        <div className="col img-col">
          <img src={hero1} class="img-fluid" alt="Software Development" />
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
