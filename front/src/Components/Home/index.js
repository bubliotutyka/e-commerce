import React from 'react';
import Card from './Card';
import CarouselPage from './Carousel';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { css } from 'emotion';
import * as S from './style';
import ProductService from '../../Service/ProductService';
import Labels from './EcoLabel';
import Partners from './partner';

export default class Home extends React.Component {
  state = {
    products: [],
  }

  componentDidMount = async () => {
    const products = await ProductService.getByPopularity();
    this.setState({ products: Array.isArray(products) ? products : [] });
  };

  partnerLink = (partner, key) => {
    return (
      <S.Link key={key} href={partner.link} target="_blanck">
        <S.Image src={partner.image}/>
      </S.Link>
    )
  };

  render() {
    const { products } = this.state;

    return(
      <>
        <React.Fragment>
          <CssBaseline />

          <S.ImageTitleContainer>
            <S.ImageTitle src="/title_Home.png"/>
          </S.ImageTitleContainer>

          <CarouselPage/>

          <Grid container justify="center">
            <Grid  item xs={12} md={8} xl={6}>
              <S.ValeurContainer>
                <S.CertificationContainer>
                  <S.Title>Nos labels</S.Title>
                  <Labels />
                </S.CertificationContainer>

                <S.PartnerContainer>
                  <S.Title>Nos partenaires</S.Title>
                  <S.Partener>
                    {
                      Partners.map((partner, key) => this.partnerLink(partner, key))
                    }
                  </S.Partener>
                </S.PartnerContainer>
              </S.ValeurContainer>
            </Grid>
          </Grid>

          <Container maxWidth='lg'  className={css(S.containerPopu)}>
            <h1 className={css(S.popTitle)}>
              Popular Items
            </h1>
          </Container>

          <Container maxWidth="lg" className={css(S.container)}>
            {
              products.map((product, key) => <Card key={key} product={product}/>)
            }
          </Container>
        </React.Fragment>
      </>
    );
  }
}