import React, { Component } from "react";
import * as APIMALLORY from "../../libraries/apiMallory";
import ProductList from "../../components/ProductList";

export default class Category extends Component {
  state = {
    error: false,
    products: null,
    loading: true,
    name: ""
  };

  getCategory = categoryName => {
    APIMALLORY.getCategoryProducts(categoryName)
      .then(data => {
        if (data) {
          this.setState({ products: data });
        }
      })
      .catch(error => {
        console.log("Error");
      });
  };

  componentDidMount() {
    let categoryName = this.props.match.params.categoryName;
    this.setState({ name: categoryName });
    this.getCategory(categoryName);
  }
  componentDidUpdate() {
    if (this.props.match.params.categoryName != this.state.name) {
      let categoryName = this.props.match.params.categoryName;
      this.setState({ name: categoryName });
      this.getCategory(categoryName);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="bg__white pt--130">
          <h2>
            Category <span>{this.state.name}</span>
          </h2>
          {this.state.products && (
            <ProductList
              products={this.state.products}
              title={this.state.name}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}
