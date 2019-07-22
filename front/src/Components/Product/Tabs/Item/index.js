import React from 'react';
import styled from '@emotion/styled';
import Color from '../../../Color';

const Tab = styled.div`
  background-color: ${Color.ecoGreen};
  padding: .5em 1em;
  margin-right: .4em;
  font-weight: 400;
  color: ${Color.white};
  font-size: 1em;
  transition-duration: 200ms;

  &:hover {
    cursor: pointer;
    background-color: ${Color.ecoGreenHover};
  }

  &.active {
    background-color: ${Color.white};
    color: ${Color.ecoBrown};
    border-top: 3px solid ${Color.ecoBrown};
    padding-top: .31em;
  }
`;

export default class TabItem extends React.Component {
  render() {
    const { label, onClick, active } = this.props;

    if (active) {
      return (
        <Tab className="active" onClick={onClick}>{label}</Tab>
      )
    } else {
      return (
        <Tab onClick={onClick}>{label}</Tab>
      )
    }
  }
}