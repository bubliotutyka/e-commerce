import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Color from '../Color';

export const header = css`
  flex-grow: 1;
  position: fixed;
  box-shadow: -1px 1px 5px 1px rgba(0,0,0,.2);
  background-color: ${Color.white} !important;

  @media (max-width: 768px) {
    height: 187px;
  }
`;

export const toolbar = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

export const LogoContainer = styled.a`
  flex-grow: 1;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 82px;
  height: 50px;
`;

export const Link = styled.a`
  text-align: right;
  margin: 0;
  width: 100%;

  span {
    margin: 0;
    font-weight: 500;
    font-size: 1.1em;
    color: ${Color.ecoGreen};

    &:last-child {
      color: ${Color.ecoBrown};
    }
  }

  &:hover {
    span {
      color: ${Color.ecoGreenHover};

      &:last-child {
        color: ${Color.ecoBrownHover};
      }
    }
  }
`;

export const SearchBarContainer = styled.div`
  flex-grow: 10;
  height: 32px;
  width: 348px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    order: 3;
  }
`;

export const InputSelect = styled.select`
  height: 100%;
  margin: 0;
  color: ${Color.ecoGreen};
  background-color: transparent;
  border: 2px solid ${Color.ecoBrown};
  font-weight: 500;
  padding-left: 16px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  &:hover {
    color: ${Color.ecoGreenHover};
    cursor: pointer;
    border-bottom-left-radius: 0;
  }
`;

export const InputOption = styled.option`
  &:hover {
    cursor: pointer;
  }
`;

export const InputText = styled.input`
  height: 100%;
  padding: 0 .5em;
  margin: 0;
  border: none;
  border: 2px solid ${Color.ecoBrown};
  border-left: none;
  border-right: none;
  border-radius: 0;
  font-weight: 400;
  color: ${Color.ecoGreenHover};

  &:hover {
    cursor: text;
  }

  &::placeholder {
    font-size: .9em;
    font-weight: 400;
    color: ${Color.ecoBrown};
  }
`;

export const InputSearch = styled.i`
  height: 100%;
  padding: 7px 16px 0 8px;
  font-size: 1em;
  border: 2px solid ${Color.ecoBrown};
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  color: ${Color.ecoGreen};

  &:hover {
    cursor: pointer;
    color: ${Color.ecoGreenHover};
  }
`;

export const DropdownContainer = styled.div`
  width: 200px;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;