import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import commentReducer from './reducers/index';
import CommentApp from './containers/CommentApp';

const store = createStore(commentReducer)

ReactDOM.render(
  <Provider store={store}>
  <CommentApp />
  </Provider>,
  document.getElementById('root')
);
