import React from 'react';
import Checkout from './Checkout';
import Button from '../../../DefaultComponent/Button';
import * as S from "./style";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  cart: state.cart,
  user: state.user,
})

class CartTotal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      checkout: false,
    };
  }

  handleClickProceedToCheckout = () => {
    const {openModal, user} = this.props;
    if (!user.isLogin) {
      openModal();
    }
    this.setState({ checkout: true });
    this.props.changeInputStatus();
  }

  render() {
    const { cart } = this.props;
    let totalPrice = 0;
    let totalProduct = 0;

    for (let i = 0; i < cart.length; ++i) {
      const { price, quantity } = cart[i];
      totalPrice += price * quantity;
      totalProduct += quantity;
    }

    if (this.state.checkout === false) {
      return (
        <S.Container>
          <S.Title>Cart's Total</S.Title>
          {
            totalPrice > 1 ? (
              <S.Quantity><S.ColorNumber>{ totalProduct }</S.ColorNumber> Products in cart</S.Quantity>
            ) : (
              <S.Quantity><S.ColorNumber>{ totalProduct }</S.ColorNumber> Product in cart</S.Quantity>
            )
          }
          <S.Price>{ totalPrice } $</S.Price>
          <Button 
            text="Proceed To Checkout"
            onClick={this.handleClickProceedToCheckout}
          />
        </S.Container>
      );
    } else {
      return (
        <div>
          <Checkout/>
        </div>
      );
    }
    
  }
}

export default connect(mapStateToProps)(CartTotal);