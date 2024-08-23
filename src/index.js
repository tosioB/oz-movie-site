import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Provider } from 'react-redux';
import { store } from './RTK/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);