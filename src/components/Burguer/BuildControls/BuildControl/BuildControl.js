import React from 'react';

import classes from './BuildControl.module.css';

const BuildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button type="button" className={classes.Less}>Less</button>
    <button type="button" className={classes.More} onClick={props.added}>More</button>
  </div>
);

export default BuildControl;
