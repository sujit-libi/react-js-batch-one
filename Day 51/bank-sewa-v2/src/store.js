/*********************************************** */
/*    Traditiona Redux Store Setup Method        */
/*********************************************** */
// import { applyMiddleware, combineReducers, createStore } from 'redux';
// import { thunk } from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

// import accountReducer from './container/accounts/accountSlice';
// import customerReducer from './container/customers/customerSlice';

// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;

/*********************************************** */
// Modern Redux Configuration using Redux toolkit
/*********************************************** */
import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './container/accounts/accountSlice';
import customerReducer from './container/customers/customerSlice';

console.log(accountReducer, 'From store');

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
