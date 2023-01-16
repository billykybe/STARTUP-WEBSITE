import React from "react";
import "./Contact.css";
import imgHolder from "../../assets/icon/phone.svg";
import imgolder from "../../assets/image/6.jpg";
function Contact() {
  return (
    <div className="contact-container">
      <p className="bc">
        <span>Home | </span>
        <span className="current-tab">Contact Us</span>
      </p>
      <h2 className="sub-title">
        This is the service section fix it with cool text
      </h2>

      <p className="sub">
        Lorem Ipsum is nothing but dummy text to fill spaces wile developing a
      </p>

      <div className="map">
        <img src={imgolder} alt="" />
      </div>
      <div className="contacts-holder">
        <div>
          <h3>Follow Us</h3>
          <div>
            <img src={imgHolder} alt="" />
            <img src={imgHolder} alt="" /> <img src={imgHolder} alt="" />{" "}
            <img src={imgHolder} alt="" />
          </div>
        </div>

        <div>
          <img src={imgHolder} alt="" />
          <p>+254 08598801 / +254 10203040</p>
        </div>
        <div>
          <img src={imgHolder} alt="" />
          <p>
            Follow directtions in the map and thats it woow llow directtions in
            the map and thats it woow{" "}
          </p>
        </div>
      </div>

      <div className="form-holder">
        <h4>Say Hello</h4>
        <p>Hey thetre neard try me today say hello</p>

        <div className="inputs-holder">
          <div className="top-part">
            <div>
              <label>First Name</label>
              <input type="text" />
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" />
            </div>
          </div>
          <label>Email Address Name</label>
          <input type="text" /> <label>Message</label>
          <textarea type="text" />
          <div className="btn-holder">
            <button>Get in touch</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
