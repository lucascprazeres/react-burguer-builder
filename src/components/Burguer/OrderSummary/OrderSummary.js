import React from 'react';

import Aux from '../../../hoc/Aux/Aux';

const OrderSummary = (props) => {
  const ingredientKeys = Object.keys(props.ingredients);

  const ingredientSummary = ingredientKeys.map((igKey, index) => {
    const key = igKey + index;
    return (
      <li key={key}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>
        : <small>x</small>{props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burguer with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout?</p>
    </Aux>
  );
};

export default OrderSummary;
