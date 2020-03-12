// == Import : npm
import React, { useState } from 'react';

// == Import : local
import './app.scss';
import Thread from "src/containers/MessageContainer.js";
import Pseudo from "src/containers/PseudoContainer.js";

// == Composant
const App = () => {

  // HOOKS
  const [compliant, setCompliant] = useState(true);

  return (
    <div id="app">
      <Thread setCompliant={setCompliant}/>
      <Pseudo compliant={compliant} setCompliant={setCompliant}/>
    </div>
  )

};

// == Export
export default App;
