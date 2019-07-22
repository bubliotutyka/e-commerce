import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Color from '../Color';

export const container = css`
  width: 100%;
`;

export const footer = css`
  background-color: white !important;
  height: 12em;
  color: grey !important;
`;

export const typoFooter = css`
  font-size: .9em;
  position: absolute;
  bottom: 0;
  margin-bottom: .5em;
`;

export const typoFooter2 = css`
  font-size: 1.2em;
  margin-right: 1.5em;
`;

export const title3 = css`
  font-size: 1.3em;
`;

export const tool = css`
  height: 100%;
`;

export const about = css `
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const aboutdiv = css`
  margin-right: 7em;
`;

export const SNS =  styled.i`
    font-size: 2em;
    margin-right: 0.1em;
    color: ${Color.ecoGreen};
`;