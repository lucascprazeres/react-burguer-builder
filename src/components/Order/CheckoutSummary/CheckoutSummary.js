import React from 'react';

import Burguer from '../../Burguer/Burguer';
import Button from '../../../UI/Button/Button';

import classes from './CheckoutSummary.module.css';

const CheckoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope you enjoy it!</h1>
      <div className={classes.Burguer}>
        <Burguer ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked="">
        CANCEL
      </Button>
      <Button btnType="Success" clicked="">
        SUCCESS
      </Button>
    </div>
  );
};

export default CheckoutSummary;
