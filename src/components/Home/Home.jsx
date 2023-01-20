import React from "react";
import "./Home.css";
import heroArt from "../../assets/image/6.jpg";
import angleNext from "../../assets/icon/chevron-right.svg";
import anglePrev from "../../assets/icon/angle-left.svg";
import imgOffer from "../../assets/icon/phone.svg";
import arrowIC from "../../assets/icon/arrow-right.svg";
import { service } from "../../assets/json/service.js";
function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hs-left">
          <p className="biz-cat">Digital Marketing</p>
          <h1>Work that we produce for our clients</h1>
          <p>
            Our team had developed a project from scratch, that helps bloggers
            and webmasters to monetize online resources and to monitor outgoing
            traffic.
          </p>
          <button>Get more details</button>
        </div>
        <div className="hs-right">
          <img className="hero-img" src={heroArt} alt="" />
        </div>
      </div>
      <h2 className="sub-title">
        We immerse in the analytics of your business, in order to determine
        target audience.
      </h2>

      <div className="holder-one">
        <h3>Research & Analytics</h3>
        <p>
          We immerse ourselves in the analytics of your business, in order to
          study all the subtleties and determine target audience.We immerse
          ourselves in the analytics of your business, in order to study all the
          subtleties and determine target audience.
        </p>
        <div className="image-holder-one">
          <img src={heroArt} alt="" className="main-img" />
          <img src={heroArt} alt="" className="art-img" />
        </div>
      </div>

      <h2 className="sub-title">
        Our developer team easily subdue developments of any complexity
      </h2>

      <p className="sub-title-p">
        We know how to create complex and intuitive interface systems that are
        enjoyable to use.We know how to create complex and intuitive interface
        systems that are enjoyable to use.
      </p>

      <div className="offer-box">
        {/*  */}

        {service.map((service, index) => (
          <div className="offer-item-holder">
            <img className="offer-art" src={service.img} alt="" />
            <p>{service.name}</p>
            <img className="offer-arrow" src={arrowIC} alt="" />
          </div>
        ))}
      </div>

      <div className=" holder-two">
        <div className="ht-top">
          <div>
            <h3>Development & Integration</h3>
            <p>
              Our developer team easily subdue developments of any complexity.
              We dominate all the cycle of development.
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
        We provide technical assistance, that will help you to improve, keep the
        quality and speed of the launched project like website, app or full
        product.
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

      <div className="hero-end">
        <div className="he-left">
          <img src={heroArt} alt="" />
        </div>
        <div className="he-right">
          <h3>Lorem ipsum are dummy text for this page site</h3>

          <p>
            We provide technical assistance, that will help you to improve, keep
            the quality and speed of the launched project like website, app or
            full product.We provide technical assistance, that will help you to
            improve, keep the quality and speed of the launched project like
            website, app or full product.
          </p>
          <p>
            We provide technical assistance, that will help you to improve, keep
            the quality and speed of the launched project like website, app or
            full product.
          </p>

          <button className="btn-sharp">Read More </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
