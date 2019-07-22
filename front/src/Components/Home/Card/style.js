import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Color from '../../Color';

export const Container = styled.div`
  width: 210px;
  height: 300px;
  margin: 1vh;
  border: 0;
  background-color: ${Color.white};
  box-shadow: ${Color.shadow};
  transition-duration: 200ms;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${Color.ecoBrown}55;
  position: relative;

  &:hover {
    cursor: pointer;
    box-shadow: ${Color.hoverShadow};
    transform: scale(1.005);
    border: 1px solid ${Color.ecoBrown}99;

    button {
      display: block;
    }
  }

  button {
    display: none;
  }
`;

export const Card = styled.a`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
`;

export const CardImageContainer = styled.div`
  width: 100%;
  height: 70%;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 210px;
`;

const baseText = css`
  text-align: center;
  margin: 0;
  margin-top: 1em;
  font-weight: 400;
`;

export const Name = styled.p`
  ${baseText}
`;

export const Price = styled.p`
  ${baseText}
  color: ${Color.ecoBrown};
`;

export const ButtonStyle = css`
  width: 55%;
  position: absolute;
  top: 30%;
  border-radius: 30px !important;
`;