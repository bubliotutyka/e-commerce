import React from 'react';
import { Container, Text, Image, Content } from './style';

export default class EmptyCard extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Image src="./sad_fox.png" alt="Empty cart"/>
          <Text>Oh No! Your cart is empty</Text>
        </Content>
      </Container>
    );
  }
}
