
import React,  { useState } from 'react';
import MyComponent from './LayaoutContainer';
import BackgroundImage from './background.jpg';
import Button from '@material-ui/core/Button';

export default function Example(props){

    const [puntos, setPuntos] = useState(0);
    const [nivel, setNivel] = useState(1);
    const [dialog, setDialog] = useState("bienvenido");
    const [show, setShow] = useState(false);
    const [nextLevel, setNextLevel] = useState(false);

    return (
         <MyComponent
            level={nivel}
            nextLevel={nextLevel}
            points={puntos}
            show={show}
            setShow={setShow}
            stateOfGame={dialog}
            backgroundImage={BackgroundImage}
            color="white"
            backgroundPaper="rgba(0,0,0,.3)"
            title="Palabras perdidas"
            enunciado={"un par de horas, por favor?!!?!lEl juego se trata de no romper las bolar a los padres por un par de horas, por favor?!!?!lEl juego se trata de no romper las bolar a los padres por un par de horas, por favor?!!?!lEl juego se trata de no romper las bolar a los padres por un par de horas, por favor?!!?!l"}
        >
                            <Button variant="contained" color="primary"  onClick={()=> {setDialog("Ganaste");setShow(true);}}>
                                GANAE
                            </Button>
                            <Button variant="contained" onClick={()=> {setDialog("Perdiste");setShow(true);}} color="primary" >
                                Suinte nivel
                            </Button>
                            <Button variant="contained" onClick={()=> {setDialog("Perdiste");setShow(true);}} color="primary" >
                                PERDI
                            </Button>
                            <Button variant="contained" onClick={()=> {setDialog("Fin");setShow(true);}} color="primary" >
                                Fin
                            </Button>
                            <Button variant="contained" color="primary"  onClick={()=> setPuntos(puntos + 1)}>
                                SUMAR PUTNOS
                            </Button>
                            <Button variant="contained" color="primary"  onClick={()=> setNivel(nivel + 1)}>
                                SUBIR DE NIVEL
                            </Button>
        </MyComponent>
    );

}