import React from "react";
import "./Service.css";
import holderIc from "../../assets/icon/phone.svg";
import imgHolder from "../../assets/image/6.jpg";
import playIC from "../../assets/icon/circle-play.svg";
import tick from "../../assets/icon/circle-check.svg";
import { useNavigate } from "react-router-dom";
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
          This is the service section fix it with cool text
        </h2>

        <p className="sub">
          Lorem Ipsum is nothing but dummy text to fill spaces wile developing a
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
            <h3>This is a title that suits this video</h3>
            <p>
              Lorem ipsum and a more presice this is it text and paragraph it
              for me orem ipsum and a more presice this is it text and paragraph
              it for me
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

        <div className="service-box odd">
          <div className="text-side">
            <h3>This is a heading like no other from the map</h3>
            <p>
              Lorem iand ais dad This is a heading like no other from the map
              This is a heading like no other from the map This is a heading
              like no other from the map This is a heading like no other from
              the map
            </p>

            <p>
              This is a heading like no other from the map This is a heading
              like no other from the map This is a heading like no other from
              the map
            </p>

            <button className="button-sharp">Read More</button>
          </div>
          <img src={imgHolder} alt="" />
        </div>

        {/* React this */}
        <div className="service-box odd">
          <div className="text-side">
            <h3>This is a heading like no other from the map</h3>
            <p>
              Lorem iand ais dad This is a heading like no other from the map
              This is a heading like no other from the map This is a heading
              like no other from the map This is a heading like no other from
              the map
            </p>

            <p>
              This is a heading like no other from the map This is a heading
              like no other from the map This is a heading like no other from
              the map
            </p>

            <button className="button-sharp">Read More</button>
          </div>
          <img src={imgHolder} alt="" />
        </div>

        <div className="service-box odd">
          <div className="text-side">
            <h3>This is a heading like no other from the map</h3>
            <p>
              Lorem iand ais dad This is a heading like no other from the map
              This is a heading like no other from the map This is a heading
              like no other from the map This is a heading like no other from
              the map
            </p>

            <p>
              This is a heading like no other from the map This is a heading
              like no other from the map This is a heading like no other from
              the map
            </p>

            <button className="button-sharp">Read More</button>
          </div>
          <img src={imgHolder} alt="" />
        </div>

        {/*  */}
      </div>
    </div>
  );
}

export default Service;
