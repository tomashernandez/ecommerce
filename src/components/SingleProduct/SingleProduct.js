import React, { Component } from "react";
import { Link } from "react-router-dom";

import imgProduct from "../../assets/images/product/1.png";

class SingleProduct extends Component {
  render() {
    if (this.props.product != null) {
      const { product } = this.props;
      return (
        <>
          <div className="col-md-4 single__pro col-lg-4 col-sm-4 col-xs-12 cat--2">
            <div className="product foo">
              <div className="product__inner">
                <div className="pro__thumb">
                  <a href="#">
                    <img src={product.imageLink} alt="product images" />
                  </a>
                </div>
                <div className="product__hover__info">
                  <ul className="product__action">
                    <li>
                      <a
                        data-toggle="modal"
                        data-target="#productModal"
                        title="Quick View"
                        className="quick-view modal-view detail-link"
                        href="#"
                      >
                        <span className="ti-plus" />
                      </a>
                    </li>
                    <li>
                      <a title="Add TO Cart" href="cart">
                        <span className="ti-shopping-cart" />
                      </a>
                    </li>
                    <li>
                      <a title="Wishlist" href="wishlist">
                        <span className="ti-heart" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product__details">
                <h2>
                  <Link to={`productDetail/${product._id}`}>
                    {product.item}
                  </Link>
                </h2>
                <ul className="product__price">
                  <li className="old__price" />
                  <li className="new__price">${product.price}</li>
                </ul>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}
export default SingleProduct;
