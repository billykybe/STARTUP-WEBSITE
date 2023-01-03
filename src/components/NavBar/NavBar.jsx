import React from "react";
import "./NavBar.css";
// Images Import
import locationIC from "../../assets/icon/map25.png";
import phoneIC from "../../assets/icon/phone.svg";
// --> Images Import
function NavBar() {
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
            <a className="active-tab" href="">
              Home
            </a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">News</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
