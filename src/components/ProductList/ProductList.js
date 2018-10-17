import React, { Component } from "react";

import SingleProduct from "../SingleProduct";

export default class ProductList extends Component {
  generarListaProductos = () => {
    if (this.props.products != null) {
      return this.props.products.map(product => {
        return <SingleProduct product={product} key={product._id} />;
      });
    }
  };

  render() {
    if (this.props.products != null) {
      if (this.props.products.length == 0) {
        return <h3 className="text-center">Sin Productos</h3>;
      }
      return (
        <>
          <div className="section__title text-center">
            <h2 className="title__line">{this.props.title}</h2>
          </div>
          <div className="htc__product__container container">
            <div className="row">
              <div className="product__list another-product-style">
                {this.generarListaProductos()}
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return <h2>Loading</h2>;
    }
  }
}
