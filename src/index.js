import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import './index.css';
import App from './App';
import Menu from './routes/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="menu" element={<Menu />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);