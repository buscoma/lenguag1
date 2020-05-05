import React from 'react';
import './landingPage.css';

//Importar componentes//
import TrippleButton from '../Components/TripleButton.js';
import RankingList from '../Components/RankingList.js';

function LandingPage() {

    return (
        <div>            
            <div className="LenguaMatica"> LenguaMatica!</div>

            <div className="mainBox">
                <TrippleButton />     

            
            </div>

            { /*
            <h1> Ranking: </h1>
            <RankingList />
            */ }
        </div>
    );
}

export default LandingPage;
