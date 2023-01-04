import React from "react";
import "./Service.css";
import holderIc from "../../assets/icon/phone.svg";
function Service() {
  return (
    <div className="service-container">
      <div className="sc-top">
        <p className="bc">
          <span>Home {">"} </span>
          <span className="current-tab">Services</span>
        </p>
        <h2 className="sub-title">
          This is the service section fix it with cool text
        </h2>

        <p className="sub">
          Lorem Ipsum is nothing but dummy text to fill spaces wile developing a
        </p>

        <div className="counts-holder">
          <div>
            <img src={holderIc} alt="" />
            <div>
              <h2>30+</h2>
              <p>Clients</p>
            </div>
          </div>
          {/*  */}
          <div>
            <img src={holderIc} alt="" />
            <div>
              <h2>30+</h2>
              <p>Clients</p>
            </div>
          </div>{" "}
          <div>
            <img src={holderIc} alt="" />
            <div>
              <h2>30+</h2>
              <p>Clients</p>
            </div>
          </div>
          {/*  */}
        </div>

        <div className="video-holder-div">
          <div>
            <img className="video-item" src={imgHolder} alt="" />
            <img className="play-btn" src={playIC} alt="" />
          </div>

          <div>
            <h3>This is a title that suits this video</h3>
            <p>
              Lorem ipsum and a more presice this is it text and paragraph it
              for me
            </p>

            <p className="check-it">
              <img src={tick} alt="" />
              It Is simple and good
            </p>
            {/*  */}

            <p className="check-it">
              <img src={tick} alt="" />
              It Is simple and good
            </p>
            <p className="check-it">
              <img src={tick} alt="" />
              It Is simple and good
            </p>
            <p className="check-it">
              <img src={tick} alt="" />
              It Is simple and good
            </p>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
