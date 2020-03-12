// == Import : npm
import React, { useState } from 'react';

// == Import : components
import Communication from "src/containers/CommunicationContainer";

// == Import : local
import './thread.scss';
import { FiArrowUp } from "react-icons/fi";

// == Composant
const Thread = (props) => {

  // Destructuring
  const {messageValue, getMessageValue, pseudo, sendMessage, setCompliant } = props;

  // Functions
  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (pseudo.length < 15  &&  pseudo !== "") {
      sendMessage();
      setCompliant(true);
    } else {
      setCompliant(false);
    }
    
  }

  return (
    <>
    <div className="thread">
      <Communication />
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
    
    </>

  )};

// == Export
export default Thread;