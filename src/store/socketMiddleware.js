// on importe l'action type qui nous intéresse
import { WEBSOCKET_CONNECT, ADD_MESSAGE } from 'src/store/reducer';

// on prépare une variable au dessus, ainsi elle sera disponible dans diverses actions
let socket;

const socketMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case WEBSOCKET_CONNECT:
            socket = window.io('http://localhost:3001');
            break;
        case ADD_MESSAGE: {
            const { pseudo, messageValue } = store.getState();
      
            // on crée un objet représentant notre message
            // pas besoin d'id, c'est le back qui va l'ajouter
            const newMessage = {
              text: messageValue,
              pseudo: pseudo,
            };
            socket.emit('send_message', newMessage);

            // on laisse passer l'action ADD_MESSAGE, elle doit finir dans le reducer pour vider le message
            next(action);
            break;
        }
        default:
        next(action);
    }
  };
  
  export default socketMiddleware;