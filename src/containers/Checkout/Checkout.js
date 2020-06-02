import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {},
    };
  }

  componentDidMount() {
    const ingredients = this.getQueryParamsObject();
    this.setState({ ingredients });
  }

  handleCheckoutContinue = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  handleCheckoutCancel = () => {
    this.props.history.goBack();
  }

  getQueryParamsObject = () => {
    const params = new URLSearchParams(this.props.location.search);
    const object = {};
    for (const param of params.entries()) {
      const [key, value] = param;
      object[key] = value;
    }
    return object;
  }

  render() {
    return (
      <CheckoutSummary
        ingredients={this.state.ingredients}
        checkoutContinued={this.handleCheckoutContinue}
        checkoutCancelled={this.handleCheckoutCancel}
      />
    );
  }
}

export default Checkout;
