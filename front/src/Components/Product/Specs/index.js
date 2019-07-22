import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Color from '../../Color';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Spec = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:last-child {
    border-bottom: 1px solid ${Color.ecoBrown};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const baseText = css`
  margin: 0;
  text-align: center;
  width: 50%;
  border: 1px solid ${Color.ecoBrown};
  border-bottom: none;
`;

const SpecsName = styled.p`
  ${baseText}
`;

const SpecsInfo = styled.p`
  ${baseText}
  border-left: none;
`;

export default class Tabs extends React.Component {
  render() {
    const specs = this.props.specs || [];
    
    return (
      <Container>

        {
          specs.map((spec, key) => (
            <Spec key={key}>
              <SpecsName>{spec.name}</SpecsName>
              <SpecsInfo>{spec.specification}</SpecsInfo>
            </Spec>
          ))
        }
      </Container>
    )
  }
}