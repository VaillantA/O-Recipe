export const initialState = {
  logged: false,
  email: '',
  password: '',
  pseudo: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_VALUE':
      return {
        ...state,
        [action.key]: action.value,
      };
    case 'SAVE_USER':
      return {
        ...state,
        logged: true,
        email: '',
        password: '',
        pseudo: action.pseudo,
      };
    case 'LOGOUT':
      return {
        ...state,
        logged: false,
        pseudo: '',
      };
    default:
      return state;
  }
};

export default reducer;
