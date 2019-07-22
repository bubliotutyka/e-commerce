import { css } from '@emotion/core';
import Color from '../../../Color';

export const buttonBox = css`
  margin: 2vh;
`;
  
export const addButton = css`
  background-color: ${Color.madForMango} !important;
  border-radius: 0px !important;
  border: solid 1px ${Color.lightGrey} !important;
  box-shadow: ${Color.shadow} !important;
  padding: .35em .55em !important;
  margin-top: .9em !important;
  margin-right: 2em !important;
  text-transform: none !important;

  &:hover {
    cursor: pointer !important;
    background-color: ${Color.madForMangoHover} !important;
    box-shadow: ${Color.hoverShadow} !important;
  }
`;
