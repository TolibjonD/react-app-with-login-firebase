import ReactDOM from 'react-dom/client';
import './index.css';
import { StrictMode } from 'react';
import { BrowserRouter } from "react-router-dom"
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);