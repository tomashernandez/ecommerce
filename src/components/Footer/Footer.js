import React, { Component } from "react";
import SvgLogo from "../../utils/svgLogo";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    const style1 = {
      position: "absolute",
      left: "-5000px"
    };
    return (
      <>
        <footer className="htc__foooter__area gray-bg">
          <div className="container">
            <div className="row">
              <div className="footer__container clearfix">
                <div className="col-md-3 col-lg-3 col-sm-6">
                  <div className="ft__widget">
                    <div className="ft__logo">
                      <Link to={"/"}>
                        <SvgLogo fill="#fff" />
                      </Link>
                    </div>
                    <div className="footer-address">
                      <ul>
                        <li>
                          <div className="address-icon">
                            <i className="zmdi zmdi-pin" />
                          </div>
                          <div className="address-text">
                            <p>Paseo de la Reforma #27, CDMX</p>
                          </div>
                        </li>
                        <li>
                          <div className="address-icon">
                            <i className="zmdi zmdi-email" />
                          </div>
                          <div className="address-text">
                            <Link to="#"> ha.tomas9@gmail.com</Link>
                          </div>
                        </li>
                        <li>
                          <div className="address-icon">
                            <i className="zmdi zmdi-phone-in-talk" />
                          </div>
                          <div className="address-text">
                            <p>+012 345 678 102 </p>
                          </div>
                        </li>
                      </ul>
                    </div>
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

                <div className="col-md-3 col-lg-2 col-sm-6 smt-30 xmt-30">
                  <div className="ft__widget">
                    <h2 className="ft__title">Categories</h2>
                    <ul className="footer-categories">
                      <li>
                        <Link to="shop-sidebar.html">Men</Link>
                      </li>
                      <li>
                        <Link to="shop-sidebar.html">Women</Link>
                      </li>
                      <li>
                        <Link to="shop-sidebar.html">Accessories</Link>
                      </li>
                      <li>
                        <Link to="shop-sidebar.html">Shoes</Link>
                      </li>
                      <li>
                        <Link to="shop-sidebar.html">Dress</Link>
                      </li>
                      <li>
                        <Link to="shop-sidebar.html">Denim</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-3 col-lg-2 col-sm-6 smt-30 xmt-30">
                  <div className="ft__widget">
                    <h2 className="ft__title">Infomation</h2>
                    <ul className="footer-categories">
                      <li>
                        <Link to="about.html">About Us</Link>
                      </li>
                      <li>
                        <Link to="contact.html">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="#">Terms & Conditions</Link>
                      </li>
                      <li>
                        <Link to="#">Press</Link>
                      </li>

                      <li>
                        <Link to="#">Privacy Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-3 col-lg-3 col-lg-offset-1 col-sm-6 smt-30 xmt-30">
                  <div className="ft__widget">
                    <h2 className="ft__title">Newsletter</h2>
                    <div className="newsletter__form">
                      <p>
                        Subscribe to our newsletter and get 10% off your first
                        purchase .
                      </p>
                      <div className="input__box">
                        <div id="mc_embed_signup">
                          <form
                            id="mc-embedded-subscribe-form"
                            name="mc-embedded-subscribe-form"
                            className="validate"
                            target="_blank"
                            noValidate
                          >
                            <div
                              id="mc_embed_signup_scroll"
                              className="htc__news__inner"
                            >
                              <div className="news__input">
                                <input
                                  type="email"
                                  name="EMAIL"
                                  className="email"
                                  id="mce-EMAIL"
                                  placeholder="Email Address"
                                  required
                                />
                              </div>
                              <div style={style1} aria-hidden="true">
                                <input
                                  type="text"
                                  name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"
                                  tabIndex="-1"
                                />
                              </div>
                              <div className="clearfix subscribe__btn">
                                <input
                                  type="submit"
                                  name="subscribe"
                                  id="mc-embedded-subscribe"
                                  className="bst__btn btn--white__color"
                                />
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="htc__copyright__area">
              <div className="row">
                <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                  <div className="copyright__inner">
                    <div className="copyright">
                      <p>
                        © 2017 <Link to="#">your website name</Link>
                        All Right Reserved.
                      </p>
                    </div>
                    <ul className="footer__menu">
                      <li>
                        <Link to="index.html">Home</Link>
                      </li>
                      <li>
                        <Link to="shop.html">Product</Link>
                      </li>
                      <li>
                        <Link to="contact.html">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
