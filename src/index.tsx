import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/global.css';
import MPContext from './context/mp';

ReactDOM.render(
  <React.StrictMode>
    <MPContext>
      <App />
    </MPContext>
  </React.StrictMode>,
  document.getElementById('root')
);


