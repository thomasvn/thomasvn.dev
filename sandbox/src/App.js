import React from 'react';
import logo from './logo.svg';
import './App.css';

import AboutMe from './components/AboutMe'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <h1>Thomas Nguyen</h1>
      </body>
    </div>
  );
}

export default App;
