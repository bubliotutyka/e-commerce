import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Color from '../../../../../Color';

export const buttonBox = css`
  margin: 2vh;
`;

export const stockButton = css`
  background-color: ${Color.madForMango} !important;
  border-radius: 0px !important;
  border: solid 1px ${Color.lightGrey} !important;
  box-shadow: ${Color.shadow} !important;
  padding: .35em .55em !important;
  text-transform: none !important;
  margin-left: 1em !important;

  &:hover {
    cursor: pointer !important;
    background-color: ${Color.madForMangoHover} !important;
    box-shadow: ${Color.hoverShadow} !important;
  }
`;

export const saveButton = css`
  background-color: ${Color.madForMango} !important;
  border-radius: 0px !important;
  border: solid 1px ${Color.lightGrey} !important;
  box-shadow: ${Color.shadow} !important;
  padding: .35em .55em !important;
  text-transform: none !important;
  margin-top: 1em !important;

  &:hover {
    cursor: pointer !important;
    background-color: ${Color.madForMangoHover} !important;
    box-shadow: ${Color.hoverShadow} !important;
  }
`;

export const modalStyle = css`
  position: absolute !important;
  width: 400px !important;
  height: 200px !important;
  background-color: ${Color.white} !important;
  box-shadow: -1px -1px 5px 1px rgba(0,0,0,.2), 1px 1px 5px 1px rgba(0,0,0,.2) !important;
  padding: 2em !important;
  outline: none !important;
  top: 100px !important;
  left: calc(50vw - 200px) !important;
`;

export const formControl = css`
  width: 130px !important;
  margin-right: 2em !important;
`;

export const ModalTitle = styled.h5`
  margin: 0;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5em 0 .5em 0 !important;
`;