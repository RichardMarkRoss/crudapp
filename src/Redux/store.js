import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk';
import productReducer from './reducers';

const rootReducer = combineReducers({
  products: productReducer
});

const store = configureStore({
  reducer: rootReducer, 
  middleware: [thunkMiddleware]
});

export default store;
