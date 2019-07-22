import React from 'react';
import * as S from "./style";
import { clearCart } from '../../../../../Redux/Action/CartAction';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    cartItem: state.cart.find(item => item.id === ownProps.id),
  }
}

const mapDispatchToProps = dispatch => ({
  clearCart: payload => dispatch(clearCart(payload)),
});

class CartHeader extends React.Component {

  handleTrashClick = () => {
    this.props.clearCart([]);
  }

  render() {
    return (
      <S.Container>
        <S.NameTitle>Product</S.NameTitle>
        <S.PriceTitle>Unit Price</S.PriceTitle>
        <S.QuantityTitle>Quantity</S.QuantityTitle>
        <S.TotalTitle>Sub-Total</S.TotalTitle>
        <S.ActionTitle>
          <S.ActionContainer onClick={this.handleTrashClick}>
            <i className="far fa-trash-alt"></i>
            <S.ActionText>Clear</S.ActionText>
          </S.ActionContainer>
        </S.ActionTitle>
      </S.Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartHeader);