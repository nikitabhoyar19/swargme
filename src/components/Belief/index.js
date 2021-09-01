import React, { Component } from "react";
import "./Belief.css";
import Slider from "react-slick";

export default class Belief extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: 0,

      // autoplay
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 530,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="belief_slidebars">
        <Slider {...settings}>
          <div>
            <div className="beliefs_card">
              <div className="orange_box">
                <h2>THE MAIN BELIEFS</h2>
              </div>

              <li>HINDU FESTIVAL</li>
              <li>HINDU FESTIVAL</li>
              <li>HINDU FESTIVAL</li>
              <li>HINDU FESTIVAL</li>
              <li>HINDU FESTIVAL</li>
            </div>{" "}
          </div>
          {/* first slide */}
          <div>
            <div className="beliefs_card">
              <div className="orange_box">
                <h2>THE MAIN BELIEFS</h2>
              </div>

              <li>HINDU FESTIVAL</li>
              <li>HINDU FESTIVAL</li>
              <li>HINDU FESTIVAL</li>
              <li>HINDU FESTIVAL</li>
              <li>HINDU FESTIVAL</li>
            </div>
          </div>

          {/* second slide */}
          <div>
            <div className="beliefs_card">
              <div className="orange_box">
                <h2>THE MAIN BELIEFS</h2>
              </div>

              <li>HINDU FESTIVAL</li>
              <li>HINDU FESTIVAL</li>
              <li>HINDU FESTIVAL</li>
              <li>HINDU FESTIVAL</li>
              <li>HINDU FESTIVAL</li>
            </div>
          </div>
          {/* third slide */}
          <div>
            <div className="beliefs_card">
              <div className="orange_box">
                <h2>THE MAIN BELIEFS</h2>
              </div>

              <li>HINDU FESTIVAL</li>
              <li>HINDU FESTIVAL</li>
              <li>HINDU FESTIVAL</li>
              <li>HINDU FESTIVAL</li>
              <li>HINDU FESTIVAL</li>
            </div>
          </div>
          {/* fourth slide */}
          <div>
            <div className="beliefs_card">
              <div className="orange_box">
                <h2>THE MAIN BELIEFS</h2>
              </div>

              <li>HINDU FESTIVAL</li>
              <li>HINDU FESTIVAL</li>
              <li>HINDU FESTIVAL</li>
              <li>HINDU FESTIVAL</li>
              <li>HINDU FESTIVAL</li>
            </div>
          </div>

          {/*
           */}
        </Slider>
      </div>
    );
  }
}
