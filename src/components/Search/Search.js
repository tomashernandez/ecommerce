import React, { Component } from "react";

export default class Search extends Component {
  handleClickCloseSearch = event => {
    this.props.handleClickCloseSearch(event);
    //$("body").toggleClass("search__box__show__hide");
  };

  render() {
    return (
      <>
        <div className="search__area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="search__inner">
                  <form action="#" method="get">
                    <input placeholder="Search here... " type="text" />
                    <button type="submit" />
                  </form>
                  <div className="search__close__btn">
                    <span
                      className="search__close__btn_icon"
                      onClick={this.handleClickCloseSearch}
                    >
                      <i
                        className="zmdi zmdi-close"
                        onClick={this.handleClickCloseSearch}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
