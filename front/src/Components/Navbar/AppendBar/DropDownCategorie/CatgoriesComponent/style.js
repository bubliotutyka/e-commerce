import { css } from '@emotion/core';
import Color from '../../../../Color';

export const categorieComp = css`
  border-radius: 10%;
  background-color: 'red';
`;
  
export const cardList = css`
  border-right: 1px solid #8fd6a0;
  border-top: 1px solid #8fd6a0;
  padding-top: 20px;
`;
  
export const subListDiv = css`
  border: 2px solid #8fd6a0;
  padding: 30px;
  max-width: 54em;
  min-width: 18em;
`;

export const ccscLink = css`
  transition-duration: 200ms;

  &:hover {
    color: ${Color.ecoGreen};
    text-decoration: underline;
  }
`;
