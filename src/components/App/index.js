// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import Thread from "src/components/Thread";
import Pseudo from "src/containers/PseudoContainer.js";

// == Composant
const App = () => (
  <div id="app">
    <Thread />
    <Pseudo />
  </div>
);

// == Export
export default App;
