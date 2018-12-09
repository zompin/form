import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Form from '../components/Form';
import Input from '../components/Input';

class App extends Component {
  render() {
    return (
      <div>
        <div>App</div>
        <Form>
          <Input name="test" />
          <Input name="test" />
          <Input name="test1" />
        </Form>
      </div>
    );
  }
}

export default hot(module)(App);
