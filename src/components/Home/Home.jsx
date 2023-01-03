import React from "react";
import "./Home.css";
import heroArt from "../../assets/image/6.jpg";
import imgOffer from "../../assets/icon/phone.svg";
import arrowIC from "../../assets/icon/arrow-right.svg";
function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hs-left">
          <p className="biz-cat">Digital Marketing</p>
          <h1>Work that we produce for our clients</h1>
          <p>
            Work that we produce for our clients ork that we produce for our
            clients Work that we produce is good and an goog
          </p>
          <button>Get more details</button>
        </div>
        <div className="hs-right">
          <img className="hero-img" src={heroArt} alt="" />
        </div>
      </div>
      <h2 className="sub-title">
        Lorem Ipsum is nothing but dummy text to fill spaces wile developing a
        site
      </h2>

      <div className="holder-one">
        <h3>Lorem Ipsum Title</h3>
        <p>
          Lorem Ipsum is nothing but dummy text to fill spaces wile developing a
          site Lorem Ipsum is nothing but dummy text to fill spaces wile
          developing a site wile developing a site Lorem Ipsum is nothing but
          dummy text to fill spaces wile developing a site
        </p>
        <div className="image-holder-one">
          <img src={heroArt} alt="" className="main-img" />
          <img src={heroArt} alt="" className="art-img" />
        </div>
      </div>

      <h2 className="sub-title">
        Lorem Ipsum is nothing but dummy text to fill spaces wile developing a
        site
      </h2>

      <p className="sub-title-p">
        Lorem Ipsum is nothing but dummy text to fill spaces wile developing a
        Lorem Ipsum is nothing but dummy text to fill spaces wile developing a
        site
      </p>

      <div className="offer-box">
        {/*  */}
        <div className="offer-item-holder">
          <img className="offer-art" src={imgOffer} alt="" />
          <p>Mobile Game Development</p>
          <img className="offer-arrow" src={arrowIC} alt="" />
        </div>

        {/*  */}
        <div className="offer-item-holder">
          <img className="offer-art" src={imgOffer} alt="" />
          <p>Mobile Game Development</p>
          <img className="offer-arrow" src={arrowIC} alt="" />
        </div>
        <div className="offer-item-holder">
          <img className="offer-art" src={imgOffer} alt="" />
          <p>Mobile Game Development</p>
          <img className="offer-arrow" src={arrowIC} alt="" />
        </div>
        <div className="offer-item-holder">
          <img className="offer-art" src={imgOffer} alt="" />
          <p>Mobile Game Development</p>
          <img className="offer-arrow" src={arrowIC} alt="" />
        </div>
        <div className="offer-item-holder">
          <img className="offer-art" src={imgOffer} alt="" />
          <p>Mobile Game Development</p>
          <img className="offer-arrow" src={arrowIC} alt="" />
        </div>
        <div className="offer-item-holder">
          <img className="offer-art" src={imgOffer} alt="" />
          <p>Mobile Game Development</p>
          <img className="offer-arrow" src={arrowIC} alt="" />
        </div>

        {/*  */}
      </div>
    </div>
  );
}

export default Home;
