import React, { Component } from "react";
import SvgLogo from "../../utils/svgLogo";
import { Link } from "react-router-dom";

export default class Logo extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-md-1 col-lg-1 col-sm-3 col-xs-3">
          <div className="logo">
            <Link to="/">
              <SvgLogo fill="#000" title="Mallory" />
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
