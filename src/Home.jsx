import React from "react";
import Common from "./Common";
import Pic1 from "./images/pic1.svg";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your bussiness with"
        visit="/services"
        btnText="Get Started"
        imgSrc={Pic1}
      />
    </>
  );
};

export default Home;
