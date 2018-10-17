import React, { Component } from "react";
import Slider from "react-slick";
import "./Heroe.css";

export default class Heroe extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 650,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      className: "bg__white pt--130 "
    };

    return (
      <>
        <Slider {...settings}>
          <div className="slide slider__full--screen slide-back slide-0">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3 col-sm-12 col-xs-12">
                  <div className="slider__inner">
                    <h1>
                      Mallory Furniture{" "}
                      <span className="text--theme">Your furniture is old</span>
                    </h1>
                    <div className="slider__btn">
                      <a className="htc__btn" href="cart.html">
                        Our is older
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slide slider__full--screen slide-back slide-1">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-lg-6 col-md-offset-2 col-lg-offset-4 col-sm-12 col-xs-12">
                  <div className="slider__inner text-center">
                    <h2>
                      Best Products
                      <span className="text--theme"> New Collection</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slide slider__full--screen slide-back slide-2">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-lg-6 col-md-offset-2 col-lg-offset-4 col-sm-12 col-xs-12">
                  <div className="slider__inner text-center playfair-display">
                    <h2 className="blue">
                      15% OFF YOUR ENTIRE PURCHASE
                      <span className="text--theme playfair-display upperCase">
                        {" "}
                        , including sale & regular-price
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slide slider__full--screen slide-back slide-3" />
        </Slider>
      </>
    );
  }
}
