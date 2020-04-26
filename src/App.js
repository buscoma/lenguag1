import React from 'react';
import './App.css';
import TrippleButton from './Components/TripleButton.js';
import RankingList from './Components/RankingList.js';
//import TestImg from "./Images/test.svg";

function App() {
  return (
    
    <div className="App">
    
      <h1> LenguaMatica!</h1>

      <TrippleButton />
      
      <h1> Ranking: </h1>

      <RankingList />

      { /* <img src={TestImg} alt='' /> */ }

    </div>
  );
}

export default App;
