import React from 'react';
import classes from './Layout.module.css';

import Aux from '../../hoc/Aux/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = (props) => (
  <Aux>
    <div>
      <Toolbar />
    </div>
    <main className={classes.Main}>
      {props.children}
    </main>
  </Aux>
);

export default Layout;
