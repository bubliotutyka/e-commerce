import styled from '@emotion/styled';
import Color from '../../../Color';

export const Container = styled.div`
  width: 100%;
  padding: 2em 0;
  border: 1px solid ${Color.ecoBrown};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: ${Color.shadow};
  background-color: ${Color.white};
`;

export const Title = styled.h4`
  user-select: none;
`;

export const Price = styled.h3`
  margin: .7em 0;
  user-select: none;
`;

export const ColorNumber = styled.span`
  color: ${Color.ecoGreenHover};
`;

export const Quantity = styled.p`

`;