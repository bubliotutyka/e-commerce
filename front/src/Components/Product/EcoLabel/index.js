import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Color from '../../Color';
import LabelList from './label';


const centerMedia = css`
  @media (max-width: 768px) {
    text-align: center;
    justify-content: center;
  }
`;

const EcoLabelContainer = styled.div`
  ${centerMedia}
  padding-bottom: 1.2em;
  margin-bottom: 1.2em;
  border-bottom: 1px solid ${Color.lightGrey};
  display: flex;
  flex-wrap: wrap;
`;

const EcoLabel = styled.div`
  width: 75px;
  height: 75px;
  margin: .2em .4em;
  background-color: ${Color.white};
  border: 2px solid ${Color.ecoBrown};
  border-radius: 50%;
  box-shadow: ${Color.shadow};
  position: relative;

  &:hover {
    box-shadow: ${Color.hoverShadow};
    cursor: pointer;

    div {
      display: block;
    }
  }
`;

const LabelImage = styled.img`
  width: 71px;
  height: 71px;
  border-radius: 50%;
`;

const LabelTooltipContainer = styled.div`
  display: none;
  position: absolute;
  top: 70px;
  left: -15px;
  border: 1px solid ${Color.ecoGreenHover};
  padding: .2em .4em;
  border-radius: 3px;
  background-color: ${Color.white};
  min-width: 100px;
  box-shadow: ${Color.shadow};
`;

const LabelTooltipText = styled.p`
  margin: 0;
  text-align: center;
`;

const Tooltip = text => (
  <LabelTooltipContainer>
    <LabelTooltipText>{text}</LabelTooltipText>
  </LabelTooltipContainer>
);

const Label = label => (
  <EcoLabel>
    <LabelImage src={label.image}/>
    {Tooltip(label.tooltip)}
  </EcoLabel>
);

export default class Labels extends React.Component {
  render() {
    // const { data } = this.props;

    return (
      <EcoLabelContainer>
        {
          LabelList.map((label, key) => Label(label))
        }
      </EcoLabelContainer>
    );
  }
}