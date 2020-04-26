import React, {Component} from 'react';
import './App.css';
import TrippleButton from './Components/TripleButton.js';
import RankingList from './Components/RankingList.js';

class App extends Component {

  state = {
    showRanking: true
  }

  // se ejecutará una vez el usuario le de click al boton "Ranking"
  toggleRankingListHandler = () => {
    const doesShow = this.state.showRanking;
    this.setState({showRanking: !doesShow});
  }

  render () {
    
    // rankingList va a almacenar el componente = RankingList y solo lo va a mostrar cuando el boton de "Ranking" sea seleccionado
    let rankingList = null;

    if(this.state.showRanking){
      rankingList = (
        <div>
          <h1> Ranking: </h1>
          <RankingList />
        </div>
      )
    }

    return (      
        <div className="App">
        
          <h1> LenguaMatica!</h1>

          <TrippleButton onClick={this.toggleRankingListHandler} />
          
          { rankingList }

          { /* <img src={TestImg} alt='' /> */ }

        </div>
      );
    }
}


export default App;
