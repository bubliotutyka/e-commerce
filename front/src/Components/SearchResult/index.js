import React, {Component} from 'react';
import CustomCard from './card'
import Container from '@material-ui/core/Container';
import SearchService from '../../Service/SearchService'
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import SliderRange from './SliderRange';
import { css } from 'emotion';
import { filter, filterContent, filterTitle, filterPrice } from './style';



export default class SearchResult extends Component{
  state = {
    products: [],
    cat: [],
    subCat: [],
    brand: [],
    maxPrice: 2,
    filters: [],
  }

  handleChange = (filter, type, e) => {
    const FILTERS = [...this.state.filters];
    let inFilter = false;

    if (e.target.checked) {
      const filters = FILTERS.map((f) => {
        if(f.type === type) {
          inFilter = true;
          return {
            ...f,
            filters: [...f.filters, filter],
          };
        } else {
          return f;
        }
      });
      if (!inFilter)
        filters.push({
          type,
          filters: [filter],
        });

      this.setState({filters});
    }
    else {
      const filters = FILTERS.map((f) => {
        if(f.type === type) {
          inFilter = true;
          return {
            ...f,
            filters: f.filters.filter((i) => i !== filter),
          };
        } else {
          return f;
        }
      });

      this.setState({filters});
    }
  };

  handlePriceSlider = (min, max) => {
    const FILTERS = [...this.state.filters];
    let inFilter = false;

    const filters = FILTERS.map((f) => {
      if(f.type === 'price') {
        inFilter = true;
        return {
          ...f,
          filters: [min, max],
        };
      } else {
        return f;
      }
    });

    if (!inFilter)
      filters.push({
        type: 'price',
        filters: [min, max],
      });

    this.setState({filters});
  };

  componentDidMount = async () => {
    let params = this.props.match.params;
    let products;
    if(params.categorie){
      products = await SearchService.searchByCategory({
        categorie_id: params.categorie,
        keyword: params.keyword
      });
    } else {
      products = await SearchService.search(params.keyword)
    }
    let arrayCat = [];
    let arraySub = [];
    let arrayBrand = [];
    let maxPrice = 2;
    const PRODUCTS = products.data;

    for (let i = 0; i < PRODUCTS.length; i++)
    {
      if (!arrayCat.includes(PRODUCTS[i].categorie.name))
        arrayCat.push(PRODUCTS[i].categorie.name);

      if (!arraySub.includes(PRODUCTS[i].sub_categorie.name))
        arraySub.push(PRODUCTS[i].sub_categorie.name);

      if (!arrayBrand.includes(PRODUCTS[i].marque))
        arrayBrand.push(PRODUCTS[i].marque);

      if (maxPrice < PRODUCTS[i].price)
        maxPrice = PRODUCTS[i].price;
    }

    this.setState({
      products: PRODUCTS,
      cat: arrayCat,
      subCat: arraySub,
      brand: arrayBrand,
      maxPrice,
    })
  }

  getProducts = (products , loop = 0) => {
    const {filters} = this.state;
    const result = [];
    for (let p = 0; p < products.length; p++) {
      if (filters[loop] && filters[loop].filters.length > 0) {
        for (let f = 0; f < filters[loop].filters.length; f++) {
          if (filters[loop].type === 'sub_categorie' ||filters[loop].type === 'categorie') {
            if (products[p][filters[loop].type].name === filters[loop].filters[f]) {
              result.push(products[p]);
            }
          } else if (filters[loop].type === 'price' && f === 0) {
            if (products[p].price > filters[loop].filters[0] && products[p].price < filters[loop].filters[1]) {
              result.push(products[p]);
            }
          } else {
            if (products[p][filters[loop].type] === filters[loop].filters[f]) {
              result.push(products[p]);
            }
          }
        }
      } 
      else {
        result.push(products[p]);
      }
    }

    if (filters[loop + 1])
      return this.getProducts([...result], ++loop);
    else
      return result;
  };

  render(){
    const {maxPrice, cat, subCat, brand, products} = this.state;
    const result = this.getProducts(products) || [];

    return(
      <Container>
        <Grid  container item xs={12} spacing={3} justify='center'>
          <Grid item xs={4} className={css(filter)}>
            <div className={css(filterContent)}>
              <h3 className={css(filterTitle)}>FILTER BY PRICE </h3>
              <div className={css(filterPrice)}>
                <SliderRange max={maxPrice} filter={this.handlePriceSlider}/>
              </div>
            </div>
              <div className={css(filterContent)}>
                <h3 className={css(filterTitle)}>FILTER BY CATEGORY</h3>
                <div>
                  {cat.map(rescat => {
                    return (
                      <>
                        <div>
                          <Checkbox
                          value= {rescat}
                          onChange={(event) => this.handleChange(rescat, 'categorie', event)}
                          inputProps={{
                            'aria-label': 'uncontrolled-checkbox',
                          }}
                          />
                            {rescat}
                        </div>
                      <hr/>
                      </>
                    )
                  })}
              </div>
              </div>

              <div className={css(filterContent)}>
                <h3 className={css(filterTitle)}>FILTER BY SUB-CATEGORY</h3>
                <div>
                  {subCat.map(resSubcat => {
                    return (
                      <>
                        <div>
                          <Checkbox
                            value={resSubcat}
                            onChange={(event) => this.handleChange(resSubcat, 'sub_categorie',event)}
                            inputProps={{
                              'aria-label': 'uncontrolled-checkbox',
                            }}
                          />
                          {resSubcat}
                        </div>
                        <hr/>
                      </>
                    )
                  })}
                </div>
              </div>

              <div className={css(filterContent)}>
                <h3 className={css(filterTitle)}>FILTER BY BRAND</h3>
                <div>
                  {brand.map(resBrand => {
                    return (
                      <>
                        <div>
                          <Checkbox
                            value={resBrand}
                            onChange={(event) => this.handleChange(resBrand, 'marque',event)}
                            inputProps={{
                              'aria-label': 'uncontrolled-checkbox',
                            }}
                          />
                          {resBrand}
                        </div>
                        <hr/>
                      </>
                    )
                  })}
                </div>
              </div>

                {/*<div className={css(filterContent)}>*/}
                {/*    <h3 className={css(filterTitle)}>SPECIAL SPEC</h3>*/}
                {/*    <div>*/}
                {/*        <Checkbox*/}
                {/*            value="checkedC"*/}
                {/*            inputProps={{*/}
                {/*                'aria-label': 'uncontrolled-checkbox',*/}
                {/*            }}*/}
                {/*        /> MADE IN FRANCE*/}
                {/*    </div>*/}
                {/*    <hr/>*/}
                {/*    <div>*/}
                {/*        <Checkbox*/}
                {/*            value="checkedC"*/}
                {/*            inputProps={{*/}
                {/*                'aria-label': 'uncontrolled-checkbox',*/}
                {/*            }}*/}
                {/*        /> Green Power*/}
                {/*    </div>*/}
                {/*    <hr/>*/}
                {/*</div>*/}

          </Grid>
          <Grid  item xs={8}>
            {result.map((product, key) => <CustomCard key={key} item={product}/>)}
          </Grid>
        </Grid>
      </Container>
    )
  }
}