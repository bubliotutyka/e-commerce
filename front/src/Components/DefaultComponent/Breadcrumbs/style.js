import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Color from '../../Color';

export const homeIcon = css`
  display: flex;
  align-items: center;
  margin-right: .3em;
  color: ${Color.white};
`;

const borderRadius = '.7em';

const defaultLink = css`
  display: flex;
  color: ${Color.white};
  background-color: ${Color.ecoGreen};
  padding: .4em 1em .4em 0;
  font-weight: 400;
  font-size: 1em;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: ${Color.white};
  }

  &:visited {
    color: ${Color.white};
  }
`;

export const BreackContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  border-radius: .7em;
`;

export const Container = styled.div`
  margin: 0;
  margin-bottom: 2em;

  @media (max-width: 768px) {
    visibility: hidden;
    position: absolute;
  }
`;

export const BreadLinkHome = styled.a`
  ${defaultLink}
  padding-left: 1em;
  border-top-left-radius: ${borderRadius};
  border-bottom-left-radius: ${borderRadius};  
  /* box-shadow: -5px -5px 5px 1px rgba(0,0,0,.05),
              -5px 5px 5px 1px rgba(0,0,0,.05),
              3px 5px 5px 1px rgba(0,0,0,.05),
              3px -5px 5px 1px rgba(0,0,0,.05); */

  i.fas {
    margin-bottom: 4px;
  }
`;

export const BreadLink = styled.a`
  ${defaultLink}
  /* box-shadow: 5px -5px 5px 1px rgba(0,0,0,.1),
              5px 5px 5px 1px rgba(0,0,0,.1); */

  &:last-child {
    border-top-right-radius: ${borderRadius};
    border-bottom-right-radius: ${borderRadius};
    padding-right: 5em;

    i {
      visibility: hidden;
    }
  }
`;

export const Arrow = styled.i`
  width: 25px;
  height: 25px;
  transform: rotate(45deg);
  background-color: transparent;
  border-top: 1px rgba(0,0,0,.15) solid;
  border-right: 1px rgba(0,0,0,.15) solid;
  box-shadow: 5px -5px 10px rgba(0,0,0,.1);
`;