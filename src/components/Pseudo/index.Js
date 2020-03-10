// == Import : npm
import React from 'react';

// == Import : local
import './pseudo.scss';

// == Composant
const Pseudo = (props) => (
    
        <div className="pseudo">
            <input 
            type="text" 
            name="pseudo" 
            placeholder="Pseudo" 
            value={props.pseudo} 
            onChange={() => props.getPseudo(event.target.value)}
            />
        </div>
);

// == Export
export default Pseudo;