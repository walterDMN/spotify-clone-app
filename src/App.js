import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';

function App() {
  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""; // Will hide the token in the URL
    const token = hash.access_token;
  }, []); // Anytime something in here changes it will run the code inside the useEffect

  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
