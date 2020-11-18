import React, { Component } from "react";
import Slider from "react-slick";
import Slide from '../../img/Sitelogo.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './SliderVideos.css';
import Video from '../../video/videoplayback.mp4'
const SliderOne = () => {

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 10000,
    cssEase: "linear",
    arrows: false,
  };
  return (
      <Slider {...settings}>
        <div>
          <div className="videoAtSlider"><video controls="controls" src={Video}></video></div>
          <div className="textAboutVideo">Поздравление всех всех всех всех всех всех</div>
        </div>
        <div>
          <div className="videoAtSlider"><video controls="controls"  src={Video}></video></div>
          <div className="textAboutVideo">Поздравление всех всех всех всех всех всех</div>
        </div>
        <div>
          <div className="videoAtSlider"><video controls="controls"  src={Video}></video></div>
          <div className="textAboutVideo">Поздравление всех всех всех всех всех всех</div>
        </div>
        <div>
          <div className="videoAtSlider"><video controls="controls"  src={Video}></video></div>
          <div className="textAboutVideo">Поздравление всех всех всех всех всех всех</div>
        </div>
        <div>
          <div className="videoAtSlider"><video controls="controls"  src={Video}></video></div>
          <div className="textAboutVideo">Поздравление всех всех всех всех всех всех</div>
        </div>
        <div>
          <div className="videoAtSlider"><video controls="controls"  src={Video}></video></div>
          <div className="textAboutVideo">Поздравление всех всех всех всех всех всех</div>
        </div>
      </Slider>
  );
};

export default SliderOne;