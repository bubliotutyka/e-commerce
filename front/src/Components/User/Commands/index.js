import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Container'

import TicketService from '../../../Service/TicketService.js';
import BillService from '../../../Service/BillService.js';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as S from './style';

import { Link } from "react-router-dom";


export default class Commands extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      order: [],
    }
  }

  async componentDidMount(){
    const order = await TicketService.getAllByUser(localStorage.getItem('eToken'))
    await this.setState({order})
    for(let i in order) {
      const bill = await this.getBills(order[i].id)
      order[i].bill = bill.pdf
      await this.setState({order})

    }

  }

  getBills = async (id) => {
    return await BillService.getBills(id)

  }

  render(){
    const { order } = this.state;

    return(
      <div>
      <Grid container direction='row' justify='center'>
      <Container>
       <h2>Tableau de mes commandes</h2>
       <h6>Gerer facilement vos commande passee ou en cours avec ce jolie tableau</h6>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Ordered</TableCell>
              <TableCell>Step</TableCell>
              <TableCell>Detail</TableCell>
              <TableCell>Bill</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {
            order.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.ordered.split('T')[0]} [{item.ordered.split('T')[1].split('.000000Z')[0]}]</TableCell>
                  <TableCell>{item.step}</TableCell>
                  <TableCell><Button component={Link} color="inherit" to={'/order/'+item.id}>Voir les detail</Button></TableCell>
                  {item.bill ? <TableCell><S.Link href={item.bill} download><i className="fas fa-file-invoice"></i></S.Link></TableCell> :<CircularProgress/>}
                </TableRow>
              )
            )
          }
          {/* {
            fakeData.map((order, key) => (
              <TableRow key={order.id}>
                <TableCell>N° {order.id}</TableCell>
                <TableCell>{order.date}</TableCeldownload file reactjsl>
                <TableCell>{order.status}</TableCell>
                <TableCell><S.Link href={order.detail}>Details de la conmmande</S.Link></TableCell>
                <TableCell><S.Link href={order.bill} download><i className="fas fa-file-invoice"></i></S.Link></TableCell>
              </TableRow>
            ))
          } */}
          </TableBody>
        </Table>
      </Container>
      </Grid>
      </div>
    );
  }
}
