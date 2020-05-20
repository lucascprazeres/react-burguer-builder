import React from 'react';

import './BurguerIngredient.css';

const BurguerIngredient = (props) => {
  if (props.type === 'bread-top') {
    return (
      <div className={props.type}>
        <div className="seeds"></div>
        <div className="seeds2"></div>
      </div>
    );
  }

  return <div className={props.type}></div>;
};

export default BurguerIngredient;
