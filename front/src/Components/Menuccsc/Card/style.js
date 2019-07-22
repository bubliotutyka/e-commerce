import styled from '@emotion/styled';
import Color from '../../Color';
import {css} from "@emotion/core";

export const CardContainer = styled.div`
  width: 275px;
  height: 212px;
  border-radius: 0;
  margin: 1.5vh;
  border: 1px solid ${Color.ecoBrown};
  transition-duration: 200ms;

  &:hover {
    transform: scale(1.005);
    border-color: ${Color.ecoGreenHover};
    box-shadow: ${Color.shadow};
  }
`;

export const CardContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: ${Color.white};
`;

export const Image = styled.img`
  width: 40%;
  height: 100%;
`;

export const CardText = styled.div`
  margin: 0;
  padding: 0 2em;
  font-size: 1.1em;
  font-family: Myriad Pro;
  transition-duration: 200ms;
  text-align: center;

  &:hover {
    color: ${Color.green};
  }
`;

export const viewBtn = css`
  width: 7em !important;
  margin: 0 !important;
  margin-top: 1em !important;
  border: 1px solid ${Color.green} !important;
  border-radius: 30px !important;
  padding: .5em 1em !important;
`;