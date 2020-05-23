import React from 'react';
import classes from './Layout.module.css';

import Aux from '../../hoc/Aux/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = (props) => (
  <Aux>
    <div>
      <Toolbar />
      <SideDrawer />
    </div>
    <main className={classes.Main}>
      {props.children}
    </main>
  </Aux>
);

export default Layout;
