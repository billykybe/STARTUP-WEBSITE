import React from "react";
import "./News.css";
import searchIC from "../../assets/icon/search-line.svg";
import imgHolder from "../../assets/image/6.jpg";
import { data } from "../../assets/json/newsData";
function News() {
  return (
    <div className="news-container">
      <p className="bc">
        <span>Home | </span>
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
          {data.slice(0, 3).map((item, index) => (
            <div className="article-big-item" key={index}>
              <img src={item.img} alt="" />
              <h4>
                <span className="author-name">{item.author}</span>
                <span>{item.time}</span>
              </h4>
              <h3>{item.title}</h3>

              <p>{item.mainP}</p>
            </div>
          ))}
        </div>
        <div className="mnb-right">
          {data.map((item, index) => (
            <div className="article-list-item">
              <img src={item.img} alt="" />
              <div className="article-details">
                <h4>
                  <span className="author-name">{item.author}</span>
                  <span>.5min</span>
                </h4>
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
