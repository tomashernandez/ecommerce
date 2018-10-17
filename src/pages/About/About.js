import React, { Component } from "react";
import { NAME_SITE } from "../../utils/constants";

import * as APIAVATAR from "../../libraries/apiAvatar";
import { Link } from "react-router-dom";
import about_img from "../../assets/img/about/about.jpg";

export default class About extends Component {
  state = {
    avatar_1: "",
    avatar_2: "",
    avatar_3: ""
  };
  getAvatar = number => {
    return APIAVATAR.getAvatar()
      .then(data => {
        console.log(number);
        let image = data.results[0].picture.large;
        if (number === 1) {
          this.setState({ avatar_1: image });
        } else if (number === 2) {
          this.setState({ avatar_2: image });
        } else {
          this.setState({ avatar_3: image });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <>
        <section className="htc__store__area ptb--120 bg__white">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section__title section__title--2 text-center">
                  <h2 className="title__line">Welcome To {NAME_SITE}</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore gna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat.
                  </p>
                </div>
                <div className="store__btn">
                  <Link to="#">contact us</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="htc__choose__us__ares bg__white">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                <div className="choose__container">
                  <div className="">
                    <img src={about_img} alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                <div className="htc__choose__wrap bg__cat--4">
                  <h2 className="choose__title">Why Choose Us?</h2>
                  <div className="choose__container">
                    <div className="single__chooose">
                      <div className="choose__us">
                        <div className="choose__icon">
                          <span className="ti-heart" />
                        </div>
                        <div className="choose__details">
                          <h4>Free Gift Box</h4>
                          <p>
                            Lorem ipsum dolor sit amet consect adipisic elit sed
                            do.{" "}
                          </p>
                        </div>
                      </div>
                      <div className="choose__us">
                        <div className="choose__icon">
                          <span className="ti-truck" />
                        </div>
                        <div className="choose__details">
                          <h4>Free Delivery</h4>
                          <p>
                            Lorem ipsum dolor sit amet consect adipisic elit sed
                            do.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="single__chooose">
                      <div className="choose__us">
                        <div className="choose__icon">
                          <span className="ti-reload" />
                        </div>
                        <div className="choose__details">
                          <h4>Money Back</h4>
                          <p>
                            Lorem ipsum dolor sit amet consect adipisic elit sed
                            do.{" "}
                          </p>
                        </div>
                      </div>
                      <div className="choose__us">
                        <div className="choose__icon">
                          <span className="ti-time" />
                        </div>
                        <div className="choose__details">
                          <h4>Support 24/7</h4>
                          <p>
                            Lorem ipsum dolor sit amet consect adipisic elit sed
                            do.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="htc__team__area bg__white ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section__title section__title--2 text-center">
                  <h2 className="title__line">Our Staff</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    do eiusmod tempor incididunt ut labo.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="team__wrap clearfix mt--60">
                <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                  <div className="team foo">
                    <div className="team__thumb">
                      <Link to="#">
                        <img src={this.state.avatar_1} alt="team images" />
                      </Link>
                    </div>
                    <div className="team__bg__color" />
                    <div className="team__hover__info">
                      <div className="team__hover__action">
                        <h2>
                          <Link to="#">Tomás Hernández</Link>
                        </h2>
                        <ul className="social__icon">
                          <li>
                            <Link to="#">
                              <i className="zmdi zmdi-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="zmdi zmdi-instagram" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="zmdi zmdi-facebook" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="zmdi zmdi-google-plus" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12 xmt-30">
                  <div className="team foo">
                    <div className="team__thumb">
                      <Link to="#">
                        <img src={this.state.avatar_2} alt="team images" />
                      </Link>
                    </div>
                    <div className="team__bg__color" />
                    <div className="team__hover__info">
                      <div className="team__hover__action">
                        <h2>
                          <Link to="#">Tomás Hernández</Link>
                        </h2>
                        <ul className="social__icon">
                          <li>
                            <Link to="#">
                              <i className="zmdi zmdi-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="zmdi zmdi-instagram" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="zmdi zmdi-facebook" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="zmdi zmdi-google-plus" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-lg-4 hidden-sm col-xs-12 xmt-30">
                  <div className="team foo">
                    <div className="team__thumb">
                      <Link to="#">
                        <img src={this.state.avatar_3} alt="team images" />
                      </Link>
                    </div>
                    <div className="team__bg__color" />
                    <div className="team__hover__info">
                      <div className="team__hover__action">
                        <h2>
                          <Link to="#">Tomás Hernández</Link>
                        </h2>
                        <ul className="social__icon">
                          <li>
                            <Link to="#">
                              <i className="zmdi zmdi-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="zmdi zmdi-instagram" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="zmdi zmdi-facebook" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="zmdi zmdi-google-plus" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  componentDidMount() {
    this.getAvatar(1);
    this.getAvatar(2);
    this.getAvatar(3);
  }
}
