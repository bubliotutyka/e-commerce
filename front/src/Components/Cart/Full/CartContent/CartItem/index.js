import React from 'react';
import * as S from "./style";
import { updateQuantity, deleteItem } from '../../../../../Redux/Action/CartAction';
import { connect } from 'react-redux';
import ProductService from '../../../../../Service/ProductService';

const mapStateToProps = (state, ownProps) => {
  return {
    cartItem: state.cart.find(item => item.id === ownProps.id),
  }
}

const mapDispatchToProps = dispatch => ({
  updateQuantity: payload => dispatch(updateQuantity(payload)),
  deleteItem: payload => dispatch(deleteItem(payload)),
});

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxQuantity: 0,
    }
  }

  componentDidMount = async () => {
    const itemFromDb = await ProductService.getById(this.props.cartItem.id);
    let maxQuantity = itemFromDb.quantity > 25 ? 25 : itemFromDb.quantity;
    this.setState({ ...itemFromDb, maxQuantity });
  }

  handleTrashClick = e => {
    const { cartItem, deleteItem} = this.props;
    if (!this.props.inputDisable) {
      deleteItem(cartItem);
    }
  }

  handleChangeQuantity = e => {
    const { cartItem, updateQuantity } = this.props;
    const { maxQuantity } = this.state;
    let quantity = 0;

    if (parseInt(e.target.value) > maxQuantity)
      quantity = maxQuantity;
    else if (parseInt(e.target.value) < 1)
      quantity = 1;
    else
      quantity = parseInt(e.target.value);

    updateQuantity({
      old: cartItem,
      new: { ...cartItem, quantity, }
    });
  }

  render() {
    const { cartItem, inputDisable } = this.props;
    const { image, quantity } = cartItem;
    const { maxQuantity, id, name, price } = this.state;

    // const fakePic = 'http://www.eldiariodecoahuila.com.mx/u/fotografias/fotosnoticias/2018/10/15/695930.jpg';

    return (
      <S.Container>
        <S.TitleContainer>
          <S.TitleImg src={image} alt={name}/>
          <S.TitleText href={`/product/${id}`}>{name}</S.TitleText>
        </S.TitleContainer>
        <S.Price>{price} $</S.Price>
        <S.Quantity>
          {
            inputDisable 
              ? (<S.QuantityInput 
                  type="number" 
                  min="1"
                  max={maxQuantity}
                  onChange={this.handleChangeQuantity} 
                  value={quantity}
                  disabled
                />)
              : (<S.QuantityInput 
                type="number" 
                min="1"
                max={maxQuantity}
                onChange={this.handleChangeQuantity} 
                value={quantity}
              />)
            }
        </S.Quantity>
        <S.Total>{quantity * price} $</S.Total>
        <S.Action>
          <S.ActionContainer onClick={this.handleTrashClick}>
            <i className="fas fa-times" id={id}></i>
            <S.ActionText>Remove</S.ActionText>
          </S.ActionContainer>
        </S.Action>
      </S.Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);