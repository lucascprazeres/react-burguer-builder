import React from 'react';

import classes from './Logo.module.css';

import burguerLogo from '../../assets/images/burguer-logo.png';

const Logo = (props) => (
  <div className={classes.Logo}>
    <img src={burguerLogo} alt="burguer-logo" />
  </div>
);

export default Logo;
