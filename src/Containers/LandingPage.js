import React from 'react';
import '../css/LandingPage.css';

//Importar componentes//
import DobleBoton from '../Components/DobleBoton.js';
import NavBar from '../Components/NavBar.js';

// import RankingList from '../Components/RankingList.js';

function LandingPage() {
    
    let user = {Name: "Ale" }
    
    return (
        <div>
            <NavBar User={user}/>
            <div className="LenguaMatica"> Juego de Lengua!</div>

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
