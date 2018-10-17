import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./../Layout";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Terms from "../../pages/Terms";
import Categories from "../../pages/Categories";
import Category from "../../pages/Category";
import MyAccount from "../../pages/MyAccount";
import Products from "../../pages/Products";

export default class App extends Component {
  handleClickSearch = event => {
    console.log("Click here....");
  };

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/category/:categoryName" component={Category} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/myAccount" component={MyAccount} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/productDetail/:productId" component={Home} />
        </Switch>
      </Layout>
    );
  }
}
