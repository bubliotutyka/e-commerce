import React from 'react';
import { css } from 'emotion';
import { connect } from 'react-redux';
import { addToCart } from '../../../Redux/Action/CartAction';
import Button from '../../DefaultComponent/Button';
import * as S from './style';

const mapStateToProps = state => {
  return { products: state.cart };
}

const mapDispatchToProps = dispatch => ({
  addToCart: payload => dispatch(addToCart(payload)),
});

class CustomCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.product,
      photos: JSON.parse(props.product.photos),
    }
    this.productLink = `/product/${props.product.id}`;
    this.productLinkId = `product${props.product.id}`;
  }

  showProduct = e => {
    e.preventDefault();
    if (e.target.id !== 'add-to-cart' && e.target.tagName !== 'path' && e.target.tagName !== 'svg') {
      const redirect = document.getElementById(this.productLinkId);
      redirect.click();
    }
  }

  addToCart = e => {
    const { addToCart } = this.props;
    const { id, name, photos, price } = this.state;
    addToCart({ id, image: photos[0], name, price });
  }
  
  render() {
    const { id, name, photos, price } = this.state;
    let productName = name.length > 20 ? `${name.slice(0,20)}...` : name;

    return (
      <S.Container>
        <S.Card href={`/product/${id}`}>
          <S.CardImageContainer>
            <S.CardImage src={photos[0]} />
          </S.CardImageContainer>
          <S.Name>{productName}</S.Name>
          <S.Price>{price} $</S.Price>
        </S.Card>
        <Button 
          buttonStyle={css(S.ButtonStyle)}
          text="Add to cart"
          onClick={this.addToCart}
          icon={<i className="fas fa-cart-plus"></i>}
          left
        />
      </S.Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomCard);