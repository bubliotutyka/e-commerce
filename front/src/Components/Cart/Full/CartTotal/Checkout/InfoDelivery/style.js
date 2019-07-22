import {css} from '@emotion/core';
import Color from '../../../../../Color';

export const Active = css`
  border: 3px solid ${Color.ecoGreen};

  &:hover {
    border-color: ${Color.ecoGreenHover};
  }

  &.active {
    border-color: ${Color.ecoBrownHover};
  }
`;