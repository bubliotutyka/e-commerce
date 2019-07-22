import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Color from '../../Color';

const defaultButton = css`
  margin: 0;
  padding: .375em .7em;
  background-color: ${Color.ecoGreen};
  font-weight: 400;
  border-radius: 3px;
  border: 1px solid ${Color.lightGreen};
  box-shadow: ${Color.shadow};
  color: ${Color.white};
  transition-duration: 200ms;
  font-size: 1em;
  display: block;
  text-align: center;

  &:hover {
    background-color: ${Color.ecoGreenHover};
    box-shadow: ${Color.hoverShadow};
  }

  &:focus {
    outline: none;
  }

  i {
    color: ${Color.white};
  }
`;

export const Button = styled.button`
  ${defaultButton}
`;

export const Link = styled.a`
  ${defaultButton}
  color: ${Color.white};

  &:hover {
    color: ${Color.white};
  }
`;

export const baseTextIcon = css`
  margin: 0;
  color: ${Color.white};
  font-size: 1em;
`;

export const TextLeft = styled.span`
  ${baseTextIcon}

  i {
    margin-right: .5em;
  }
`;

export const TextRight = styled.span`
  ${baseTextIcon}

  i {
    margin-left: .5em;
  }
`;