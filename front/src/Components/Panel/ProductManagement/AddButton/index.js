import React from 'react';
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { css } from 'emotion';
import * as S from './style';

export default (props) => {
  return(
      <>
        <Typography className={css(S.buttonBox)}>
            <Button className={css(S.addButton)} component={Link} to="/new/product">Add new product</Button>
        </Typography>
      </>
  );
}