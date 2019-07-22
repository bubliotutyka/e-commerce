import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuItem from "@material-ui/core/MenuItem";
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});


export default class Tableau extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cart: this.props.cart,
    }
    this.totalPrice = this.totalPrice.bind(this);
  }

  componentDidMount(){
    console.log(this.state.cart);
  }

  totalPrice(){
    const { cart } = this.state;
    let total = 0;
    for (var i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    return total;
  }


  render(){

    return(
      <div style={{width: '70%', borderTop: ' 1px solid #8ed5a4', borderBottom: ' 1px solid #8ed5a4'}}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell><h6>Image</h6></TableCell>
            <TableCell><h6>Nom</h6></TableCell>
            <TableCell align="right"><h6>Unit Price</h6></TableCell>
            <TableCell align="right"><h6>Total Price</h6></TableCell>
            <TableCell align="right"><h6>Quantity</h6></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          this.state.cart.map((item) =>
          <TableRow>
          <TableCell component="th" scope="row">
            <Avatar style={{width: 50, height: 50}} alt="Remy Sharp" src={item.image} />
          </TableCell>
          <TableCell align="left"><h5>{item.name}</h5></TableCell>
          <TableCell align="right"><h4>{item.price}$</h4></TableCell>
          <TableCell align="right"><h4>{item.price * item.quantity}$</h4></TableCell>
          <TableCell align="right"><h4>x{item.quantity}</h4></TableCell>
          </TableRow>
          )
        }
        </TableBody>
      </Table>
      <Grid style={{marginTop: 20}} container direction='row' justify='flex-end'>
        <h3 style={{padding: '12px', borderRadius: '9px', backgroundColor: '#b5e3c3'}}>Total : {this.totalPrice()} EUR</h3>
      </Grid>
      </div>
    );
  }
}
