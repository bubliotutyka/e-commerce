import styled from '@emotion/styled';
import Color from '../../../Color';

export const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: .5em 2em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${Color.lightGrey};
`;

export const Title = styled.p`
  margin: 0;
  font-size: 1.2em;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
`;