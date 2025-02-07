const initialStateUser = {
  username: 'Mohan',
  email: '',
};

export function userReducer(state = initialStateUser, action) {
  switch (action.type) {
    case 'USER_INFO':
      return {
        ...state,
      };
    default:
      return initialStateUser;
  }
}
