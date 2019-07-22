import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import General from './General';
import CreditCard from './CreditCard';
import Commands from './Commands';

import TicketService from '../../Service/TicketService.js';
// import AuthService from '../../Service/AuthService.js';

import { css }  from 'emotion';

import * as S from './style';

export default class Account extends React.Component {
  state = {
    onglet_choice: 'General',
  }

  OngletList = () => {
   return(
     <List className={css(S.menuList)}>
     <Grid style={{height: 400, padding: 15}} container direction='column' justify='center'>
       <ListItem className={css(S.itemMenuList)}>
         <S.Tab onClick={() => this.setState({onglet_choice: 'General'})}><h5><i style={{marginRight: 10, fontSize: 20}} className="fas fa-wrench"></i>Paramètres généraux</h5></S.Tab>
       </ListItem>
       <ListItem className={css(S.itemMenuList)}>
          <S.Tab onClick={() => this.setState({onglet_choice: 'Commands'})}><h5><i style={{marginRight: 10}} className="fas fa-cube"></i>Mes commandes</h5></S.Tab>
       </ListItem>
       <ListItem className={css(S.itemMenuList)}>
         <S.Tab onClick={() => this.setState({onglet_choice: 'CreditCard'})}><h5><i style={{marginRight: 10}} className="fas fa-credit-card"></i>Mon moyen de paiement</h5></S.Tab>
       </ListItem>
      </Grid>
     </List>
   );
 }

 async componentDidMount(){
   var order = await TicketService.getAllByUser(localStorage.getItem('eToken'));
   await this.setState({order});
 }

  render(){
    return(
      <S.Container>
        <div className={css(S.principal_grid)}>
          <this.OngletList />
          <OngletChoice user={this.state.user} state={this.state} choice={this.state.onglet_choice} />
        </div>
      </S.Container>
    );
  }
}

function OngletChoice(props){
  switch (props.choice) {
    case 'General':
        return (<div className={css(S.panelView)}><General/></div>);
      
    case 'CreditCard':
        return (<div className={css(S.panelView)}><CreditCard/></div>);
      
    case 'Commands':
        return (<div className={css(S.panelView)}><Commands order={props.state.order}/></div>);
      
    default: return (<div className={css(S.panelView)}><General user={props.user}/></div>);

  }
}
