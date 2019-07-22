import React from 'react';
import { css } from 'emotion';
import * as S from './style';

export default (props) => {
  return (
    <S.Container>
      <S.BreackContainer>
        <S.BreadLinkHome href="/">
          <i className={`fas fa-home ${css(S.homeIcon)}`}></i>
          Home
          <S.Arrow />
        </S.BreadLinkHome>

        {
          props.links.map((link, key) => (
            <S.BreadLink key={key} href={link.url} >
              {
                link.name.length > 30
                  ? `${link.name.slice(0,30)}...`
                  : link.name
              }
              <S.Arrow />
            </S.BreadLink>
          ))
        }
      </S.BreackContainer>
    </S.Container>
  );
}

