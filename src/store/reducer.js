// == Import Local
import messagesData from "src/data/messages.js";

// == Initial State
const initialState = {
  messagesData,
  message : '',
  pseudo : ''
};

// == Types
const GET_PSEUDO = 'GET_PSEUDO';
const GET_MESSAGE = 'GET_MESSAGE';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_PSEUDO:
      return {
        ...state,
        pseudo: action.pseudo,
      };
    case GET_MESSAGE:
      return {
        ...state,
        message: action.message,
      }
    default:
      return state;
  }
};

// == Action Creators
export const getPseudo = (pseudo) => ({
  type: GET_PSEUDO,
  pseudo,
});

export const getMessage = (message) => ({
  type: GET_MESSAGE,
  message,
});


// == Selectors


// == Export
export default reducer;