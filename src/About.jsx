import React from "react";
import Common from "./Common";
import Pic2 from "../src/images/pic2.svg";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to our about us page"
        visit="/contact"
        btnText="Contact Us"
        imgSrc={Pic2}
      />
    </>
  );
};

export default About;
