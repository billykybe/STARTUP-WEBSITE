import React from "react";
import "./Footer.css";
import social from "../../assets/icon/phone.svg";
function Footer() {
  return (
    <div className="footer-container">
      <h3 className="main-h3">Lorem Ipsum Footer</h3>
      <p className="main-p">
        This is the footer text files and more so make it meaning full and more
        precice to make the footer and the boody stand out
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
            Lorem ipsum and other stuff really dont matter any more time to
            shine you frigin neard
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
          <p>
            This text is to be replaced with somthin meaning fool for a footrte
          </p>
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
