import React, { createContext } from 'react';

const FormContext = createContext(null);
const { Provider, Consumer } = FormContext;

const connect = Component => props => (
  <Consumer>
    {contextProps => (
      <Component {...contextProps} {...props} />
    )}
  </Consumer>
);

export {
  connect,
  Provider,
};
