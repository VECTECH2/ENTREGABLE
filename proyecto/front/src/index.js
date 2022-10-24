import React from 'react';
import ReactDOM from 'react-dom/client';

// recuso que me permite hacer todo lo de un proveedor
import { Provider } from 'react-redux';

// recurso que viene desde store con la funcion reduce
import store from './store';
import App from './App';

// generador de alarmas
import { positions , transitions,Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options ={
  timeout:3000,
  position: positions.BOTTOM_CENTER,
  transition:transitions.SCALE
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
        <App />
    </AlertProvider>
  </Provider>
);


