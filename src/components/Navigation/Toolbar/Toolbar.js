import React from 'react';

import classes from './Toolbar.module.css';

import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import DrawerToggler from '../SideDrawer/DrawerToggler/DrawerToggler';

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggler clicked={props.drawerTogglerClicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavItems />
    </nav>
  </header>
);

export default Toolbar;
