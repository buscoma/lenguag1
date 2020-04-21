import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Counter from './Components/LoginPage/LoginPage'

function App() {
  let user = {'Name': 'Pablo'};
  
  return (
    <div className="App">
      <Navbar AppName="lenguamaticag1" User={user}></Navbar>
      <Counter/>
    </div>
  );
}

export default App;
