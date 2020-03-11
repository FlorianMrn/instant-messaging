// on importe l'action type qui nous intéresse
import { WEBSOCKET_CONNECT } from 'src/store/reducer';

// on prépare une variable au dessus, ainsi elle sera disponible dans diverses actions
let socket;

const socketMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case WEBSOCKET_CONNECT:
        // on met de côté la connexion au WEBSOCKET
        socket = window.io('http://localhost:3001');
        break;
      default:
        next(action);
    }
  };
  
  export default socketMiddleware;