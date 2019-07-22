import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuItem from "@material-ui/core/MenuItem";
import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Tableau from './Component/Tableau';
import Stepper from './Component/Stepper';

import TicketService from '../../Service/TicketService'
import BillService from '../../Service/BillService.js';

import CircularProgress from '@material-ui/core/CircularProgress';
import * as S from './style';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

export default class Order extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id_command: this.props.match.params.id,
      exist: false
    }
  }

  async componentDidMount(){
    console.log(this.state.id_command);
    var bill = await BillService.getBills(this.state.id_command);
    var order = await TicketService.getById(this.state.id_command);
    console.log(order);
    if (order.id) {
      await this.setState({order: order, exist: true, pdf: bill});
    }
    console.log(this.state.pdf);
    console.log(this.state.order);
    console.log(bill);
  }

  render(){
    if (this.state.exist) {
      return(
        <div style={{backgroundColor: 'white', paddingTop: 30, paddingBottom: 30}}>
        <Container>
        <Grid style={{borderBottom: '2px solid #8ed5a4'}} container direction='row' justify="space-between" alignItems="baseline">
        <h3 style={{fontWeight: 'normal'}}>Order N° <span style={{fontWeight: 'bold'}}>{this.props.match.params.id}</span></h3>
        <h4>Commande effectue le {this.state.order.created_at.split(' ')[0]}</h4>
        </Grid>
        <Grid container direction='row' justify="center">
        <Stepper step={this.state.order.step} />
        </Grid>
        <Grid style={{marginTop: 30}} container direction='row' justify='center'>
          <h3 style={{fontWeight: 'bold'}}>Contenu de ma commande</h3>
        </Grid>
        <Grid container direction='row' justify='center'>
        <Tableau style={{border: '1px solid'}} cart={this.state.order.cart} />
        </Grid>
        <Grid style={{marginTop: 40}} container direction='row' justify='center'>
          <S.Link href={this.state.pdf.pdf} download>
          <Grid container direction='row' justify='center' alignItems="baseline">
            <h2 style={{fontWeight: 'normal'}}>Telecharger votre facture</h2>
            <i style={{marginLeft: 20, fontSize: '40px'}} className="fas fa-file-invoice"></i>
          </Grid>
          </S.Link>
        </Grid>
        </Container>

        </div>
      );
    }else {
      return(
        <h1>Command not found</h1>
      );
    }
  }
}
