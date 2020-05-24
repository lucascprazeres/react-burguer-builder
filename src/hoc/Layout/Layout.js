import React, { Component } from 'react';
import classes from './Layout.module.css';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideDrawer: false,
    };
  }

  toggledSideDrawerHandler = () => {
    this.setState((prevState) => ({
      showSideDrawer: !prevState.showSideDrawer,
    }));
  }

  render() {
    return (
      <Aux>
        <div>
          <Toolbar drawerTogglerClicked={this.toggledSideDrawerHandler} />
          <SideDrawer
            open={this.state.showSideDrawer}
            closed={this.toggledSideDrawerHandler}
          />
        </div>
        <main className={classes.Main}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout;
