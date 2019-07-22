import { css } from '@emotion/core';

export const carouselInner = css `
  height: 450px !important;

  @media (max-width: 992px) {
    height: 350px !important;
  }

  @media (max-width: 768px) {
    height: 300px !important;
  }

  @media (max-width: 576px) {
    height: 200px !important;
  }
`;

export const containerInner = css `
  max-width: 100% !important;
`;

export const imageResize = css`
  display: flex;
  width: 100%;
  max-width: 100%;
  height: 450px;

  @media (max-width: 992px) {
    height: 350px;
  }


  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 576px) {
    height: 200px;
  }
`;