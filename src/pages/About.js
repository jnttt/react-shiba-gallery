import React from "react";
import michiImg from "../michi-and-nori.jpeg"

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <div className="container">
      <img className="michi" src={michiImg} alt="shiba"/>
     
      <p className="aboutP">
        I was inspired to create this gallery because our family dog was a Shiba
        Inu. His name was Michi which means right path. He passed away suddenly this
        year. He was only 6 years old. RIP Michi. We love you.{" "}
      </p>
      </div>
    </div>
  );
};

export default About;
