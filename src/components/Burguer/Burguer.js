import React from 'react';

import classes from './Burguer.module.css';

import BurguerIngredient from './BurguerIngredient/BurguerIngredient';

const Burguer = (props) => {
  const ingredientKeyArray = Object.keys(props.ingredients);

  const emptyArrayStructuredByType = ingredientKeyArray.map((igKey) => [
    ...new Array(Number(props.ingredients[igKey])),
  ]);

  const ingredientArrayByType = emptyArrayStructuredByType.map((typeArray, igIndex) => {
    const ingredientType = ingredientKeyArray[igIndex];
    return typeArray.map((_, i) => {
      const componentkey = ingredientType + i;
      return <BurguerIngredient key={componentkey} type={ingredientType} />;
    });
  });

  const ingredientArrayReduced = ingredientArrayByType.reduce((arr, el) => {
    return arr.concat(el);
  }, []);


  return (
    <div className={classes.Burguer}>
      <BurguerIngredient type="bread-top" />
      {
        ingredientArrayReduced.length > 0
          ? ingredientArrayReduced
          : <p>Please start adding ingredients!</p>
        }
      <BurguerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burguer;
