// == Import Local
import messagesData from "src/data/messages.js";

// == Initial State
const initialState = {
  messagesData,
  messageValue : '',
  pseudo : ''
};

// == Types
const GET_PSEUDO = 'GET_PSEUDO';
const GET_MESSAGE_VALUE = 'GET_MESSAGE_VALUE';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_PSEUDO:
      return {
        ...state,
        pseudo: action.pseudo,
      };
    case GET_MESSAGE_VALUE:
      return {
        ...state,
        messageValue: action.message,
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

export const getMessageValue = (message) => ({
  type: GET_MESSAGE_VALUE,
  message,
});


// == Selectors


// == Export
export default reducer;