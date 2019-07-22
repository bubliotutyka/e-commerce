import React from 'react';
import { DeleteButton, EditButton, StockButton } from './Button';
import { Link } from "react-router-dom";
import * as S from './style';

export default class Crad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.product,
    };
  }

  handleTitleClick = () => {
    const link = document.getElementById(`product${this.state.id}`);
    link.click();
  }

  render() {
    const { name, id, quantity } = this.state;

    return(
      <S.Container>
        <S.Title onClick={this.handleTitleClick}>{name}</S.Title>
        <S.ButtonContainer>
          <DeleteButton productId={id}/>
          <EditButton productId={id}/>
          <StockButton id={id} quantity={quantity}/>
          <Link id={`product${id}`} to={`/product/${id}`}/>
        </S.ButtonContainer>
      </S.Container>
    );
  }
}