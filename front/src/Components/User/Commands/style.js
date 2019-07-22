import styled from '@emotion/styled';
import Color from '../../Color';

export const Link = styled.a`
  margin: 0;
  color: ${Color.darkGrey};

  i {
    color: ${Color.ecoGreen};
    text-align: center;
    font-size: 2em;
  }

  &:hover {
    color: ${Color.ecoGreenHover};

    i {
      color: ${Color.ecoGreenHover};
    }
  }
`;