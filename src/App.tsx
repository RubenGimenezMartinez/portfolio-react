import React from 'react';
import logo from './logo.svg';
import './App.css';
import Informacion from './components/Informacion';
import Encabezado from './components/Encabezado';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Encabezado></Encabezado>
        <Informacion></Informacion>
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
      </header>
    </div>
  );
}
//Aqui pondremos la estructura general de la patalla
//Navbar
//
export default App;
