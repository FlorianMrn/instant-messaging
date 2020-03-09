// == Import : npm
import React from 'react';

// == Import : local
import './communication.scss';

// == Composant
const Communication = () => (
        <div className="communication">
                <div className="communication-myMess"> 
                        <div className="communication-myMess-title">7/3 - Jean</div>
                        <p className="communication-myMess-mess">Ola quetal</p>
                </div>
                <div className="communication-theirMess"> 
                        <div className="communication-theirMess-title">7/3 - Michel</div>
                        <p className="communication-theirMess-mess">Ca va sfsfsfsfsfsfsfsfssfddqdqdqdqdqddqdqddqdqdqsdqdqdqdqdqdsddsssfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsffsffsfsfsfsfssfsffsdsdsdsdssdsdsdsdsdsdsdssdqddsdsdsdsdsdssds</p>
                </div>
        </div>
);

// == Export
export default Communication;