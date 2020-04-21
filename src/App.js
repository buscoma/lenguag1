import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'

function App() {
  let user = {'Name': 'Pablo'};
  
  return (
    <div className="App">
      <Navbar AppName="lenguamaticag1" User={user}></Navbar>
      Hola Mundo!!!
    </div>
  );
}

export default App;
