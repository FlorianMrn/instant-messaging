// == Import : npm
import React from 'react';

// == Import : components
import Communication from "src/containers/CommunicationContainer";

// == Import : local
import './thread.scss';
import { FiArrowUp } from "react-icons/fi";

// == Composant
const Thread = (props) => {

  const {messageValue, getMessageValue, pseudo, receiveMessage } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = {
            text: messageValue,
            pseudo: pseudo,
    };
    receiveMessage(newMessage);
  }

  return (
    <div className="thread">
      <Communication/>
      <form className="thread-texting" onSubmit={handleSubmit}>
          <input 
          type="text" 
          name="message" 
          placeholder="Message" 
          value={messageValue} 
          onChange={() => getMessageValue(event.target.value)}
          />
          <button className="thread-texting-send"><FiArrowUp/></button>
      </form>
    </div>
  )};

// == Export
export default Thread;