import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Importamos el componente Provider de react-redux
import { Provider } from 'react-redux';
// Importamos nuestro store
import store from './store';

// En la prop store pasamos el valor de nuestra store. Proveemos así el store a nuestra app.
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
