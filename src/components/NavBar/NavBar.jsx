import React from "react";
import "./NavBar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// Images Import
import locationIC from "../../assets/icon/map25.png";
import phoneIC from "../../assets/icon/phone.svg";
import Home from "../Home/Home";
import Service from "../Services/Service";
import News from "../News/News";
// --> Images Import
function NavBar() {
  const navClick = (e) => {
    document.querySelector(".active-tab").classList.toggle("active-tab");
    e.target.classList.toggle("active-tab");
  };
  return (
    <div className="navbar-container">
      <div className="top-div">
        <p>
          <img src={locationIC} alt="" /> CDC NAIROBI Kenya
        </p>
        <p>
          <img src={phoneIC} alt="" />
          +254 4567890
        </p>
      </div>
      <div className="bottom-div">
        <p>DEV SPACE</p>
        <ul>
          <li>
            <Link to={"/"} className="link" component={<Home />}>
              <a
                className="active-tab"
                onClick={(e) => {
                  navClick(e);
                }}
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link to={"/"} className="link" component={<Home />}>
              <a
                className="active-tab"
                onClick={(e) => {
                  navClick(e);
                }}
              >
                About US
              </a>
            </Link>
          </li>
          <li>
            <Link to={"/service"} className="link" component={<Service />}>
              <a
                className="active-tab"
                onClick={(e) => {
                  navClick(e);
                }}
              >
                Services
              </a>
            </Link>
          </li>
          <li>
            <Link to={"/news"} className="link" component={<News />}>
              <a
                className="active-tab"
                onClick={(e) => {
                  navClick(e);
                }}
              >
                News
              </a>
            </Link>
          </li>
          <li>
            <Link to={"/"} className="link" component={<Home />}>
              <a
                className="active-tab"
                onClick={(e) => {
                  navClick(e);
                }}
              >
                Contact Us
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
