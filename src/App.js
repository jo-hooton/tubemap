import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tube from './tube2.svg'
import { ReactComponent as Logo } from './tube2.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a> */}
        <Logo />
      </header>
    </div>
  );
}

export default App;
