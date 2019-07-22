import { css } from '@emotion/core';
import Color from '../../../../../Color';

export const buttonBox = css`
  margin: 2vh;
`;
  
export const deleteButton = css`
  background-color: ${Color.lightRed} !important;
  border-radius: 0px !important;
  border: solid 1px ${Color.lightGrey} !important;
  box-shadow: ${Color.shadow} !important;
  padding: .35em .55em !important;
  text-transform: none !important;
  margin-right: 1em !important;

  &:hover {
    cursor: pointer !important;
    background-color: ${Color.red} !important;
    box-shadow: ${Color.hoverShadow} !important;
  }
`;