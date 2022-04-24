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
      </header>
    </div>
  );
}
//Aqui pondremos la estructura general de la patalla
//Navbar
//
export default App;
