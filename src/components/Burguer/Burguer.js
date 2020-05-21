import React from 'react';

import classes from './Burguer.module.css';

import BurguerIngredient from './BurguerIngredient/BurguerIngredient';

const Burguer = (props) => {
  const ingredientKeyArray = Object.keys(props.ingredients);

  const emptyArrayStructuredByType = ingredientKeyArray.map((igKey) => [
    ...Array(props.ingredients[igKey]),
  ]);

  const ingredientArray = emptyArrayStructuredByType.map((typeArray, igIndex) => {
    const ingredientType = ingredientKeyArray[igIndex];

    return typeArray.map((_, i) => {
      const componentkey = ingredientType + i;
      return <BurguerIngredient key={componentkey} type={ingredientType} />;
    });
  });

  return (
    <div className={classes.Burguer}>
      <BurguerIngredient type="bread-top" />
      {ingredientArray}
      <BurguerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burguer;
