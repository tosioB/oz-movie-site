import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './assets/style/reset.scss' // 리셋
import './assets/style/common.scss' // 공통
import './assets/style/header.scss' // 헤더
import './assets/style/page.scss' // 페이지
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