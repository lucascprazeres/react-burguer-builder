import React, { Component } from 'react';

import Button from '../../../UI/Button/Button';

import classes from './ContactForm.module.css';

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
    };
  }

  render() {
    return (
      <div className={classes.ContactForm}>
        <h4>Enter your contact data</h4>
        <form>
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <input type="text" name="street" placeholder="Street" />
          <input type="text" name="postal" placeholder="Postal Code" />
          <Button btnType="Success">Order</Button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
