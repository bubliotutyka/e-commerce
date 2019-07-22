import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import {css} from 'emotion';
import * as S from './style';

import CheckoutService from '../../../../../../Service/DeliveryService';

export default class Info_delivery extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fournisseur: [],
      selectFurnissor: null,
      selected : "",
      packageoption :[]
    };
  }

  dataDelivery(){
    var snipcart = JSON.parse(localStorage.getItem('cart'));
    var info_user_adress = JSON.parse(localStorage.getItem('eUser_adress'));
    var object = {
      cart: snipcart,
      credential: {
        pays: info_user_adress.pays,
        departement: info_user_adress.departement,
        ville: info_user_adress.ville,
        etc: {cpostal: info_user_adress.cpostal, number: info_user_adress.number, rue: info_user_adress.rue},
      },
      };
    return JSON.stringify(object);
  }

  async componentDidMount(){
    let temp = [];
    const deliveryOption = await CheckoutService.getDelivery(this.dataDelivery());
    const packageo = await CheckoutService.getPackage();
    for (var i = 0; i < deliveryOption.length; i++) {
      if (deliveryOption[i].disponibility !== "indisponible") {
        temp.push(deliveryOption[i]);
      }
    }
    await this.setState({fournisseur: temp, packageoption : packageo});
  }

  selectFurnissor(selectFurnissor, id){
    localStorage.setItem('eUser_delivery', JSON.stringify({transporter_id: id}));
    this.setState({selectFurnissor});
  }

  async handleChange(event) {
    await this.setState({selected : event.target.value})
    localStorage.setItem("package_option",this.state.selected)
    
  }

  render(){
    const {selectFurnissor, packageoption,selected} = this.state;

    return(
      <div>
      <Grid container direction="row" justify='space-around'>
      {this.state.fournisseur.map((item, key) =>
        <Card raised={true} className={`${css(S.Active)} ${selectFurnissor === key ? "active" : ""}`} id={key} onClick={() => this.selectFurnissor(key, item.id)}>
         <CardActionArea>
          <CardContent>
          <h3>{item.name}</h3>
          <Grid container direction="row" justify='center'>
          <h5>Livrer en {item.delivery_delay}H</h5>
          </Grid>
          <Grid container direction="row" justify='center'>
          <h6>{item.price} EUR</h6>
          </Grid>
          </CardContent>
          </CardActionArea>
        </Card>
      )}
      {packageoption.length != 0 
        ? (
            <>
              <Select
                value={selected}
                onChange={(e) => this.handleChange(e)}
                inputProps={{
                  name: 'selected',
                  id : 'pack'
                }}
                displayEmpty
              >
                <MenuItem value="">
                <em>None Selected</em>
              </MenuItem>
              {packageoption.map((item, key) => {
                  return <MenuItem value={item.name}>{item.name}</MenuItem>
              })}
              </Select>
            </>)      
          : (null)
        }

      </Grid>
      </div>
    );
  }
}
