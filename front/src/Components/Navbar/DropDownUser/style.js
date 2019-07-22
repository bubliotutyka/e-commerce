import styled from '@emotion/styled';
import Color from '../../Color';

export const Container = styled.div`
  margin: .5em 0;
  

  span, p {
    color: ${Color.darkGrey};
  }

  &:hover {
    button {
      background-color: transparent;
    }

    p {
    color: ${Color.ecoBrownHover};
    }
  }

  p {
    margin: 0;
  }
`;