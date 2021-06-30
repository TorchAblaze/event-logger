import './App.css';
import React from 'react';
import Header from './Components/Header';
import EpicodusScore from './Components/MainContent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <EpicodusScore/>
      </header>
    </div>
  );
}

export default App;
