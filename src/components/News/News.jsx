import React from "react";
import "./News.css";
import searchIC from "../../assets/icon/search-line.svg";
import imgHolder from "../../assets/image/6.jpg";
function News() {
  return (
    <div className="news-container">
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

      <div className="search-holder">
        <img src={searchIC} alt="" />
        <input type="search" placeholder="Search" />
      </div>

      <div className="main-news-body">
        <div className="mnb-left">
          <div className="article-big-item">
            <img src={imgHolder} alt="" />
            <h4>
              <span className="author-name">Billy Kibet</span>
              <span>.5min</span>
            </h4>
            <h3>This article will be changed after development and it</h3>

            <p>
              Thsi is a random text since i cant find lorem with me and i have
              to write somthiunf for rhis space wooe am poor at altouch typing
              and such Thsi is a random text since i cant find lorem with me and
              i have to write somthiunf for rhis space wooe am poor at altouch
              typing and such
            </p>
          </div>
          {/* React this */}
          <div className="article-big-item">
            <img src={imgHolder} alt="" />
            <h4>
              <span className="author-name">Billy Kibet</span>
              <span>.5min</span>
            </h4>
            <h3>This article will be changed after development and it</h3>

            <p>
              Thsi is a random text since i cant find lorem with me and i have
              to write somthiunf for rhis space wooe am poor at altouch typing
              and such Thsi is a random text since i cant find lorem with me and
              i have to write somthiunf for rhis space wooe am poor at altouch
              typing and such
            </p>
          </div>{" "}
          <div className="article-big-item">
            <img src={imgHolder} alt="" />
            <h4>
              <span className="author-name">Billy Kibet</span>
              <span>.5min</span>
            </h4>
            <h3>This article will be changed after development and it</h3>

            <p>
              Thsi is a random text since i cant find lorem with me and i have
              to write somthiunf for rhis space wooe am poor at altouch typing
              and such Thsi is a random text since i cant find lorem with me and
              i have to write somthiunf for rhis space wooe am poor at altouch
              typing and such
            </p>
          </div>
          {/*  */}
        </div>
        <div className="mnb-right">
          <div className="article-list-item">
            <img src={imgHolder} alt="" />
            <div className="article-details">
              <h4>
                <span className="author-name">Billy Kibet</span>
                <span>.5min</span>
              </h4>
              <h3>This article will be changed after development and it</h3>
            </div>
          </div>
          {/* React This */}
          <div className="article-list-item">
            <img src={imgHolder} alt="" />
            <div className="article-details">
              <h4>
                <span className="author-name">Billy Kibet</span>
                <span>.5min</span>
              </h4>
              <h3>This article will be changed after development and it</h3>
            </div>
          </div>{" "}
          <div className="article-list-item">
            <img src={imgHolder} alt="" />
            <div className="article-details">
              <h4>
                <span className="author-name">Billy Kibet</span>
                <span>.5min</span>
              </h4>
              <h3>This article will be changed after development and it</h3>
            </div>
          </div>{" "}
          <div className="article-list-item">
            <img src={imgHolder} alt="" />
            <div className="article-details">
              <h4>
                <span className="author-name">Billy Kibet</span>
                <span>.5min</span>
              </h4>
              <h3>This article will be changed after development and it</h3>
            </div>
          </div>{" "}
          <div className="article-list-item">
            <img src={imgHolder} alt="" />
            <div className="article-details">
              <h4>
                <span className="author-name">Billy Kibet</span>
                <span>.5min</span>
              </h4>
              <h3>This article will be changed after development and it</h3>
            </div>
          </div>{" "}
          <div className="article-list-item">
            <img src={imgHolder} alt="" />
            <div className="article-details">
              <h4>
                <span className="author-name">Billy Kibet</span>
                <span>.5min</span>
              </h4>
              <h3>This article will be changed after development and it</h3>
            </div>
          </div>{" "}
          <div className="article-list-item">
            <img src={imgHolder} alt="" />
            <div className="article-details">
              <h4>
                <span className="author-name">Billy Kibet</span>
                <span>.5min</span>
              </h4>
              <h3>This article will be changed after development and it</h3>
            </div>
          </div>{" "}
          <div className="article-list-item">
            <img src={imgHolder} alt="" />
            <div className="article-details">
              <h4>
                <span className="author-name">Billy Kibet</span>
                <span>.5min</span>
              </h4>
              <h3>This article will be changed after development and it</h3>
            </div>
          </div>{" "}
          <div className="article-list-item">
            <img src={imgHolder} alt="" />
            <div className="article-details">
              <h4>
                <span className="author-name">Billy Kibet</span>
                <span>.5min</span>
              </h4>
              <h3>This article will be changed after development and it</h3>
            </div>
          </div>{" "}
          <div className="article-list-item">
            <img src={imgHolder} alt="" />
            <div className="article-details">
              <h4>
                <span className="author-name">Billy Kibet</span>
                <span>.5min</span>
              </h4>
              <h3>This article will be changed after development and it</h3>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default News;
