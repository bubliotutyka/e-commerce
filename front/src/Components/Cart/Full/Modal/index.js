import React from 'react';
import {css} from 'emotion';
import * as S from "./style";
import Button from '../../../DefaultComponent/Button';
import * as A from '../../../../Redux/Action/UserAction';
import LoginRegisterService from '../../../../Service/LoginRegisterService';
import AuthService from '../../../../Service/AuthService';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => ({
  userConnect: payload => dispatch(A.userConnect(payload)),
  userLogout: payload => dispatch(A.userLogout(payload)),
});

class Modal extends React.Component {
  state = {
    error: false,
    login: false,
    email: '',
    password: '',
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  aksForSignIn = () => {
    const {close} = this.props;

    return (
      <S.ModalContent>
        <S.ModalContentTitle>Would you sign in before continue ?</S.ModalContentTitle>
        <S.ModalButtons>
          <Button 
            buttonStyle={css(S.ButtonStyleYes)}
            text="Yes"
            onClick={() => this.setState({login: true})}
          />
          <Button 
            buttonStyle={css(S.ButtonStyleNo)}
            text="No"
            onClick={close}
          />
        </S.ModalButtons>
      </S.ModalContent>
    )
  };

  signInForm = () => {
    return (
      <S.ModalContent>
        <S.ModalContentTitle>Sign In</S.ModalContentTitle>
        <S.FormControl>

          <S.InputContainer>
            <S.InputLabel id="email">Email:</S.InputLabel>
            <S.InputText name="email" id="email" type="email" onChange={this.handleChange} placeholder="email"/>
          </S.InputContainer>

          <S.InputContainer>
            <S.InputLabel id="password">Password:</S.InputLabel>
            <S.InputText name="password" id="password" type="password" onChange={this.handleChange} placeholder="password"/>
          </S.InputContainer>

        </S.FormControl>
        <S.ModalButtons>
          <Button 
            text="Sign In"
            onClick={this.signIn}
            icon={<i className="fas fa-sign-in-alt"></i>}
            left
          />
        </S.ModalButtons>
      </S.ModalContent>
    )
  };

  signIn = async () => {
    const {userConnect} = this.props;
    const {email, password} = this.state;
    

    if (email && password) {
      const res = await LoginRegisterService.login({
        email,
        password,
      });
      if (typeof res.data === 'undefined') {
        await this.setState({error: true});
      }else {
        localStorage.setItem('eToken', res.data.success.token);
        const user = await AuthService.getUser(res.data.success.token);
        userConnect(user.user);
      }
    }
  };

  returnErrorMsg = () => {
    return (
      (<p style={{color: 'red'}}>Une erreur est survenu, veuillez vous re-connecter</p>)
    )
  }

  render() {
    const {close} = this.props;
    const {login, error} = this.state;
    const {isLogin} = this.props.user;

    if (isLogin) {
      close();
    }

    return (
      <S.ModalContainer>
        <S.Modal>

          <S.ModalHeader>
            <S.ModalHeaderTitle>Login</S.ModalHeaderTitle>
            <S.ModalClose className="far fa-times-circle" onClick={close}/>
          </S.ModalHeader>
          {error && this.returnErrorMsg}
          {
            login
              ? this.signInForm()
              : this.aksForSignIn()
          }
        </S.Modal>
      </S.ModalContainer>
    );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);