// == Import : npm
import React from 'react';

// == Import : components
import Communication from "src/containers/CommunicationContainer";

// == Import : local
import './thread.scss';
import { FiArrowUp } from "react-icons/fi";

// == Composant
const Thread = (props) => {

  const {messageValue, getMessageValue } = props;

  return (
    <div className="thread">
      <Communication/>
      <div className="thread-texting">
          <input 
          type="text" 
          name="message" 
          placeholder="Message" 
          value={messageValue} 
          onChange={() => getMessageValue(event.target.value)}
          />
          <div className="thread-texting-send"><FiArrowUp/></div>
      </div>
    </div>
  )};

// == Export
export default Thread;