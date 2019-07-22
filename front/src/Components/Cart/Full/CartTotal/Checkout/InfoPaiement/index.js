import React from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PaypalButton from './PaypalButton';
import Divider from '@material-ui/core/Divider';
import AuthService from '../../../../../../Service/AuthService';
import CheckoutService from '../../../../../../Service/CheckoutService';

export default class InfoPaiement extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  handleInputChange(event){
    if (event.target.name === 'expireDate') {
      if (event.target.value.length <= 5) {
        if (event.target.value.length === 2 && event.target.value.length > this.state.expireDate.length) {
            this.setState({[event.target.name]: event.target.value + '/'});
        } else {
            this.setState({[event.target.name]: event.target.value});
        }
      }
    } else {
      if (event.target.name === 'ccv') {
        if (event.target.value.length <= 3) {
          this.setState({[event.target.name]: event.target.value});
        }
      } else {
        if (event.target.name === 'cartNumber') {
            if (event.target.value.length <= 16) {
              console.log(parseInt(event.target.value[event.target.value.length - 1]));
              if (parseInt(event.target.value[event.target.value.length - 1]) &&  !isNaN(parseInt(event.target.value[0]))) {
                this.setState({[event.target.name]: event.target.value});
              }
            }
        } else {
          this.setState({[event.target.name]: event.target.value});
        }
      }
    }
  }

  async componentDidMount(){
    var user = await AuthService.getUserInfo(localStorage.getItem('eToken'));
    var creditCard = await AuthService.getCreditCard();
    if (creditCard.length >= 1) {
      this.setState({
        titulaireName: creditCard[0].titulaire,
        cartNumber: creditCard[0].creditCardNumber,
        expireDate: creditCard[0].expiration.split('-')[1] +'/'+creditCard[0].expiration.split(' ')[0].split('-')[0].substr(2),
      })
    }
  }

  async buyConfirmed(){
    const { cartNumber, titulaireName, expireDate, ccv } = this.state;

    var userInfo = JSON.parse(localStorage.getItem('eUser_info'));
    var userAdress = JSON.parse(localStorage.getItem('eUser_adress'));
    var userDelivery = JSON.parse(localStorage.getItem('eUser_delivery'));
    var userCart = JSON.parse(localStorage.getItem('cart'));
    const package_option = localStorage.getItem('package_option');

    console.log({
        cart: JSON.parse(localStorage.getItem('cart')),
        credentials: {
          creditCardNumber: cartNumber,
          expiration: expireDate.replace("/", "-"),
          ccv: ccv,
        },
        userEmail: userInfo.mail,
        adress: userAdress,
        transporter_id: userDelivery.transporter_id,
        paymentOption: 'creditCard'
    });

    var sendOrderRes = await CheckoutService.createOrder({
        cart: JSON.parse(localStorage.getItem('cart')),
        credentials: {
          creditCardNumber: cartNumber,
          expiration: expireDate.replace("/", "-"),
          ccv: ccv,
        },
        userEmail: userInfo.mail,
        adress: userAdress,
        transporter_id: userDelivery.transporter_id,
        paymentOption: 'creditCard',
        packageOption : (package_option ? package_option : null)
    });
    console.log(sendOrderRes);
    if (sendOrderRes.id) {
      console.log('Paiement accepted');
    }else {
      console.log('paiement refused');
    }
  }

  render(){
    return(
      <div style={{marginTop: 20}}>
      <Container>
          <PaypalButton/>
          <Divider style={{marginTop: 20, marginBottom:20, backgroundColor: '#e5a771', height: 1}} />
          <TextField style={padding_field} error={false} helperText='Required' fullWidth label="Nom du titulaire" value={this.state.titulaireName} name='titulaireName' onChange={this.handleInputChange.bind(this)} margin="normal" variant="outlined"/>
          <TextField style={padding_field} error={false} helperText='Required' label="Numero de carte" value={this.state.cartNumber} name='cartNumber' onChange={this.handleInputChange.bind(this)} margin="normal" variant="outlined"/>
          <TextField style={padding_field} error={false} helperText='Required' label="Date d'expiration" value={this.state.expireDate} name='expireDate' onChange={this.handleInputChange.bind(this)} margin="normal" variant="outlined"/>
          <TextField style={padding_field} error={false} helperText='Required' label="CCV" value={this.state.ccv} name='ccv' onChange={this.handleInputChange.bind(this)} margin="normal" variant="outlined"/>
      </Container>
      <Container style={{marginTop: 20}}>
        <Grid container direction='row' justify='center'>
        <Button onClick={this.buyConfirmed.bind(this)} variant="contained" size="large" color="primary">
          Effectuer le paiement !
        </Button>
        </Grid>
      </Container>
      </div>
    );
  }
}

const padding_field = {
  margin: 5,
  marginTop: 20
}
