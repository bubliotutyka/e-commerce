import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import AppendBar from './AppendBar';
import { css }  from 'emotion';
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import DropDownUser from './DropDownUser';
import DropDownSnipCart from './DropDownSnipeCart';
import CategoryService from '../../Service/CategoryService.js';
import * as S from './style';

export default class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      categorie_list: [],
      categorie_id: null,
      search_value: '',
      input_search: '',
      result: undefined
    }
  }

  componentDidMount = async () => {
    var categories = await CategoryService.getAll();
    this.setState({ categorie_list: Array.isArray(categories) ? categories : [] });
  }

  handleChangeSelect = async (event) => {
    this.setState({categorie_id: event.target.value});
  }

  handleChangeSearchTextInput = e => {
    this.setState({ input_search: e.target.value });
  }

  handleSearch = async (event) => {
    const { input_search } = this.state;
    
    if(input_search) {
      console.log(event.target.value)
      if(this.state.categorie_id !== 'select a category' && this.state.categorie_id !== null){
        window.location.href = '/search/categorie/'+this.state.categorie_id+'/'+ input_search;
        // let result = await SearchService.searchByCategory({
        //   categorie_id: this.state.categorie_id,
        //   keyword: event.target.value
        // })
        // if(result.data.length > 0){
        //   this.setState({
        //     result: result,
        //   })
        // }
      } else {
        window.location.href = `/search/${input_search}`;
        // let result = await SearchService.search(event.target.value)
        // if(result.data.length > 0){
        //   this.setState({
        //     result: result,
        //   })
        // }
      }
    }
  }
  render() {
    const { input_search } = this.state;

    return (
      <AppBar className={css(S.header)} position="static" color="default">

        <Toolbar className={css(S.toolbar)}>
        
          <S.LogoContainer href="/">
            <S.Logo src="/eco_logo.png" alt="logo"/>
            <S.Link href="/about-us"><span>ABOUT</span><span>US</span></S.Link>
          </S.LogoContainer>

          <S.SearchBarContainer>
            <S.InputSelect onChange={this.handleChangeSelect}>
              <S.InputOption value="title">Title</S.InputOption>
              <S.InputOption value="description">Description</S.InputOption>
              <S.InputOption value="categorie">Categorie</S.InputOption>
            </S.InputSelect>
            <S.InputText 
              placeholder="Search..."
              type="text"
              onChange={this.handleChangeSearchTextInput}
              value={input_search}
            />
            <S.InputSearch className="fas fa-search" onClick={this.handleSearch}/>
          </S.SearchBarContainer>

          <S.DropdownContainer>
              <DropDownUser/>
              <DropDownSnipCart/>
          </S.DropdownContainer>

        </Toolbar>

        <Grid container direction="row" justify='center'>
          <AppendBar />
        </Grid>

      </AppBar>
    );
  }
}
