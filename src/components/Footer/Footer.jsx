import React from "react";
import "./Footer.css";
import social from "../../assets/icon/phone.svg";
function Footer() {
  return (
    <div className="footer-container">
      <h3 className="main-h3">HIGHER ENGAGEMENT</h3>
      <p className="main-p">
        We provide technical assistance, that will help you to improve, keep the
        quality and speed of the launched project like website, app or full
        product.
      </p>

      <div className="loop-div">
        <div className="loop">
          <div>
            <h3>Stay in the loop</h3>
            <p className="pp">
              Subscribe to get the latest news and updates from us and more fun
              stuff Subscribe to get the latest news and updates from us and
              more fun stuff
            </p>
          </div>

          <div className="input-holder">
            <input type="text" placeholder="Enter email address" />
            <button>Continue</button>
          </div>
        </div>
      </div>

      <div className="footer-end">
        <div>
          <h3 className="end-logo">Dev Space</h3>
          <p className="end-p">
            We provide technical assistance, that will help you to improve, keep
            the quality and speed of the launched project like website, app or
            full product.
          </p>
          <p className="copy-right">&copy;billykybe.pages.dev</p>
        </div>

        <div>
          <h5>About Us</h5>
          <p className="footer-nav-link">Company</p>
          <p className="footer-nav-link">Portfolio</p>
          <p className="footer-nav-link">Careers</p>
          <p className="footer-nav-link">Contact Us</p>
        </div>
        <div>
          <h5>About Us</h5>
          <p>We provide technical assistance, that will help you to improve.</p>
          <p>+254 12345656 </p>
        </div>
        <div>
          <div>
            <img src={social} alt="" />
            <img src={social} alt="" />
            <img src={social} alt="" />
            <img src={social} alt="" />
          </div>
        </div>
      </div>
      <div className="hr-custom"></div>
      <p className="end">Copyright &copy; 2023 dev space All rights reserved</p>
    </div>
  );
}

export default Footer;
