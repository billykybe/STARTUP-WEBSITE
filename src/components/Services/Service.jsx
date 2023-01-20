import React from "react";
import "./Service.css";
import holderIc from "../../assets/icon/phone.svg";
import imgHolder from "../../assets/image/6.jpg";
import playIC from "../../assets/icon/circle-play.svg";
import tick from "../../assets/icon/circle-check.svg";
import { useNavigate } from "react-router-dom";
import { data } from "../../assets/json/servicePage";
function Service() {
  const navigate = useNavigate();
  return (
    <div className="service-container">
      <div className="sc-top">
        <p className="bc">
          <span className="home-tab" onClick={() => navigate("/")}>
            Home
          </span>
          <span> | </span>
          <span className="current-tab">Services</span>
        </p>
        <h2 className="sub-title">
          Services Our services extend to every aspect of the project
          development process
        </h2>

        <p className="sub">
          Our services extend to every aspect of the project development process
        </p>

        <div className="counts-holder">
          <div>
            <img src={holderIc} alt="" />
            <div>
              <h2>90+</h2>
              <p>Cities</p>
            </div>
          </div>
          {/*  */}
          <div>
            <img src={holderIc} alt="" />
            <div>
              <h2>30+</h2>
              <p>Countries</p>
            </div>
          </div>{" "}
          <div>
            <img src={holderIc} alt="" />
            <div>
              <h2>50+</h2>
              <p>Projects</p>
            </div>
          </div>
          {/*  */}
        </div>

        <div className="video-holder-div">
          <div className="vid-div">
            <img className="video-item" src={imgHolder} alt="" />
            <img className="play-btn" src={playIC} alt="" />
          </div>

          <div className="video-ditails-div">
            <h3>We create digital services</h3>
            <p>
              Detail investigation, intuitive design and high quality
              development let us answer to all client's requests and create
              in-demand product.
            </p>

            <p className="check-it">
              <img src={tick} alt="" />
              Research & Analytics
            </p>
            {/*  */}

            <p className="check-it">
              <img src={tick} alt="" />
              Product design
            </p>
            <p className="check-it">
              <img src={tick} alt="" />
              Development & Integration
            </p>
            <p className="check-it">
              <img src={tick} alt="" />
              It Is simple and good
            </p>
            {/*  */}
          </div>
        </div>

        {/*  */}

        {data.map((item, index) => (
          <div className={item.clas}>
            <div className="text-side">
              <h3>{item={.}}</h3>
              <p>
              {item.p1}
              </p>

              <p>
              {item.p2}
              </p>

              <button className="button-sharp">Read More</button>
            </div>
            <img src={imgHolder} alt="" />
          </div>
        ))}

        {/*  */}
      </div>
    </div>
  );
}

export default Service;
