import styled from '@emotion/styled';
import Color from '../../../Color';
import {css} from '@emotion/core';

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999;
  width: 100%;
  height: 100%;
  background-color: ${Color.darkGrey}77;
`;

export const Modal = styled.div`
  background-color: ${Color.white};
  box-shadow: ${Color.hoverShadow};
  border: 1px solid ${Color.grey};
  width: 40%;
  min-height: 150px;
  margin: 0 auto;
  margin-top: 10em;

  @media (max-width: 1280px) {
    width: 55%;
  }

  @media (max-width: 992px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin-top: 4em;
  }
`;

export const ModalHeader = styled.div`
  padding: 1em 2em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid ${Color.lightGrey};
`;

export const ModalHeaderTitle = styled.h3`
  flex-grow: 9;
  margin: 0;
`;

export const ModalClose = styled.i`
  flex-grow: 1;
  font-size: 1.7em;
  user-select: none;
  text-align: right;

  &:hover {
    cursor: pointer;
    color: ${Color.darkRed};
  }
`;

export const ModalContent = styled.div`
  padding: 2em 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalContentTitle = styled.h4`

`;

export const ModalButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 1.5em;
`;

export const ButtonStyleYes = css`
  margin-right: 1em !important;
`;

export const ButtonStyleNo = css`
  margin-left: 1em !important;
  background-color: ${Color.red} !important;
  border-color: ${Color.red} !important;

  &:hover {
    background-color: ${Color.darkRed} !important;
  }
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  width: 50%;

  @media (max-width: 1280px) {
    width: 50%;
  }

  @media (max-width: 992px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 70%;
  }
`;

export const InputLabel = styled.label`
  margin: 0;
`;

export const InputText = styled.input`
  margin: 0;
  width: 100%;
  padding: 0 .2em;
  border: none;
  border-bottom: 1px solid ${Color.grey};

  &:hover {
    border-bottom: 2px solid ${Color.ecoGreenHover};
  }

  &:focus {
    border-bottom: 2px solid ${Color.ecoGreenHover};
  }
`;