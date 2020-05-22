import React from 'react';

import classes from './BuildControls.module.css';

import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
];

const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Your burguer costs: <em>{props.price.toFixed(2)}$</em></p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        enabled={props.enabledBtns[ctrl.type]}
      />
    ))}
    <button
      type="button"
      className={classes.orderButton}
      disabled={!props.purchasable}
    >ORDER NOW
    </button>
  </div>
);

export default BuildControls;
