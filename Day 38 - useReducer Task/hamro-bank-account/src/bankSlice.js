const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
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
    default:
      return initialState;
  }
}
