// == Import : npm
import React from 'react';

// == Import : local
import './communication.scss';

// == Composant
const Communication = (props) => {

        const { messages } = props;

        return (
        <div className="communication">
                {messages.map((message) => (
                        <div className="communication-myMess" key={message.id}> 
                                <div className="communication-myMess-title">{message.pseudo ? message.pseudo : "Anonyme"}</div>
                                <p className="communication-myMess-mess">{message.text}</p>
                        </div>

                ))}
                <div className="communication-theirMess"> 
                        <div className="communication-theirMess-title">Michel</div>
                        <p className="communication-theirMess-mess">Ca va sfsfsfsfsfsfsfsfssfddqdqdqdqdqddqdqddqdqdqsdqdqdqdqdqdsddsssfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsffsffsfsfsfsfssfsffsdsdsdsdssdsdsdsdsdsdsdssdqddsdsdsdsdsdssds</p>
                </div>
        </div>
)};

// == Export
export default Communication;