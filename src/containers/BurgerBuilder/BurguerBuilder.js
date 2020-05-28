import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Burger from '../../components/Burguer/Burguer';
import BuildControls from '../../components/Burguer/BuildControls/BuildControls';
import OrderSummary from '../../components/Burguer/OrderSummary/OrderSummary';
import Modal from '../../UI/Modal/Modal';
import Spinner from '../../UI/Spinner/Spinner';

import axios from '../../axios-orders';

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
      purchasable: false,
      purchasing: false,
      loading: false,
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
    this.updatePurchaseState(updatedIngredients);
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
    this.updatePurchaseState(updatedIngredients);
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  }

  cancelPurchaseHandler = () => {
    this.setState({ purchasing: false });
  }

  continuePurchaseHandler = () => {
    this.setState({ loading: true });

    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Lucas dos Prazeres',
        address: {
          street: 'testsreet 1',
          zipCode: '123456',
          country: 'Brazil',
        },
        email: 'email@example.com',
      },
      deliveryMethod: 'fastest',
    };

    axios.post('/orders.json', order)
      .then(() => this.setState({ loading: false, purchasing: false }))
      .catch(() => this.setState({ loading: false, purchasing: false }));
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

  updatePurchaseState = (updatedIngredients) => {
    const totalIngredients = Object.values(updatedIngredients).reduce((sum, currentVal) => {
      return sum + currentVal;
    }, 0);

    this.setState({ purchasable: totalIngredients > 0 });
  }

  render() {
    const enabledBtns = this.getEnabledButtons();

    const orderSummary = this.state.loading
      ? <Spinner />
      : (
        <OrderSummary
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
          cancel={this.cancelPurchaseHandler}
          continue={this.continuePurchaseHandler}
        />
      );

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.cancelPurchaseHandler}>
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredienthandler}
          ingredientRemoved={this.removeIngredienthandler}
          enabledBtns={enabledBtns}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default withErrorHandler(BurguerBuilder, axios);
