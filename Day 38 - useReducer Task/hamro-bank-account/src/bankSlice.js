import axios from 'axios';

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
  advice: '',
};

export function bankReducer(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_ACCOUNT':
      return {
        ...state,
        balance: state.balance + 1000,
      };
    case 'DEPOSIT':
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case 'WITHDRAW':
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case 'REQUEST_LOAN':
      return {
        ...state,
        loan: action.payload,
        balance: state.balance + action.payload,
      };
    case 'PAY_LOAN':
      return {
        ...state,
        loan: 0,
        balance: state.balance - state.loan,
      };
    case 'GET_ADVICE':
      return {
        ...state,
        advice: action.payload,
      };
    default:
      return initialState;
  }
}

export function openAccount() {
  return {
    type: 'OPEN_ACCOUNT',
  };
}

export function deposit(amount) {
  return {
    type: 'DEPOSIT',
    payload: amount,
  };
}

export function getAdvice() {
  // let res = await fetch('https://api.adviceslip.com/advice');
  // let data = await res.json();
  // console.log(data);
  return async function (dispatch, getState) {
    let data = await axios.get('https://api.adviceslip.com/advice');
    // let data = await res.json();
    console.log(data);
    dispatch({ type: 'GET_ADVICE', payload: data.data.slip.advice });
  };
}
