// == Import : npm
import React from 'react';

// == Import : local
import './communication.scss';

// == Composant
const Communication = (props) => {

        // Destructuring
        const { messages, pseudo } = props;

        return (
        <div className="communication">
                {messages.map( message => {
                        
                        if(message.pseudo === pseudo) {
                                return (
                                <div className="communication-myMess" key={message.id}> 
                                        <div className="communication-myMess-title">{message.pseudo ? message.pseudo : "Anonyme"}</div>
                                        <p className="communication-myMess-mess">{message.text}</p>
                                </div>
                                )
                        } else if(message.pseudo !== pseudo) {
                                return (
                                <div className="communication-theirMess" key={message.id}> 
                                        <div className="communication-theirMess-title">{message.pseudo ? message.pseudo : "Anonyme"}</div>
                                        <p className="communication-theirMess-mess">{message.text}</p>
                                </div>
                                )
                        } else {
                                return;
                        }
                       
                })}            
        </div>
)};

// == Export
export default Communication;