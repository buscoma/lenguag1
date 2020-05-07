import React from 'react';
import '../css/LandingPage.css';

//Importar componentes//
import DobleBoton from '../Components/DobleBoton.js';

// import RankingList from '../Components/RankingList.js';

function LandingPage() {

    return (
        <div>            
            <div className="LenguaMatica"> LenguaMatica!</div>

            <div className="mainBox">
                <DobleBoton />     

            
            </div>

            { /*
            <h1> Ranking: </h1>
            <RankingList />
            */ }
        </div>
    );
}

export default LandingPage;
