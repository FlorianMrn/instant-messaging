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
            required
            value={props.pseudo} 
            onChange={() => props.getPseudo(event.target.value)}
            />
            <label for="pseudo">Pseudo</label>
        </div>
);

// == Export
export default Pseudo;