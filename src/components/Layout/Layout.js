import React, { Component } from 'react';
import classes from './Layout.module.css';

import Aux from '../../hoc/Aux/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideDrawer: true,
    };
  }

  closedSideDrawerHandler = () => {
    this.setState({ showSideDrawer: false });
  }

  render() {
    return (
      <Aux>
        <div>
          <Toolbar />
          <SideDrawer
            open={this.state.showSideDrawer}
            closed={this.closedSideDrawerHandler}
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
