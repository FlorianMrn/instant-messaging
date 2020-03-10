// == Initial State
const initialState = {
  message : '',
  pseudo : ''
};

// == Types
const GET_PSEUDO = 'GET_PSEUDO';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_PSEUDO:
      return {
        ...state,
        pseudo: action.pseudo,
      };

    default:
      return state;
  }
};

// == Action Creators
export const getPseudo = (pseudo) => ({
  type: GET_PSEUDO,
  pseudo,
});


// == Selectors


// == Export
export default reducer;