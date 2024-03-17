import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

import { store } from './Redux_t/Store.js'
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>  
);

