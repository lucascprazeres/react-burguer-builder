import React, { Component } from 'react';

import Button from '../../../UI/Button/Button';
import Spinner from '../../../UI/Spinner/Spinner';

import classes from './ContactForm.module.css';
import axios from '../../../axios-orders';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      address: {
        street: '',
        postalCode: '',
      },
      loading: false,
    };
  }

  handleOrder = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: '',
        email: '',
        address: {
          street: '',
          postalCode: '',
        },
      },
    };
    axios.post('/orders.json', order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.replace('/');
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  }

  render() {
    let form = <Spinner />;
    if (!this.state.loading) {
      form = (
        <>
          <h4>Enter your contact data</h4>
          <form>
            <input type="text" name="name" placeholder="Your Name" />
            <input type="email" name="email" placeholder="Your Email" />
            <input type="text" name="street" placeholder="Street" />
            <input type="text" name="postal" placeholder="Postal Code" />
            <Button btnType="Success" clicked={this.handleOrder}>Order</Button>
          </form>
        </>
      );
    }
    return (
      <div className={classes.ContactForm}>
        {form}
      </div>
    );
  }
}

export default ContactForm;
