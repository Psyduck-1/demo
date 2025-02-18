import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';

function App() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://web-stg.flowtica.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          开启flowtica之旅
        </a>
      </header>
    </div>
  );
}

export default App;
