import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import EmptyCart from './Empty';
import FullCart from './Full';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  cart: state.cart,
});

class Cart extends React.Component {
  render() {
    const { cart } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          {
            cart.length > 0 ? (
              <FullCart cart={cart}/>
            ) : (
              <EmptyCart />
            )
          }
        </Container>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(Cart);