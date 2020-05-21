import React from 'react';

import classes from './Burguer.module.css';

import BurguerIngredient from './BurguerIngredient/BurguerIngredient';

const Burguer = (props) => (
  <div className={classes.Burguer}>
    <BurguerIngredient type="bread-top" />
    <BurguerIngredient type="cheese" />
    <BurguerIngredient type="meat" />
    <BurguerIngredient type="bread-bottom" />
  </div>
);

export default Burguer;
