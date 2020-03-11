// == Import Local
import messagesData from "src/data/messages.js";

// == Initial State
export const initialState = {
  messagesData,
  messageValue : '',
  pseudo : '',
  messages : [],
};

// == Types
export const GET_PSEUDO = 'GET_PSEUDO';
export const GET_MESSAGE_VALUE = 'GET_MESSAGE_VALUE';
export const WEBSOCKET_CONNECT = 'WEBSOCKET_CONNECT';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

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
      };
    case ADD_MESSAGE:
      return {
        ...state,
        messageValue : '',
      };
    case RECEIVE_MESSAGE:
      return {
        ...state,
    // on concerve les messages et on ajoute le nouveau
        messages: [
          ...state.messages,
          action.message
        ],
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

export const getMessageValue = (message) => ({
  type: GET_MESSAGE_VALUE,
  message,
});

export const websocketConnect = () => ({
  type: WEBSOCKET_CONNECT,
});

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message,
});

export const addMessage = () => ({
  type: ADD_MESSAGE,
})




// == Selectors


// == Export
export default reducer;