import React from 'react';
import * as S from './style';

export default class Btn extends React.Component {
  render() {
    const { text, link, to, left, right, icon, buttonStyle } = this.props;

    if (link) {
      return (
        <S.Link href={to} className={buttonStyle}>
          {
            left 
              ? (<S.TextLeft>{icon}{text}</S.TextLeft>) 
              : right 
                ? (<S.TextRight>{text}{icon}</S.TextRight>)
                : (text)
          }
        </S.Link>
      );
    } else {
      return (
        <S.Button onClick={this.props.onClick} className={buttonStyle}>
          {
            left 
              ? (<S.TextLeft>{icon}{text}</S.TextLeft>) 
              : right 
                ? (<S.TextRight>{text}{icon}</S.TextRight>)
                : (text)
          }
        </S.Button>
      );
    }
  }
}