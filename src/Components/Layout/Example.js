
import React,  { useState } from 'react';
import MyComponent from './LayaoutContainer';
import BackgroundImage from './background.jpg';
import Button from '@material-ui/core/Button';

export default function Example(props){
    //ok
    const [puntos, setPuntos] = useState(0);
    const [nivel, setNivel] = useState(1);
    
    //OLD
    const [dialog, setDialog] = useState("bienvenido");
    const [show, setShow] = useState(false);
    const [winner, setWinner] = useState(false);
    const [loser, setLoser] = useState(false);

    const [nextLevel, setNextLevel] = useState(false);

    return (
         <MyComponent
            level={nivel}
            points={puntos}
            game="Example"
            winner={winner}
            loser={loser}
            
            show={show}
            setShow={setShow}
            stateOfGame={dialog}
            backgroundImage={BackgroundImage}
            >
                            <Button variant="contained" color="primary"  onClick={()=> {setWinner(true)}}>
                                GANAE {winner}
                            </Button>
                            <Button variant="contained" onClick={()=> {setDialog("Perdiste");setShow(true);}} color="primary" >
                                Suinte nivel
                            </Button>
                            <Button variant="contained" onClick={()=> {setLoser(true)}} color="primary" >
                                PERDI 
                            </Button>
                            <Button variant="contained" onClick={()=> {setDialog("Fin");setShow(true);}} color="primary" >
                                Fin
                            </Button>
                            <Button variant="contained" color="primary"  onClick={()=> setPuntos(puntos + 1)}>
                                SUMAR PUTNOS
                            </Button>
                            <Button variant="contained" color="primary"  onClick={()=> setNivel(nivel + 1)}>
                                SUBIR DE NIVEL {nivel}
                            </Button>
        </MyComponent>
    );

}