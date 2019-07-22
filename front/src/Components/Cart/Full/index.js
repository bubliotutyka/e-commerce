import React from 'react';
import BasketMenu from './CartContent';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import BasketTotal from './CartTotal';
import Modal from './Modal';
import * as S from "./style";

export default class FullCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputDisable: false,
      showModal: false,
    };
  }

  changeInputStatus = () => {
    this.setState({ inputDisable: true });
  }

  closeModal = () => {
    this.setState({showModal: false});
  }

  openModal = () => {
    this.setState({showModal: true});
  }

  render() {
    const {inputDisable, showModal} = this.state;

    return (
      <Container maxWidth="lg">
        <Grid container spacing={2}>

          <S.Title>My Cart</S.Title>
          
          <Grid item xs={12} md={8}>
            <BasketMenu inputDisable={inputDisable}/>
          </Grid>

          <Grid item xs={12} md={4}>
            <BasketTotal changeInputStatus={this.changeInputStatus} openModal={this.openModal}/>
          </Grid>

          {showModal && <Modal close={this.closeModal}/>}

        </Grid>
      </Container>
    );
  }
}
