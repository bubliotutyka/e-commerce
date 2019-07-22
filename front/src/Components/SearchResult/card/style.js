import { css } from '@emotion/core';
import Color from '../../Color';

export const cardStyle = css`
  position: relative;
  width: 250px;
  height: 350px;
  border-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin: 1.5vh;
  box-shadow: -1px -1px 5px 1px rgba(0,0,0,.05), 1px 1px 5px 1px rgba(0,0,0,.05);
  width: 100%;
  display: flex;
  height: 13em;
  border: 1px solid ${Color.ecoBrown} !important;

  &:hover {
    cursor: pointer;
    transform: scale(1.005);
    box-shadow: -1px -1px 5px 1px rgba(0,0,0,.1), 1px 1px 5px 1px rgba(0,0,0,.1);
    border: 2px solid ${Color.ecoBrown} !important;

  }
`;

export const media = css`
  height: 0;
  padding-top: 56.25%; /* 16:9 */
  width: 30%;
`;

export const addToCard = css`
  position: absolute;
  bottom: 0;
  border-radius: 30px;
`;

export const card = css`
  border-radius: 30px !important;
  background-color: ${Color.ecoBrown} !important;
`;

export const descript = css`
  max-height: 55px;
  overflow: hidden;
`;

export const content = css`
  width: 70%;
`;

export const priceColor = css`
  color: ${Color.ecoBrown} !important;
  font-size: 1.1em !important;
  margin-top: 0.5em !important;
  margin-bottom: 0.5em !important;
`;