import React from 'react';
import './Assets/css/App.css';

//Importar componentes//
import Game1Container from './Containers/Game1Container'
import ScoreboardComponent from './Components/ScoreboardComponent'


function App() {

  return (
    <div className="App">
      <ScoreboardComponent/>
      <Game1Container/>
    </div>
  );
}

export default App;
