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
      ingredients: null,
      totalPrice: 4,
      purchasable: false,
      purchasing: false,
      loading: false,
      error: false,
    };
  }

  componentDidMount() {
    const url = 'https://react-burguer-builder-796d0.firebaseio.com/ingredients.json';

    axios.get(url)
      .then((response) => this.setState({ ingredients: response.data }))
      .catch(() => this.setState({ error: true }));
  }

  handleIngredientAdd = (type) => {
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

  handleIngredientRemove = (type) => {
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

  handlePurchase = () => {
    this.setState({ purchasing: true });
  }

  handlePurchaseCancel = () => {
    this.setState({ purchasing: false });
  }

  hanldePurchaseContinue = () => {
    const queryString = this.getIngredientQueryString();
    this.props.history.push({
      pathname: '/checkout',
      search: queryString,
    });
  }

  getIngredientQueryString = () => {
    const { ingredients } = this.state;

    const queryParams = [];
    Object.keys(ingredients).forEach((ing) => {
      const queryParam = `${encodeURIComponent(ing)}=${encodeURIComponent(ingredients[ing])}`;
      queryParams.push(queryParam);
    });
    queryParams.push(`price=${this.state.totalPrice}`);
    return `?${queryParams.join('&')}`;
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

  getOrderSummaryComponent = () => {
    let orderSummary = null;

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    if (this.state.ingredients) {
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
          cancel={this.handlePurchaseCancel}
          continue={this.hanldePurchaseContinue}
        />
      );
    }
    return orderSummary;
  }

  getBurguerMenu = (enabledBtns) => {
    let burguer = this.state.error
      ? (
        <h1 style={{ textAlign: 'center', marginTop: '250px' }}>
          Sorry, we can&apos;t load your ingredients :(
        </h1>
      )
      : <Spinner />;

    if (this.state.ingredients) {
      burguer = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.handleIngredientAdd}
            ingredientRemoved={this.handleIngredientRemove}
            enabledBtns={enabledBtns}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.handlePurchase}
          />
        </Aux>
      );
    }

    return burguer;
  }

  updatePurchaseState = (updatedIngredients) => {
    const totalIngredients = Object.values(updatedIngredients).reduce((sum, currentVal) => {
      return sum + currentVal;
    }, 0);

    this.setState({ purchasable: totalIngredients > 0 });
  }

  render() {
    const enabledBtns = this.getEnabledButtons();
    const orderSummary = this.getOrderSummaryComponent();
    const burguerMenu = this.getBurguerMenu(enabledBtns);

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.handlePurchaseCancel}>
          {orderSummary}
        </Modal>
        {burguerMenu}
      </Aux>
    );
  }
}

export default withErrorHandler(BurguerBuilder, axios);
