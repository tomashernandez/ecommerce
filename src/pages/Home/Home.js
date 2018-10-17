import React, { Component } from "react";

import Heroe from "../../components/Heroe";
import ProductList from "../../components/ProductList";
import * as APIMALLORY from "../../libraries/apiMallory";

export default class Home extends Component {
  state = {
    loading: false,
    error: null,
    products: null
  };

  getFeaturedProducts = () => {
    APIMALLORY.getAllProducts()
      .then(data => {
        if (data) {
          let featured = APIMALLORY.singleFilterProducts(
            "featured",
            true,
            "",
            data
          );

          if (featured) {
            this.setState({ products: featured });
          }
        }
      })
      .catch(error => {
        console.log("Error");
      });
  };

  componentDidMount() {
    this.getFeaturedProducts();
  }

  render() {
    // this.getFeaturedProducts();
    const { loading, products, error } = this.state;

    return (
      <>
        <Heroe />
        <div className="row bg__white featured-div">
          <ProductList products={products} title={"Featured Products"} />
        </div>
        <div className="space" />
      </>
    );
  }
}
