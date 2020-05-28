import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Modal from '../../UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
      };
    }

    componentDidMount() {
      axios.interceptors.request.use(this.handleSuccededRequest, this.handleError);
      axios.interceptors.response.use((res) => res, this.handleError);
    }

    handleSuccededRequest = (response) => {
      this.setState({ error: null });
      return response;
    }

    handleError = (error) => {
      this.setState({ error });
    }

    handleErrorConfirm = () => {
      this.setState({ error: null });
    }

    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={this.handleErrorConfirm}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
