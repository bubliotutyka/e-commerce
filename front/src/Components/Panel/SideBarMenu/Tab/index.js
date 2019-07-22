import React from 'react';
import * as S from './style';

export default class Tab extends React.Component {
  render() {
    const { label, icon, onClick, className } = this.props;

    return (
      <S.Container id="menu-container" onClick={onClick} className={className}>
        <S.IconLeft id="menu-icon" className={icon.props.class}/>
        <S.Label id="menu-label">{label}</S.Label>
        <S.IconRight id="menu-icon" className="fas fa-chevron-right"/>
        <S.IconDown id="menu-icon" className="fas fa-chevron-down"/>
      </S.Container>
    )
  }
}