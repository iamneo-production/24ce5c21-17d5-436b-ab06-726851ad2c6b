import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import storee from './storee';
import App from './App';
import store from './redux/store'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
