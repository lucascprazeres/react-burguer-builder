import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burguer/Burguer';
import BuildControls from '../../components/Burguer/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurguerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        cheese: 0,
        bacon: 0,
        meat: 0,
      },
      totalPrice: 4,
    };
  }

  addIngredienthandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = oldCount + 1;
    const priceAdition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: oldPrice + priceAdition,
    });
  }

  removeIngredienthandler = (type) => {
    const oldCount = this.state.ingredients[type];

    if (oldCount <= 0) {
      return;
    }

    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = oldCount - 1;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: oldPrice - priceDeduction,
    });
  }

  getEnabledButtons = () => {
    const enabledButtons = {
      ...this.state.ingredients,
    };

    Object.keys(enabledButtons).forEach((key) => {
      if (enabledButtons[key] <= 0) {
        enabledButtons[key] = false;
      } else {
        enabledButtons[key] = true;
      }
    });
    return enabledButtons;
  }

  render() {
    const enabledBtns = this.getEnabledButtons();

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredienthandler}
          ingredientRemoved={this.removeIngredienthandler}
          enabledBtns={enabledBtns}
        />
      </Aux>
    );
  }
}

export default BurguerBuilder;
