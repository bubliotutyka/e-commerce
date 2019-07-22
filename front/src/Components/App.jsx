import React from 'react';

import { css }  from 'emotion';
import* as S from './style';

import './index.css';
import Routes from './Routes';
import Navbar from './Navbar';
import Footer from './Footer'


export default class App extends React.Component {

  render() {
    return (
      <div className={css(S.mainContainer)}>
        <Navbar />
        <S.SpaceTop />
        <Routes />
        <S.SpaceBottom />
        <div className={css(S.footer)}>
          <Footer/>
        </div>
      </div>
    );
  }
}