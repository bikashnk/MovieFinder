import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './style/index.css';
import MovieFinder from './componets/MovieFinder.jsx';
import movieFinderReducer from '../src/reducers/movieFinderReducer.jsx';

const store = createStore(movieFinderReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <MovieFinder/>
  </Provider>,
   document.getElementById('root')
  );