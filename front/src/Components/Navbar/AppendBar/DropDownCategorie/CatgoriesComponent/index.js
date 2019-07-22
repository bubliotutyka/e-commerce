import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { css }  from 'emotion';
import { Link } from "react-router-dom";
import * as S from './style';

export default class Categories_component extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allData: this.props.allData,
      classe_choice_id: 3
    }
  }

  displayClassesList(){
    if (this.state.allData.length >= 1) {
      return(
        <List>
        {
          this.state.allData.map((item) =>
            <ListItem id={item.id} button onMouseOver={() => this.setState({classe_choice_id: item.id})}>
              {item.name}
            </ListItem>
          )
        }
        </List>
      );
    }
  }

  displayCatList(id){
    var catList = [];
    if (this.state.allData.length >= 1) {
      for (var i = 0; i < this.state.allData.length; i++) {
        if (this.state.allData[i].id === id) {
          catList = this.state.allData[i].children;
          break;
        }
      }
      return (
        <div>
          <Grid container spacing={3}>
          {
          catList.map((item) =>
            <Grid item xs={6} >
              <CardCat classes={id} subCat={item.children} name={item.name}/>
            </Grid>
          )
          }
        </Grid>
      </div>
      );
    }
  }

  render(){
    return(
      <div className={css(S.categorieComp)}>
        <Grid container direction="row" justify="space-between">
          <div>
            {this.displayClassesList()}
          </div>
          <div className={css(S.subListDiv)}>
            {this.displayCatList(this.state.classe_choice_id)}
          </div>
        </Grid>
      </div>
    );
  }
}

 function CardCat(props){
   console.log(props.subCat);
  return(
    <div>
        <Grid container direction="row" justify="center">
          <h4>{props.name}</h4>
        </Grid>
        <div className={css(S.cardList)}>
          <Grid container direction="column" justify="center">
            {
              props.subCat.map((item) =>
              <Grid container direction="row" justify="center">
                <Link className={css(S.ccscLink)} to={'/c/'+props.classes+'/'+item.categorie_id+'/'+item.id}><h6>{item.name}</h6></Link>
              </Grid>
              )
            }
          </Grid>
        </div>
      </div>
  );
}
