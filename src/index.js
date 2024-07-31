import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderMain from './components/header';
import ListMain from './pages/cardsList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderMain />
      <Routes>
        <Route path='/' element={<ListMain />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
