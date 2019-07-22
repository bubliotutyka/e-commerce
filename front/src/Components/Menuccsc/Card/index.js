import React from 'react';
import * as S from './style';
import { css } from "emotion";
import Button from '../../DefaultComponent/Button';



export default class CustomCard extends React.Component {
  render() {
    // console.log(this.props.data);
    const {route} = this.props;
    const {name, image, id, marque} = this.props.data;
    let {photos} = this.props.data;
    let link = `${route}/${id}`;

    if (photos)
      photos = JSON.parse(photos)[0];

    if (marque)
      link = `/product/${id}`; 

    const Pic = image || photos || 'http://www.eldiariodecoahuila.com.mx/u/fotografias/fotosnoticias/2018/10/15/695930.jpg';

    return (
      <S.CardContainer>
        <S.CardContent>
          <S.Image src={Pic} alt=""/>
          <S.CardText>
            <div>{name}</div>
            {/* <div className={css(viewBtn)}> View </div> */}
            <Button 
              buttonStyle={css(S.viewBtn)}
              link
              text="View"
              to={link}
            />
          </S.CardText>
        </S.CardContent>
      </S.CardContainer>
    );
  }
}
