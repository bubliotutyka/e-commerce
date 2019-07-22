import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ImageIcon from '@material-ui/icons/Image';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

export default class Item extends React.Component {
  render() {
    const { name, quantity, price } = this.props.item;

    return (
        <ListItem style={{marginRight: 30}} button>
            <ListItemAvatar>
                <Avatar>
                    <ImageIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText style={{marginRight: 30}} secondary={'x'+ quantity }>{ name }</ListItemText>
            <ListItemSecondaryAction>
                <p>{ price * quantity } €</p>
            </ListItemSecondaryAction>
        </ListItem>
    );
  }
}