import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";
import Search from "../Search";

import $ from "jquery";

export default class Layout extends Component {
  closeSearch = event => {
    if ($("body").hasClass("search__box__show__hide")) {
      $("body").removeClass("search__box__show__hide");
    }
    return false;
  };

  render() {
    return (
      <main>
        <div className="wrapper fixed__footer">
          <Header />
          {this.props.children}
          <div className="body__overlay" />
          <div className="offset__wrapper">
            <Search handleClickCloseSearch={this.closeSearch} />
            <div className="offsetmenu">
              <div className="offsetmenu__inner">
                <div className="offsetmenu__close__btn">
                  <Link to="#">
                    <i className="zmdi zmdi-close" />
                  </Link>
                </div>
                <div className="off__contact">
                  <div className="logo">
                    <Link to="index.html">
                      <img src="images/logo/logo.png" alt="logo" />
                    </Link>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetu adipisicing elit sed
                    do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
                <ul className="sidebar__thumd">
                  <li>
                    <Link to="#">
                      <img
                        src="images/sidebar-img/1.jpg"
                        alt="sidebar images"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img
                        src="images/sidebar-img/2.jpg"
                        alt="sidebar images"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img
                        src="images/sidebar-img/3.jpg"
                        alt="sidebar images"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img
                        src="images/sidebar-img/4.jpg"
                        alt="sidebar images"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img
                        src="images/sidebar-img/5.jpg"
                        alt="sidebar images"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img
                        src="images/sidebar-img/6.jpg"
                        alt="sidebar images"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img
                        src="images/sidebar-img/7.jpg"
                        alt="sidebar images"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img
                        src="images/sidebar-img/8.jpg"
                        alt="sidebar images"
                      />
                    </Link>
                  </li>
                </ul>
                <div className="offset__widget">
                  <div className="offset__single">
                    <h4 className="offset__title">Language</h4>
                    <ul>
                      <li>
                        <Link to="#"> Engish </Link>
                      </li>
                      <li>
                        <Link to="#"> French </Link>
                      </li>
                      <li>
                        <Link to="#"> German </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="offset__single">
                    <h4 className="offset__title">Currencies</h4>
                    <ul>
                      <li>
                        <Link to="#"> USD : Dollar </Link>
                      </li>
                      <li>
                        <Link to="#"> EUR : Euro </Link>
                      </li>
                      <li>
                        <Link to="#"> POU : Pound </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="offset__sosial__share">
                  <h4 className="offset__title">Follow Us On Social</h4>
                  <ul className="off__soaial__link">
                    <li>
                      <Link className="bg--twitter" to="#" title="Twitter">
                        <i className="zmdi zmdi-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link className="bg--instagram" to="#" title="Instagram">
                        <i className="zmdi zmdi-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link className="bg--facebook" to="#" title="Facebook">
                        <i className="zmdi zmdi-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="bg--googleplus"
                        to="#"
                        title="Google Plus"
                      >
                        <i className="zmdi zmdi-google-plus" />
                      </Link>
                    </li>
                    <li>
                      <Link className="bg--google" to="#" title="Google">
                        <i className="zmdi zmdi-google" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="shopping__cart">
              <div className="shopping__cart__inner">
                <div className="offsetmenu__close__btn">
                  <Link to="#">
                    <i className="zmdi zmdi-close" />
                  </Link>
                </div>
                <div className="shp__cart__wrap">
                  <div className="shp__single__product">
                    <div className="shp__pro__thumb">
                      <Link to="#">
                        <img
                          src="images/product/sm-img/1.jpg"
                          alt="product images"
                        />
                      </Link>
                    </div>
                    <div className="shp__pro__details">
                      <h2>
                        <Link to="product-details.html">
                          BO&Play Wireless Speaker
                        </Link>
                      </h2>
                      <span className="quantity">QTY: 1</span>
                      <span className="shp__price">$105.00</span>
                    </div>
                    <div className="remove__btn">
                      <Link to="#" title="Remove this item">
                        <i className="zmdi zmdi-close" />
                      </Link>
                    </div>
                  </div>
                  <div className="shp__single__product">
                    <div className="shp__pro__thumb">
                      <Link to="#">
                        <img
                          src="images/product/sm-img/2.jpg"
                          alt="product images"
                        />
                      </Link>
                    </div>
                    <div className="shp__pro__details">
                      <h2>
                        <Link to="product-details.html">Brone Candle</Link>
                      </h2>
                      <span className="quantity">QTY: 1</span>
                      <span className="shp__price">$25.00</span>
                    </div>
                    <div className="remove__btn">
                      <Link to="#" title="Remove this item">
                        <i className="zmdi zmdi-close" />
                      </Link>
                    </div>
                  </div>
                </div>
                <ul className="shoping__total">
                  <li className="subtotal">Subtotal:</li>
                  <li className="total__price">$130.00</li>
                </ul>
                <ul className="shopping__btn">
                  <li>
                    <Link to="cart.html">View Cart</Link>
                  </li>
                  <li className="shp__checkout">
                    <Link to="checkout.html">Checkout</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    );
  }

  componentDidMount() {
    var $newsletter_height = $(".htc__foooter__area");
    $(".fixed__footer").css({
      "margin-bottom": $newsletter_height.height() + "px"
    });
  }
}
