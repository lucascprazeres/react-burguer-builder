import React from 'react';

import classes from './SideDrawer.module.css';

import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
  const attachedClasses = [classes.SideDrawer];

  if (props.open) {
    attachedClasses.push(classes.Open);
  } else {
    attachedClasses.push(classes.Close);
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
