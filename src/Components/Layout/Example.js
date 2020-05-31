
import React,  { useState } from 'react';
import MyComponent from './LayaoutContainer';
import BackgroundImage from './background.jpg';
import Button from '@material-ui/core/Button';

export default function Example(props){

    const [gane, setGane] = useState(false);
    const [perdi, setPerdi] = useState(false);
    const [puntos, setPuntos] = useState(0);
    const [nivel, setNivel] = useState(1);


    return (
        <MyComponent
            level={nivel}
            points={puntos}
            showerWinner={gane}
            setShowWinner={setGane}
            showLoser={perdi}
            setShowLoser={setPerdi}
            backgroundImage={BackgroundImage}
            color="white"
            backgroundPaper="rgba(0,0,0,.3)"
            enunciado={"un par de horas, por favor?!!?!lEl juego se trata de no romper las bolar a los padres por un par de horas, por favor?!!?!lEl juego se trata de no romper las bolar a los padres por un par de horas, por favor?!!?!lEl juego se trata de no romper las bolar a los padres por un par de horas, por favor?!!?!l"}
        >
           HOLA
           <Button variant="contained" color="primary"  onClick={()=> {setGane(true);console.log(gane)}}>
                                GANAE
                            </Button>
                            <Button variant="contained" onClick={()=> setPerdi(true)} color="primary" >
                                PERDI
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