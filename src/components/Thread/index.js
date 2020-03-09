// == Import : npm
import React from 'react';

// == Import : local
import './thread.scss';
import { FiArrowUp } from "react-icons/fi";

// == Composant
const Thread = () => (
  <div className="thread">
    <div className="thread-texting">
        <input type="text" name="name" placeholder="Message texte"/>
        <div className="thread-texting-send"><FiArrowUp/></div>
    </div>
  </div>
);

// == Export
export default Thread;