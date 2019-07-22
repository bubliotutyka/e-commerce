import React from 'react';
import {css} from 'emotion';
import * as S from './style';
import Button from '../../../DefaultComponent/Button';
import ReviewService from '../../../../Service/ReviewService';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.review,
    }
  }

  poceBlo = () => {
    const {id, poce_blo} = this.state;
    ReviewService.upDown(id, {value: 'yes'});
    this.setState({'poce_blo': poce_blo + 1,});
  }

  poceRoge = () => {
    const {id, poce_roge} = this.state;
    ReviewService.upDown(id, {value: 'no'});
    this.setState({'poce_roge': poce_roge + 1,});
  }

  render() {
    const {author, poce_blo, poce_roge, rate, comment} = this.state;

    return (
      <S.Container>
        <S.Header>
          <S.Username>{author.name} | </S.Username>
          <S.Mark>mark: {rate}/5</S.Mark>
        </S.Header>
        <S.Content>{comment}</S.Content>
        <S.ButtonBox>
          <Button
            onClick={this.poceBlo}
            icon={<i className="fas fa-thumbs-up"></i>}
            text={poce_blo}
            right
          />
          <Button
            buttonStyle={css(S.thumbsDown)}
            onClick={this.poceRoge}
            icon={<i className="fas fa-thumbs-down"></i>}
            text={poce_roge}
            right
          />
        </S.ButtonBox>
      </S.Container>
    )
  }
}