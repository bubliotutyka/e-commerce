import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Color from '../Color';

export const titleContainer = css`
  width: 300px !important;
  padding: 0 !important;
  border: 1px solid ${Color.ecoBrown};
  border-radius: 30px;
  border-bottom: none;
  text-align: center;
  display: block;
  margin-left: auto !important;
  margin-right: auto !important;
  background-color: ${Color.white};
`;

export const cardContainer = css`
  width: 100% !important;
  border: 1px solid ${Color.ecoBrown};
  padding-left: 0 !important;
  padding-right: 0 !important;
  display: flex;
  flex-wrap: wrap;
  background-color: ${Color.white};
  
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h2`
  width: 100%;
  margin: 0;
  padding: .5em 1em;
  font-size: 1.5em;
  font-weight: bold;
  font-style: Myriad Pro;
  color: ${Color.ecoGreen};
`;
