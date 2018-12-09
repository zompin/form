import React, { Component } from 'react';
import { Provider } from '../contexts/form';

class Form extends Component {
  state = {
    values: {},
  };

  onChange = (value, name) => {
    const { values } = this.state;

    this.setState({
      values: Object.assign({}, values, { [name]: value }),
    });
  };

  onSubmit = () => {};

  render() {
    const { children } = this.props;
    const { values } = this.state;
    const { onChange, onSubmit } = this;
    const context = {
      values,
      onChange,
    };

    return (
      <Provider value={context}>
        <form onSubmit={onSubmit}>{children}</form>
      </Provider>
    );
  }
}

export default Form;
