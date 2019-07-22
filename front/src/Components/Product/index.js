import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/Action/CartAction';
import ProductsService from '../../Service/ProductService';
import ReviewService from '../../Service/ReviewService';
import Color from '../Color';
import * as S from './style';

import Button from '../DefaultComponent/Button';
import Breadcrumbs from '../DefaultComponent/Breadcrumbs';
import EcoLabel from './EcoLabel';
import Tabs from './Tabs';
import TabsItem from './Tabs/Item';
import Specs from './Specs';
import Review from './Reviews';

const mapStateToProps = state => {
  return { products: state.cart };
}

const mapDispatchToProps = dispatch => ({
  addToCart: payload => dispatch(addToCart(payload)),
});

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputQuantity: 1,
      tabsToShow: 1,
      id: null,
      reviews: [],
      averageRating: 0,
    };
  }

  componentDidMount = async () => {
    const { id } = this.props.match.params;
    const product = await ProductsService.getById(id);
    const reviews = await ReviewService.getAllByProductId(id);
    let totalRating = 0;
    ProductsService.visited(id);
    
    for (let i = 0; i < reviews.length; i++) {
      totalRating += reviews[i].rate;
    }
    
    if (typeof product === 'object') {
      const classe = product.parent.parent.parent;
      const categorie = product.parent.parent;
      const subCategorie = product.parent;

      this.setState({ 
        ...product,
        reviews,
        averageRating: totalRating / reviews.length || 0,
        photos: JSON.parse(product.photos),
        classe: {
          id: classe.id,
          name: classe.name,
          url: `/c/${classe.id}`
        },
        categorie: {
          id: categorie.id,
          name: categorie.name,
          url: `/c/${classe.id}/${categorie.id}`
        },
        subCategorie: {
          id: subCategorie.id,
          name: subCategorie.name,
          url: `/c/${classe.id}/${categorie.id}/${subCategorie.id}`
        }
      });
    }
  }

  handleAddToCart = () => {
    const { addToCart } = this.props;
    const { id, name, price, photos } = this.state;
    addToCart({ id, name,price, image: photos[0] });
  }

  quantityChange = e => {
    const { quantity } = this.state;
    let inputQuantity = parseInt(e.target.value);

    if (inputQuantity > quantity)
      inputQuantity = quantity;

    if (inputQuantity > 25)
      inputQuantity = 25;
      
    this.setState({ inputQuantity });
  }

  createOptions = (quantity = 0) => {
    const options = [];
    for (let i = 0; i < quantity; i++) {
      options.push(<option key={i} value={i + 1}>{i + 1}</option>);
    }
    return options;
  }

  tabsSwicth = (tabsToShow) => {
    this.setState({ tabsToShow });
  }

  getReviewStars = () => {
    const {averageRating} = this.state;
    console.log(averageRating)
    const stars = [];
    let half = [0.5, 1];

    if (averageRating >= 4.5)
      half = [4.5, 5];
    else if (averageRating >= 3.5)
      half = [3.5, 4];
    else if (averageRating >= 2.5)
      half = [2.5, 3];
    else if (averageRating >= 1.5)
      half = [1.5, 2];

    for (let i = 0; i < averageRating; i++) {
      if (Math.floor(averageRating) > i)
        stars.push(<i className="fas fa-star"></i>);
    }

    if (averageRating >= half[0] && averageRating < half[1])
      stars.push(<i className="fas fa-star-half-alt"></i>);

    while (stars.length < 5) {
      stars.push(<i className="far fa-star"></i>);
    }

    return stars;
  }

  render() {
    const { id, name, photos, price, quantity, description, categorie, classe, 
      subCategorie, inputQuantity, tabsToShow, specs, averageRating, reviews } = this.state;
    const links = classe && categorie && subCategorie ? [classe, categorie, subCategorie, { id, name, url:`/product/${id}` }] : [];
    const options = this.createOptions(quantity > 25 ? 25 : quantity);
    const images = photos || [];

    return(
      <Container maxWidth="lg">
        <Breadcrumbs links={links}/>
          <Grid container>
            <S.ContainerProduct>

              <Grid container spacing={2}>
                <Grid  item xs={12} md={6}>
                  <S.CarouselContainer>
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                      <ol className="carousel-indicators">
                        {
                          images.map((img, key) => <li key={key} data-target="#carouselExampleIndicators" data-slide-to={key}></li>)
                        }
                      </ol>
                      <div className="carousel-inner">
                        {
                          images.map((img, key) => {
                            if (key === 0) {
                              return (
                                <div key={key} className="carousel-item active" data-interval="999999999">
                                  <img src={img} className="d-block w-100" alt={name} />
                                </div>
                              )
                            } else {
                              return (
                                <div key={key} className="carousel-item" data-interval="999999999">
                                  <img src={img} className="d-block w-100" alt={name} />
                                </div>
                              )
                            }
                        })
                        }
                      </div>
                      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                  </S.CarouselContainer>
                </Grid>

                <Grid  item xs={12} md={6}>
                  <S.ProductInfoContainer>
                    <S.ProductName>{name}</S.ProductName>
                    <S.ReviewContainer>
                      <S.ReviewStars>
                        {
                          this.getReviewStars().map((star) => star)
                        }
                      </S.ReviewStars>
                      <S.ReviewText>{averageRating}/5 ({reviews.length} reviews)</S.ReviewText>
                    </S.ReviewContainer>
                    <S.ProductPrice>$ {price}</S.ProductPrice>
                    <S.EcoContainer>
                      <S.EcoStars>
                        <i className="fas fa-leaf"></i>
                        <i className="fas fa-leaf"></i>
                        <i className="fas fa-leaf"></i>
                        <i className="fas fa-leaf"></i>
                        <i className="fas fa-leaf not"></i>
                      </S.EcoStars>
                      <S.EcoText>Eco: 4/5</S.EcoText>
                    </S.EcoContainer>
                    <EcoLabel />
                    <S.QuantityContainer>
                      {
                        quantity > 1 
                          ? (<S.InStock>In stock: {quantity} products</S.InStock>)
                          : quantity === 0 
                            ? (<S.InStock>Not available</S.InStock>)
                            : (<S.InStock>In stock: {quantity} product</S.InStock>)
                      }
                      <S.QuantityInputContainer>
                        <S.QuantityInputText>Qty:</S.QuantityInputText>
                        <S.QuantityInput value={inputQuantity} onChange={this.quantityChange}>
                          {
                            options.map((Option, key) => Option)
                          }
                        </S.QuantityInput>
                      </S.QuantityInputContainer>
                    </S.QuantityContainer>
                    <S.AddToCart>
                      <Button 
                        text="Add to Cart"
                        icon={<i className="fas fa-cart-plus"></i>}
                        onClick={this.handleAddToCart}
                        left
                        color={Color.lightBlue}
                      />
                    </S.AddToCart>
                  </S.ProductInfoContainer>

                </Grid>
              </Grid>

              <Grid container>
                <S.TabsContainer>
                  <Tabs onChange={this.tabsSwicth} defaultTab={tabsToShow}>
                    {
                      tabsToShow === 1
                        ? (<TabsItem active label="Description" onClick={() => this.tabsSwicth(1)}/>)
                        : (<TabsItem label="Description" onClick={() => this.tabsSwicth(1)}/>)
                    }
                    {
                      tabsToShow === 2
                        ? (<TabsItem active label="Details" onClick={() => this.tabsSwicth(2)}/>)
                        : (<TabsItem label="Details" onClick={() => this.tabsSwicth(2)}/>)
                    }
                    {
                      tabsToShow === 3
                        ? (<TabsItem active label="Reviews" onClick={() => this.tabsSwicth(3)}/>)
                        : (<TabsItem label="Reviews" onClick={() => this.tabsSwicth(3)}/>)
                    }
                  </Tabs>
                  <S.TabView>
                    { tabsToShow === 1 && <S.Description>{description}</S.Description> }
                    { tabsToShow === 2 && <Specs specs={specs}/> }
                    { tabsToShow === 3 && <Review productId={id} openModal={this.openModal}/> }
                  </S.TabView>
                </S.TabsContainer>
              </Grid>

            </S.ContainerProduct>
            
          </Grid>

      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);