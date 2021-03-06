import React from "react";
import Web from "../src/images/web.svg";
import SData from "./SData";
import Card from "./Card";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              {SData.map((value, index) => {
                return (
                  <Card key={index} imgSrc={value.imgSrc} title={value.title} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
