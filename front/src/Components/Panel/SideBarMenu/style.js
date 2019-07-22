import styled from '@emotion/styled';
import Color from '../../Color';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 9999;
  top: 150px;
  left: 0;

  @media (max-width: 768px) {
    top: 0;
    padding-top: 0;
    position: relative;
  }
`;

export const ShowButton = styled.i`
  color: ${Color.white};
  background-color: ${Color.ecoGreen};
  padding: 1em 1em;
  box-shadow: ${Color.hoverShadow};

  &.show {
    background-color: ${Color.ecoBrownHover};
  }

  &:hover {
    cursor: pointer;
    background-color: ${Color.ecoGreenHover};
  }
`;

export const TabsContainer = styled.div`
  box-shadow: ${Color.hoverShadow};
`;

export const ExelTab = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1em 2em;
  background-color: ${Color.white};

  i, a {
    user-select: none;
  }

  &:hover {
    cursor: pointer;

    i, a {
      color: ${Color.ecoBrownHover};
    }
  }
`;

export const Label = styled.a`
  margin: 0;
  margin-right: 1em;
  font-size: 1em;
  color: ${Color.darkGrey};
`;

export const IconLeft = styled.i`
  font-size: 1em;
  margin-right: 1em;
`;