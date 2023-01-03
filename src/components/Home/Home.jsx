import React from "react";
import "./Home.css";
import heroArt from "../../assets/image/6.jpg";
import angleNext from "../../assets/icon/chevron-right.svg";
import anglePrev from "../../assets/icon/angle-left.svg";
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

      <div className=" holder-two">
        <div className="ht-top">
          <div>
            <h3>Lorem Ipsum Title</h3>
            <p>
              Lorem Ipsum is a is a is a is Ipsum is nothing but dummy text to
              fill spaces wile developing a
            </p>
          </div>
          <div className="btn-holder">
            <img className="btn-arr" src={anglePrev} alt="" />
            <img className="btn-arr" src={angleNext} alt="" />
          </div>
        </div>

        <div className="ht-bottom">
          {/* Articles */}
          <div className="ht-bottom-item">
            <h3>Lorem Ipsum</h3>
            <h1>Lorem Ipsum</h1>
            <p>
              I think ill add more cool text here so keep scrolling till you see
              me shine and get a job
            </p>
            <div>
              <p>
                Read more <img src={arrowIC} alt="" />
              </p>
            </div>
          </div>
          {/*  */}
          <div className="ht-bottom-item">
            <h3>Lorem Ipsum</h3>
            <h1>Lorem Ipsum</h1>
            <p>
              I think ill add more cool text here so keep scrolling till you see
              me shine and get a job
            </p>
            <div>
              <p>
                Read more <img src={arrowIC} alt="" />
              </p>
            </div>
          </div>{" "}
          <div className="ht-bottom-item">
            <h3>Lorem Ipsum</h3>
            <h1>Lorem Ipsum</h1>
            <p>
              I think ill add more cool text here so keep scrolling till you see
              me shine and get a job
            </p>
            <div>
              <p>
                Read more <img src={arrowIC} alt="" />
              </p>
            </div>
          </div>{" "}
          <div className="ht-bottom-item">
            <h3>Lorem Ipsum</h3>
            <h1>Lorem Ipsum</h1>
            <p>
              I think ill add more cool text here so keep scrolling till you see
              me shine and get a job
            </p>
            <div>
              <p>
                Read more <img src={arrowIC} alt="" />
              </p>
            </div>
          </div>{" "}
          <div className="ht-bottom-item">
            <h3>Lorem Ipsum</h3>
            <h1>Lorem Ipsum</h1>
            <p>
              I think ill add more cool text here so keep scrolling till you see
              me shine and get a job
            </p>
            <div>
              <p>
                Read more <img src={arrowIC} alt="" />
              </p>
            </div>
          </div>{" "}
          <div className="ht-bottom-item">
            <h3>Lorem Ipsum</h3>
            <h1>Lorem Ipsum</h1>
            <p>
              I think ill add more cool text here so keep scrolling till you see
              me shine and get a job
            </p>
            <div>
              <p>
                Read more <img src={arrowIC} alt="" />
              </p>
            </div>
          </div>
          {/*  */}
        </div>
      </div>

      <h2 className="sub-title">Our Recent Projects</h2>

      <p className="sub-title-p">
        Lorem Ipsum is nothing but dummy text to fill spaces wile developing a
      </p>

      <div className="projects">
        <div className="project">
          <img src={heroArt} alt="" />
          <div>
            <h5>View Project</h5>
          </div>
        </div>{" "}
        {/*  */}
        <div className="project">
          <img src={heroArt} alt="" />
          <div>
            <h5>View Project</h5>
          </div>
        </div>{" "}
        <div className="project">
          <img src={heroArt} alt="" />
          <div>
            <h5>View Project</h5>
          </div>
        </div>{" "}
        <div className="project">
          <img src={heroArt} alt="" />
          <div>
            <h5>View Project</h5>
          </div>
        </div>{" "}
        <div className="project">
          <img src={heroArt} alt="" />
          <div>
            <h5>View Project</h5>
          </div>
        </div>{" "}
        <div className="project">
          <img src={heroArt} alt="" />
          <div>
            <h5>View Project</h5>
          </div>
        </div>{" "}
        {/*  */}
      </div>
    </div>
  );
}

export default Home;
