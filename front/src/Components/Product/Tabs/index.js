import React from 'react';
import styled from '@emotion/styled';

const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default class Tabs extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <TabsContainer>
        {children}
      </TabsContainer>
    )
  }
}