import React, { Component } from "react";
import "./Sliderview.css";
import Slider from "react-slick";

export default class Sliderview extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: 0,

      // autoplay
      autoplay: false,
      autoplaySpeed: 3000,
      cssEase: "linear",

    };
    return (
      <div className= "slidebars">
        <Slider {...settings}>

            {/* 1st slide */}
          <div>
            <div
              className="home_banner_first"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/Assets/Rectangle4.png"
                })`,
              }}
            ></div>
          </div>

{/* second slide */}
          <div>
            <div
              className="home_banner_first"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/Assets/Rectangle4.png"
                })`,
              }}
            ></div>
            </div>


{/* third slide */}
          <div>
            <div
              className="home_banner_first"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/Assets/Rectangle4.png"
                })`,
              }}
            ></div>
          </div>
{/* fourth slide */}
      
        </Slider>
      </div>
      
    )
  }
}


