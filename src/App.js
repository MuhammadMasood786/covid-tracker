import React from 'react';
import './App.css';
import Header from './Component/Header';
import Cases from './Component/Cases';
import State from './Component/State';

function App() {

  return (
    <div className="container">
      <div className="justify-content-center spacing mt-5">
        <Header />
        <Cases/>
        <State/>
      </div>
    </div>

  );
}

export default App;
