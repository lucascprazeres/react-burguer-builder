import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactForm from './ContactForm/ContactForm';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {},
      price: null,
    };
  }

  componentDidMount() {
    const order = this.getQueryParamsObject();
    console.log(order);
    this.setState({
      price: order.price,
      ingredients: order.ingredients,
    });
  }

  handleCheckoutContinue = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  handleCheckoutCancel = () => {
    this.props.history.goBack();
  }

  getQueryParamsObject = () => {
    const params = new URLSearchParams(this.props.location.search);
    const object = {
      price: null,
      ingredients: {},
    };
    for (const [key, value] of params.entries()) {
      if (key === 'price') {
        object.price = Number(value);
      } else {
        object.ingredients[key] = value;
      }
    }
    return object;
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutContinued={this.handleCheckoutContinue}
          checkoutCancelled={this.handleCheckoutCancel}
        />
        <Route
          path={`${this.props.match.url}/contact-data`}
          render={(props) => (
            <ContactForm
              ingredients={this.state.ingredients}
              price={this.state.price}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
