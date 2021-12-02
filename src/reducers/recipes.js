// import data from 'src/data';

export const initialState = {
  list: [],
  error: false,
  loading: true,
  fav: [],
  errorFav: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SAVE_RECIPES':
      return {
        ...state,
        list: action.recipes,
        error: false,
        loading: false,
      };
    case 'RECEIVE_ERROR':
      return {
        ...state,
        error: true,
        loading: false,
      };
    case 'FAV_ERROR':
      return {
        ...state,
        errorFav: true,
      };
    case 'SAVE_FAV':
      return {
        ...state,
        fav: action.recipes,
        errorFav: false,
      };
    default:
      return state;
  }
};

export default reducer;
