import React from 'react';
import classes from './Layout.module.css';

import Aux from '../../hoc/Aux/Aux';

const Layout = (props) => (
  <Aux>
    <div>
      Toolbar, Sidedrawer, Backdrop
    </div>
    <main className={classes.Main}>
      {props.children}
    </main>
  </Aux>
);

export default Layout;
