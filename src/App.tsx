import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [isListVisible, setIsListVisible] = useState(true)

  const toggleIsVisilbe = () => {
    setIsListVisible(prev => !prev)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <button onClick={toggleIsVisilbe}>Toggle List</button>
      {isListVisible ? (
        <ul>
          <li>Orange</li>
          <li>Apple</li>
          <li>Pear</li>
        </ul>) : '' }
      </header>
    </div>
  );
}

export default App;
