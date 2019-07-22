import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { css } from 'emotion';
import * as S from './style';
import ProductService from '../../../../../../Service/ProductService';

export default class DeleteButton extends React.Component {
  deleteProduct = async () => {
    await ProductService.delete(this.props.productId);
  }

  render() {
    return(
      <Typography className={css(S.buttonBox)}>
          <Button className={css(S.deleteButton)} onClick={this.deleteProduct}>Delete</Button>
      </Typography>
    );
  }
}