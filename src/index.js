import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import reducer from './reducers/game-reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);
  

  
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  
  