import React from 'react';
import { Switch ,Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import Home from './Home';
import Product from './Product';
import Panel from './Panel';
import ProductForm from './Form/ProductForm';
import Menuccsc from './Menuccsc';
import Cart from './Cart';
import SearchResult from './SearchResult';
import Account from './User';
import NotFound from './NotFound';
import AboutUs from './AboutUs';
import Order from './Order';

const mapStateToProps = state => {
  return {
    user: state.user,
  };
}

class Routes extends React.Component {
  userRoutes = () => {
    return (
      <>
        <Route exact path="/my_account" component={Account} />
      </>
    );
  }

  adminRoutes = () => {
    return (
      <>
        {this.userRoutes()}

        <Route exact path="/panel" component={Panel} />

        <Route exact path="/product/:id/edit" component={ProductForm} />
        <Route exact path="/new/product" component={ProductForm} />
      </>
    );
  }

  notFound = () => {
    return (<Route exact component={NotFound}/>);
  }

  privateRoutes = () => {
    const { isLogin, isAdmin } = this.props.user;

    if (isLogin && isAdmin) {
      return this.adminRoutes();
    }
    else if (isLogin) {
      return this.userRoutes();
    }

  }

  render() {
    return (
      <Switch>

          <Route exact path="/" component={Home} />
          <Redirect from="/home" to="/"/>

          {/* To get params in this components => this.props.match.params.id */}
          <Route exact path="/product/:id" component={Product} />
          <Route exact path='/order/:id' component={Order}/>

          <Route exact path="/c/:classes" component={Menuccsc} />
          <Route exact path="/c/:classes/:categorie" component={Menuccsc} />
          <Route exact path="/c/:classes/:categorie/:subcategorie" component={Menuccsc} />

          <Route exact path="/cart" component={Cart} />

          <Route exact path="/search/:keyword" component={SearchResult} />
          <Route exact path="/search/categorie/:categorie/:keyword" component={SearchResult} />

          <Route exact path="/about-us" component={AboutUs} />
          <Redirect from="/about" to="/about-us"/>

          {this.privateRoutes()}
          {/* {this.notFound()} */}

      </Switch>
    );
  }
}

export default connect(mapStateToProps)(Routes);
