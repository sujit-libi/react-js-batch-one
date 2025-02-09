import { useReducer } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { bankReducer } from './bankSlice';
import { userReducer } from './userSlice';

// const [] = useReducer(reducer, initialState)

const rootReducer = combineReducers({
  bank: bankReducer,
  user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// // Display initial State
// console.log(store.getState());

// // Deposit
// store.dispatch({ type: 'OPEN_ACCOUNT' });

// // Display state after deposit
// console.log(store.getState());
