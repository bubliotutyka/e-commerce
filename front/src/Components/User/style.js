import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Color from '../Color';

export const Container = styled.div`
  padding-bottom: 2em;
  background-color: ${Color.white};
`;

export const principal_grid = css`
  display: flex;
  justify-content: flex-start;
  height: 45em;
`;

export const itemMenuList = css`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const menuList = css`
  border-right: 1px solid #8fd6a0;
`;

export const panelView = css`
  width: 85em;
  padding: 30px;
`;

export const Tab = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
