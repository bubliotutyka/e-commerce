import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import UserPanelDropdown from './UserPanelDropDown';
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import * as S from './style';


import AuthService from '../../../Service/AuthService.js';
// import LoginRegisterService from '../../Service/LoginRegisterService.js';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  async function getUser(){
    await AuthService.getUser(localStorage.getItem('eToken'))
    .then(function(res){
      return res.user;
    });
  }

  return (
    <S.Container>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>

      <Grid container direction='column' justify='center'>
        <Grid container direction='row' justify='center'>
          <Icon>account_circle</Icon>
        </Grid>
        <Grid container direction='row' justify='center'>
          <p>Compte</p>
        </Grid>
      </Grid>
      
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <UserPanelDropdown user={getUser()}/>
      </Menu>
    </S.Container>
  );
}
