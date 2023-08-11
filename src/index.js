import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Redux/store'; // Import your Redux store
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();