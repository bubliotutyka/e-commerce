import React from 'react';
import * as S from "./style";
import BasketHeader from './CartHeader';
import BasketItem from './CartItem';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  cart: state.cart,
});

class CartMenu extends React.Component {
  render() {
    const { cart } = this.props;
    
    return (
      <S.Container>
        <BasketHeader />
        <S.BasketContent>
          {
            cart.map((item, key) => <BasketItem key={key} id={item.id} inputDisable={this.props.inputDisable}/>)
          }
        </S.BasketContent>
      </S.Container>
    );
  }
}

export default connect(mapStateToProps)(CartMenu);