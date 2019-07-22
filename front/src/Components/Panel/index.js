import React from 'react';
import * as S from './style';
import SideBarMenu from './SideBarMenu';
import tabs from './route';

export default class Panel extends React.Component {
  state = {
    View: tabs[0].view,
  }

  changeView = (View) => {
    this.setState({ View }, console.log(this.state));
  }

  render() {
    const { View } = this.state;

    return(
      <>
        <SideBarMenu onChange={this.changeView} tabs={tabs}/>
        <S.Container>
          <View />
        </S.Container>
      </>
    );
  } 
}