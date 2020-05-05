import React from 'react';
import '../css/PalabrasPerdidas/palabrasPerdidas.css';

//Importar componentes//
import Board from '../Components/Board';
import Card from '../Components/Card';

function PalabrasPerdidas() {

    return (
        <div >

            <div className="header">
                <h1>Palabras perdidas</h1>
                <p>Completa las frases utilizando las palabras del recuadro</p>
            </div>

            <div className="row">
                <div className="column side">
                
                    <div className="boxPalabras">
                        <Board id="board-0" className="board">
                            <Card id="card-2" draggable="true">   <p> hizo </p>   </Card>
                            <Card id="card-1" draggable="true">   <p> busca</p>   </Card>
                        </Board>
                    </div>
                </div>
                    
                <div className="column middle">            
                    <div className="clearfix">
                        Mi hermano 
                        <div className="flexbox">
                            <Board id="board-1" className="board">
                            </Board>
                        </div>
                        sus gafas
                    </div>
                    
                    <div className="clearfix">
                        <div className="divAlign"> El pintor </div>
                            <div className="flexbox" >
                                <Board id="board-1" className="board">                
                                </Board>
                            </div>
                        <div className="divAlign"> su primera exposición </div>              
                    </div>                
                </div>
            </div>
        </div>
    );
}

export default PalabrasPerdidas;
