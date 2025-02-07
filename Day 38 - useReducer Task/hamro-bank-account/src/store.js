import { useReducer } from 'react';
import { createStore, combineReducers } from 'redux';
import { bankReducer } from './bankSlice';
import { userReducer } from './userSlice';

// const [] = useReducer(reducer, initialState)

const store = createStore(
  combineReducers({
    bank: bankReducer,
    user: userReducer,
  })
);

export default store;

// // Display initial State
// console.log(store.getState());

// // Deposit
// store.dispatch({ type: 'OPEN_ACCOUNT' });

// // Display state after deposit
// console.log(store.getState());
