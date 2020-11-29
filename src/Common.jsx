import React from "react";
import { NavLink } from "react-router-dom";
import Pic1 from "./images/pic1.svg";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <br />
                    <strong className="brand-name">Freaky WebSolutions</strong>
                  </h1>
                  <h2 className="my-3">
                    We're the team of talented & experienced developers.
                  </h2>
                  <div className="mt-3">
                    <NavLink exact to={props.visit} className="btn-get-started">
                      {props.btnText}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgSrc}
                    alt="Home Page Image"
                    className="image-fluid animated"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
