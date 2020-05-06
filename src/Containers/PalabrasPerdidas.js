import React from 'react';
import '../css/PalabrasPerdidas/palabrasPerdidas.css';

//Importar componentes//
import Board from '../Components/Board';
import Card from '../Components/Card';

const row = [
    {
        id: '1',
        palabra: 'busca',
        frase_frente:'Mi hermano',
        frase_atras:'sus gafas'
    },
    {
        id: '2',
        palabra: 'hizo',
        frase_frente:'El pintor',
        frase_atras:'su primera exposición'
    },
    {
        id: '3',
        palabra: 'gusta',
        frase_frente:'A la niña le',
        frase_atras:'ir al jardín'
    },
]

function PalabrasPerdidas() {

    return (
        <div >
            <div className="header">
                <h1> Palabras perdidas </h1>
                <p> Completa las frases utilizando las palabras del recuadro </p>
            </div>
            
            <div className="row">

                <div className="column side">                
                    <div className="boxPalabras">
                        <Board id="board-0" className="board">
                            {row.map((item) => <Card id={item.id} draggable="true"> <p> {item.palabra} </p> </Card> )}
                        </Board>
                    </div>
                </div>
                
                <div className="column middle">
                    {row.map((item) =>  
                        <div className="clearfix">
                            <p> {item.frase_frente}
                            <div className="flexbox">
                            <Board id="board-1" className="board">
                            </Board>
                        </div>
                        {item.frase_atras}  </p>                             
                    </div>
                    )}                    
                </div>
            </div>

        </div>
    );
}

export default PalabrasPerdidas;
