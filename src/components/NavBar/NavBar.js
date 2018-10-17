import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  handleClickSearch = event => {
    this.props.handleClickSearch(event);
  };

  render() {
    const activeStyle = {
      fontWeight: "bold",
      color: "var(--red)"
    };
    return (
      <>
        {/* <!-- Start MAin menu  --> */}
        <div className="col-md-9 col-lg-9 col-sm-6 col-xs-6">
          <nav className="mainmenu__nav hidden-xs hidden-sm">
            <ul className="main__menu">
              <li>
                <NavLink
                  to="/about"
                  exact
                  activeClassName="active"
                  activeStyle={activeStyle}
                >
                  About
                </NavLink>
              </li>
              <li className="drop">
                <NavLink
                  to="/terms"
                  exact
                  activeClassName="active"
                  activeStyle={activeStyle}
                >
                  Terms+Conditions
                </NavLink>
              </li>
              <li className="drop">
                <NavLink
                  to="/products"
                  exact
                  activeClassName="active"
                  activeStyle={activeStyle}
                >
                  All
                </NavLink>
              </li>
              <li className="drop">
                <NavLink
                  to="/category/seating"
                  exact
                  activeClassName="active"
                  activeStyle={activeStyle}
                >
                  Seating
                </NavLink>
              </li>
              <li className="drop">
                <NavLink
                  to="/category/tables"
                  exact
                  activeClassName="active"
                  activeStyle={activeStyle}
                >
                  Tables
                </NavLink>
              </li>
              <li className="drop">
                <NavLink
                  to="/category/desks"
                  exact
                  activeClassName="active"
                  activeStyle={activeStyle}
                >
                  Desks
                </NavLink>
              </li>
              <li className="drop">
                <NavLink
                  to="/category/storage"
                  exact
                  activeClassName="active"
                  activeStyle={activeStyle}
                >
                  Storage
                </NavLink>
              </li>
              <li className="drop">
                <NavLink
                  to="/category/bedroom"
                  exact
                  activeClassName="active"
                  activeStyle={activeStyle}
                >
                  Bedroom
                </NavLink>
              </li>
              <li className="drop">
                <NavLink
                  to="/category/misc"
                  exact
                  activeClassName="active"
                  activeStyle={activeStyle}
                >
                  Misc
                </NavLink>
              </li>
            </ul>
          </nav>
          {/* <div className="mobile-menu clearfix visible-xs visible-sm">
            <nav id="mobile_dropdown">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                  <ul>
                    <li>
                      <a href="index.html">Home 1</a>
                    </li>
                    <li>
                      <a href="index-2.html">Home 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">portfolio</a>
                  <ul className="dropdown">
                    <li>
                      <a href="portfolio-gutter-box-3.html">
                        Boxed Gutter 3 Col
                      </a>
                    </li>
                    <li>
                      <a href="portfolio-gutter-full-wide-4.html">
                        Wide Gutter 4 Col{" "}
                      </a>
                    </li>
                    <li>
                      <a href="portfolio-card-box-3.html">Card Gutter 3 Col </a>
                    </li>
                    <li>
                      <a href="portfolio-masonry-3.html">Masonry Box 3 Col </a>
                    </li>
                    <li>
                      <a href="portfolio-gutter-masonry-fullwide-4.html">
                        Masonry Wide 4 Col{" "}
                      </a>
                    </li>
                    <li>
                      <a href="portfolio-gutter-box-3-carousel.html">
                        carousel Gutter 3 Col{" "}
                      </a>
                    </li>
                    <li>
                      <a href="portfolio-justified-box-3.html">
                        justified box 3 Col
                      </a>
                    </li>
                    <li>
                      <a href="single-portfolio-gallery.html">
                        Portfolio Details{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="blog.html">blog</a>
                  <ul>
                    <li>
                      <a href="blog.html">blog 3 column</a>
                    </li>
                    <li>
                      <a href="blog-2-col-rightsidebar.html">
                        2 col right siderbar
                      </a>
                    </li>
                    <li>
                      <a href="blog-details-left-sidebar.html"> blog details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">pages</a>
                  <ul>
                    <li>
                      <a href="about.html">about</a>
                    </li>
                    <li>
                      <a href="shop.html">shop</a>
                    </li>
                    <li>
                      <a href="shop-sidebar.html">shop sidebar</a>
                    </li>
                    <li>
                      <a href="product-details-sticky-right.html">
                        product details
                      </a>
                    </li>
                    <li>
                      <a href="cart.html">cart</a>
                    </li>
                    <li>
                      <a href="wishlist.html">wishlist</a>
                    </li>
                    <li>
                      <a href="checkout.html">checkout</a>
                    </li>
                    <li>
                      <a href="team.html">team</a>
                    </li>
                    <li>
                      <a href="login-register.html">login & register</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div> */}
        </div>
        {/* <!-- End MAinmenu Ares --> */}
        <div className="col-md-2 col-sm-4 col-xs-3">
          <ul className="menu-extra">
            <li className="search search__open hidden-xs">
              <span className="ti-search" onClick={this.handleClickSearch} />
            </li>
            <li>
              <a href="login-register.html">
                <span className="ti-user" />
              </a>
            </li>
            <li className="cart__menu">
              <span className="ti-shopping-cart" />
            </li>
            <li className="toggle__menu hidden-xs hidden-sm">
              <span className="ti-menu" />
            </li>
          </ul>
        </div>
      </>
    );
  }
}
