import React, { Component } from "react";
import Logo from "../Logo";
import NavBar from "../NavBar";

import $ from "jquery";

export default class Header extends Component {
  handleClickSearch = event => {
    $("body").toggleClass("search__box__show__hide");
    return false;
  };

  render() {
    return (
      <>
        <header id="header" className="htc-header">
          {/* <!-- Start Mainmenu Area --> */}
          <div
            id="sticky-header-with-topbar"
            className="mainmenu__area sticky__header"
          >
            <div className="container">
              <div className="row">
                <Logo />
                <NavBar handleClickSearch={this.handleClickSearch} />
              </div>
              <div className="mobile-menu-area" />
            </div>
          </div>
          {/* <!-- End Mainmenu Area --> */}
        </header>
      </>
    );
  }
}
