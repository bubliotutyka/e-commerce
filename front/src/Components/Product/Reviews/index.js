import React from 'react';
import * as S from './style';
import Button from '../../DefaultComponent/Button';
import ReviewItem from './Item';
import ReviewService from '../../../Service/ReviewService';

export default class Reviews extends React.Component {
  state = {
    reviews: [],
    newReview: false,
    rating: 0,
    comment: '',
  }

  handleChangeRating = (e) => {
    this.setState({rating: parseInt(e.target.value)});
  }

  handleChangeComment = (e) => {
    this.setState({comment: e.target.value});
  }

  newReview = () => {
    this.setState({newReview: true});
  }

  reviewForm = () => {
    const {rating, comment} = this.state;

    return (
      <S.FormControl>

          <S.InputContainer>
            <S.InputLabel id="Rating">Rating:</S.InputLabel>
            <S.InputText
              name="Rating"
              id="Rating"
              type="number"
              min="0"
              max="5"
              value={rating}
              onChange={this.handleChangeRating}
            />
          </S.InputContainer>

          <S.InputContainer>
            <S.InputLabel id="comment">Comment:</S.InputLabel>
            <S.InputTextArea
              name="comment"
              id="comment"
              onChange={this.handleChangeComment}
              value={comment}
              placeholder="Comment"
            />
          </S.InputContainer>

          <Button 
            onClick={this.submitReview}
            text="Submit"
          />

        </S.FormControl>
    )
  }

  submitReview = async () => {
    const {productId} = this.props;
    const {rating, comment, reviews} = this.state;

    if (comment && Number.isInteger(rating)) {
      const review = await ReviewService.create(productId, {
        comment,
        rating,
      });

      this.setState({
        review: [ review,...reviews],
        newReview: false,
        rating: 0,
        comment: '',
      });
    } 
  }

  componentDidMount = async () => {
    const {productId} = this.props;
    const reviews = await ReviewService.getAllByProductId(productId) || [];
    this.setState({reviews: reviews.reverse()});
  }

  render() {
    const {reviews, newReview} = this.state;

    return  (
      <S.Container>
        <Button
          onClick={this.newReview}
          text="New review"
          icon={<i className="far fa-plus-square"></i>}
          left
        />
        {newReview && this.reviewForm()}
        {
          reviews.map((review) => <ReviewItem key={review.id} review={review}/>)
        }
      </S.Container>
  )}
}