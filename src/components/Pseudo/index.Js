// == Import : npm
import React from 'react';

// == Import : local
import './pseudo.scss';

// == Composant
const Pseudo = (props) => {

    const { getPseudo, pseudo } = props;

    const handlePseudo = (event) => {

        const pseudo = event.target.value;
        getPseudo(pseudo);

        
    }
    
    return (
        <div className="pseudo">
            <input 
            type="text" 
            name="pseudo" 
            placeholder="Pseudo" 
            value={pseudo} 
            required
            onChange={handlePseudo}
            />
            <label htmlFor="pseudo">Pseudo</label>
        </div>
)};

// == Export
export default Pseudo;