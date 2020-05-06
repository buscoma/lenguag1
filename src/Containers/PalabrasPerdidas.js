import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import '../css/PalabrasPerdidas/palabrasPerdidas.css';
import CssBaseline from '@material-ui/core/CssBaseline';

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
            <Container>   
                <CssBaseline />     
                <div className="header">
                    <h1> Palabras perdidas </h1>
                    <p> Completa las frases utilizando las palabras del recuadro </p>
                </div>
                
                <Grid container spacing={3} className="row">

                    <Grid item xs={3}>
                        <div className="boxPalabras">
                            <Board id="board-0" className="board">
                                {row.map((item) => <Card id={item.id} draggable="true"> <p> {item.palabra} </p> </Card> )}
                            </Board>
                        </div>
                    </Grid>
                    <Grid item xs={9}>
                        <div>
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
                    </Grid>
                </Grid>
            </Container>

    );
}

export default PalabrasPerdidas;
