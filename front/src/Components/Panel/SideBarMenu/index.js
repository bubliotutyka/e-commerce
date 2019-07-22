import React from 'react';
import * as S from './style';
import Tab from './Tab';

export default class SideBarMenu extends React.Component {
  state = {
    showTabs: false,
    active: 0,
  }

  componentDidMount = () => {
    this.setEvent();
  }

  setEvent = () => {
    window.onkeydown = (e) => {
      if (e.key === 'Escape')
        this.closeMenu();
    }

    document.onclick = (e) => {
      if (!e.target.id.includes('menu')) {
        this.closeMenu();
      }
    }
  }

  closeMenu = () => {
    this.setState({showTabs: false});
  }

  onChange = (view, active) => {
    const { onChange } = this.props;
    this.setState({active})
    onChange(view);
  }

  handleShow = () => {
    this.setState({
      showTabs: !this.state.showTabs
    });
  }

  getTabs = () => {
    const { tabs } = this.props;
    const { active } = this.state;

    return tabs.map((tab, key) => (
      <Tab 
        className={key === active ? 'active' : ''}
        id="menu-tab"
        key={key}
        label={tab.label}
        icon={tab.icon}
        onClick={() => this.onChange(tab.view, key)}
      />
    ))
  }

  getExelButton = () => {
    return (
      <S.ExelTab id="menu-exel" onClick={this.getExelFile}>
        <S.IconLeft id="menu-icon" className="fas fa-file-alt"/>
        <S.Label id="menu-label" href="https://ddd0d153.ngrok.io/api/userCollection" download>Download exel stats file</S.Label>
      </S.ExelTab>
    );
  }

  render() {
    const { showTabs } = this.state;

    return (
      <S.Container>
        {
          showTabs
            ? (<S.ShowButton id="menu-button" className="fas fa-bars show" onClick={this.handleShow}/>)
            : (<S.ShowButton id="menu-button" className="fas fa-bars" onClick={this.handleShow}/>)
        }
        <S.TabsContainer id="menu">
          {showTabs && this.getTabs()}
          {showTabs && this.getExelButton()}
        </S.TabsContainer>
      </S.Container>
    )
  }
}