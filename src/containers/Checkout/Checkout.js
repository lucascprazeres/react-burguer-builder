import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactForm from './ContactForm/ContactForm';

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

    for (const [key, value] of params.entries()) {
      object[key] = value;
    }
    return object;
  }

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutContinued={this.handleCheckoutContinue}
          checkoutCancelled={this.handleCheckoutCancel}
        />
        <Route
          path={`${this.props.match.url}/contact-data`}
          component={ContactForm}
        />
      </div>
    );
  }
}

export default Checkout;
