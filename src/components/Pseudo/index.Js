// == Import : npm
import React, { useState }  from 'react';

// == Import : local
import './pseudo.scss';

// == Composant
const Pseudo = (props) => {

    // Destructuring
    const { getPseudo, pseudo, compliant, setCompliant } = props;

    // Functions
    const handlePseudo = (event) => {

        const pseudo = event.target.value;

        if (pseudo.length < 15) {
            getPseudo(pseudo);
            setCompliant(true);
        } else {
            setCompliant(false);
        }
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
            {!compliant && <div className="pseudo-compliant">Choisissez un pseudo inférieur à 15 caractères</div>}
        </div>
)};

// == Export
export default Pseudo;