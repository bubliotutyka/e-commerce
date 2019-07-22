import React from 'react';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import CartItem from './Item';

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart,
  }
}

class Snipcart extends React.Component {
  totalPrice(){
    const { cartItems } = this.props;
    let total = 0;
    for (var i = 0; i < cartItems.length; i++) {
        total += cartItems[i].price * cartItems[i].quantity;
    }
    return total;
  }
    
  render(){
    const { cartItems } = this.props;

    return(
      <div>
      <Container style={{marginTop: 20}} fixed>
        <Grid container direction='row' justify='center'>
        <h4>My Cart</h4>
        </Grid>
      </Container>
      <Container fixed>
        {
          cartItems.length <= 0 
          ? ( <List>
            <h5>Your cart is empty</h5>
          </List> 
          ) 
          : (
            <div>
              <List>
                <ListItem>
                  <ListItemText><h6>Product / Quantity</h6></ListItemText>
                  <ListItemSecondaryAction><h6>Price</h6></ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                {
                  cartItems.map((item, key) => <CartItem key={key} item={item} />)
                }
              </List>

                <Container style={{marginTop: 10, marginBottom: 10}} fixed>
                  <Grid container direction='row' justify='center'>
                    <h4>Total {this.totalPrice()} $</h4>
                  </Grid>
                </Container>
                <Divider/>

                <Container fixed>
                  <Grid style={{marginTop: 10}} container direction="row" justify='space-around'>
                    <Button component={Link} color="inherit" to="/cart">Modifier mon panier</Button>
                    <Button>checkout</Button>
                  </Grid>
                </Container>
              </div>
          )
        }
      </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Snipcart);