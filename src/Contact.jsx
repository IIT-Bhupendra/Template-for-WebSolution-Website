import React, { useState } from "react";

const Contact = () => {
  const [Data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${Data.fullname}, email address is ${Data.email}, phone number is ${Data.phone} & message is ${Data.message}.`
    );
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={Data.fullname}
                  onChange={inputEvent}
                  placeholder="Panvari Lal"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={Data.email}
                  onChange={inputEvent}
                  placeholder="name@gmail.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={Data.phone}
                  onChange={inputEvent}
                  placeholder="9123456780"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  name="message"
                  value={Data.message}
                  onChange={inputEvent}
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-outline-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
