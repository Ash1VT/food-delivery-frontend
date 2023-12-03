import React from 'react';
import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar';

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Navbar/>
      <Header/>
    </div>
  );
}

export default App;
