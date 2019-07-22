import { css } from '@emotion/core';
import Color from '../../../../../Color';

export const buttonBox = css`
  margin: 2vh;
`;

export const editButton = css`
  background-color: #01a538 !important;
  border-radius: 0px !important;
  border: solid 1px ${Color.lightGrey} !important;
  box-shadow: ${Color.shadow} !important;
  padding: .35em .55em !important;
  text-transform: none !important;

  &:hover {
    cursor: pointer !important;
    background-color: ${Color.darkGreen} !important;
    box-shadow: ${Color.hoverShadow} !important;
  }
`;