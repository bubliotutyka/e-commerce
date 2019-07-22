import React from 'react';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import * as A from '../../../../Redux/Action/UserAction';
import AuthService from '../../../../Service/AuthService.js';
import LoginRegisterService from '../../../../Service/LoginRegisterService.js';

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => ({
  userConnect: payload => dispatch(A.userConnect(payload)),
  userLogout: payload => dispatch(A.userLogout(payload)),
});

class UserPanelDropdown extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      register: false,
      error: false,
    };
  }

  async handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      if (target.type === 'file') {
          await this.setState({[name]: event.target.files});
      }else {
          await this.setState({[name]: value});
      }
  }

  async submit(context){
    if (context === 'login') {
      const res = await LoginRegisterService.login({
        email: this.state.email,
        password: this.state.password,
      });
      if (typeof res.data === 'undefined') {
        await this.setState({error: true});
      }else {
        localStorage.setItem('eToken', res.data.success.token);
        const user = await AuthService.getUser(res.data.success.token);
        this.connect(user.user);
      }
    }
    if (context === 'register') {
      const res = await LoginRegisterService.register({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        c_password: this.state.password_verif
      });
      if (typeof res.data === 'undefined') {
        await this.setState({error: true});
      }else {
        localStorage.setItem('eToken', res.data.success.token);
        const user = await AuthService.getUser(res.data.success.token);
        this.connect(user.user);
      }
    }
  }

  connect = (userData) => {
    const {userConnect} = this.props;
    userConnect(userData);
  }

  logout(){
    const {userLogout} = this.props;
    userLogout();
    localStorage.removeItem('eToken');
  }

  login(){
    return (
      <div style={{padding: 30}}>
        <Container>
          <Grid container direction='row' justify='center'>
            <h5>Sign in</h5>
          </Grid>
          <Grid container direction='row' justify='center'>
          <TextField helperText='Required' fullWidth label="Login" name='email' margin="normal" variant="outlined" onChange={this.handleInputChange.bind(this)}/>
          </Grid>
          <Grid container direction='row' justify='center'>
          <TextField type='password' helperText='Required' fullWidth label="Password" name='password' margin="normal" variant="outlined" onChange={this.handleInputChange.bind(this)}/>
          </Grid>
          <Grid>
              {
                this.state.error === true
                  ? (<p style={{color: 'red'}}>Une erreur est survenu, veuillez vous re-connecter</p>)
                  : (null)
              }
          </Grid>
          <Grid container direction='row' justify='center'>
            <Button onClick={() => this.submit('login')}>Login</Button>
          </Grid>
          <Grid container direction='row' justify='center'>
            <h6>Ou</h6>
          </Grid>
          <Grid container direction='row' justify='center'>
            <Button onClick={() => this.setState({register: true, error: false})}>Register</Button>
          </Grid>
        </Container>
      </div>
    )
  }

  register(){
    return (
      <div style={{padding: 50}}>
        <Container>
          <Grid container direction='row' justify='center'>
            <h5>Register</h5>
            <Icon>
              add_circle
            </Icon>
          </Grid>
          <Grid container direction='row' justify='center'>
          <TextField helperText='Required' fullWidth label="name" name='name' margin="normal" variant="outlined" onChange={this.handleInputChange.bind(this)}/>
          </Grid>
          <Grid container direction='row' justify='center'>
          <TextField helperText='Required' fullWidth label="Login" name='email' margin="normal" variant="outlined" onChange={this.handleInputChange.bind(this)}/>
          </Grid>
          <Grid container direction='row' justify='center'>
          <TextField type='password' helperText='Required' fullWidth label="Password" name='password' margin="normal" variant="outlined" onChange={this.handleInputChange.bind(this)}/>
          </Grid>
          <Grid container direction='row' justify='center'>
          <TextField type='password' helperText='Required' fullWidth label="Password" name='password_verif' margin="normal" variant="outlined" onChange={this.handleInputChange.bind(this)}/>
          </Grid>
          <Grid>
              {
                this.state.error === true
                  ? (<p style={{color: 'red'}}>Une erreur est survenu, veuillez réessayer</p>)
                  : (null)
              }
          </Grid>
          <Grid container direction='row' justify='center'>
            <Button onClick={() => this.submit('register')}>Let's go !</Button>
          </Grid>
          <Grid container direction='row' justify='center'>
            <h6>Ou</h6>
          </Grid>
          <Grid container direction='row' justify='center'>
            <Button onClick={() => this.setState({register: false, error: false})}>Sign in !</Button>
          </Grid>
        </Container>
      </div>
    )
  }

  panelUser(){
    const {name, email, isAdmin} = this.props.user;

    return(
      <>
        <Container>
          <Grid container direction='row' justify='center'>
          <Avatar style={{width: 60, height: 60}}>img</Avatar>
          </Grid>
        </Container>
        <Container style={{marginTop: 10}}>
        <Grid container direction='row' justify='center'>
          <h5>{name}</h5>
          </Grid>
          <Grid container direction='row' justify='center'>
          <p>{email}</p>
        </Grid>
        </Container>
        <Divider/>
        <Container>
          <List>
            <ListItem button>
              <Link to={'/my_account'}><ListItemText><h6>My account</h6></ListItemText></Link>
            </ListItem>
            <ListItem button component={Link} to="/cart">
              <ListItemText><h6>My cart</h6></ListItemText>
            </ListItem>
            {
              isAdmin
                ? (
                  <ListItem button component={Link} to="/panel">
                    <ListItemText><h6>Admin panel</h6></ListItemText>
                  </ListItem>
                  )
                : (null)
            }
            <ListItem button>
              <ListItemText onClick={() => this.logout()}><h6>Logout</h6></ListItemText>
            </ListItem>
          </List>
        </Container>
      </>
    );
  }

  display(){
    const { isLogin } = this.props.user;

    if (isLogin) {
      return this.panelUser();
    }else {
      if (this.state.register === true) {
        return this.register();
      }else {
        return this.login();
      }
    }
  }

  async componentDidMount(){
    const user = await AuthService.getUser(localStorage.getItem('eToken'));
    if (user.user) {
      this.connect(user.user);
    }
  }

  render(){
    return(
      <>
        {this.display()}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPanelDropdown);