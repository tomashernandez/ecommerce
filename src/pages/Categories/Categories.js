import React, { Component } from "react";

export default class Categories extends Component {
  state = {
    error: false,
    artist: null,
    loading: true
  };
  render() {
    return (
      <React.Fragment>
        <h2>Categories</h2>
      </React.Fragment>
    );
  }
}
