import React, { useState } from 'react';
import Books from './components/books';
import Login from './components/login';
import './App.css';

function App() {
  const [token, setToken] =useState('')

  const userLogin = (tokn) => {
    setToken(tokn);
    console.log(token)
  }

  return (
    <div className="App">
      <Login userLogin={userLogin}/>
      <Books token={token}/>
    </div>
  );
}

export default App;
