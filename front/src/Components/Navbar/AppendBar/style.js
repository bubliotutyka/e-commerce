import { css } from '@emotion/core';
import Color from '../../Color';

export const appendBar = css`
  z-index: 1;
  border: 1px solid #8fd6a0;
  width: 350px;
  position: absolute;
  border-radius: 50px;
  top: 60px;
  background-color: ${Color.white};
  box-shadow: -1px 1px 5px 1px rgba(0,0,0,.2);

  span {
    color: ${Color.white};
  }

  @media (max-width: 768px) {
    top: 170px;
  }
`;