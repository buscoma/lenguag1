// Librerias
import React, { useState } from "react";
import { Container, Paper, Typography, Button } from "@material-ui/core";

// Componentes externos
import LayoutGame from '../../Components/Layout/LayaoutContainer';

// Componentes internos
import controller from "./Controller";
import styles from "./Styles";
import {Background} from "./Assets";

const JuegoNumAPalabra = (props) => {
  const classes = styles();

  const [nivelState, setNivelState] = useState({
    dificultad: 1,
    nivel: controller.obtenerNivel(1),
    perdio: false,
  });

  const [gameState, setGameState] = useState({
    perdio: false,
  });

  //LAYOUT HOOK NEW
  const [winner, setWinner] = useState(false);
  const [loser, setLoser] = useState(false);
  const [points, setPoints] = useState(0);

  const opcionClickHandler = (opcion) => {
    if (opcion.Correcta === true) {
      //WIINER
      console.log("Correcta!");
      subirNivel();
    } else {
      //LOSER
      console.log("Incorrecta");
      setGameState({ perdio: true });
    }
  };

  const subirNivel = () => {
    if (nivelState.dificultad === 3) {
      //GAME IS OVER, THE USER WINNER
      setWinner(true);
      return;
    }

    var nuevaDificultad = nivelState.dificultad + 1;
    setNivelState({
      dificultad: nuevaDificultad,
      nivel: controller.obtenerNivel(nuevaDificultad),
    });
  };

  const reiniciar = () => {

    setNivelState({
      dificultad: 1,
      nivel: controller.obtenerNivel(1),
    });
  };

  return (
    <LayoutGame
      level={nivelState.nivel.nivel}
      points={points}
      game="PalabrasNumeros"
      winner={winner}
      loser={loser}
      backgroundImage={Background}
    >
      <Container className={classes.container}>
        <Typography variant="h2" style={{ fontWeight: "bold" }}>
          <Paper elevation={4} className={classes.paperNumero}>
            {nivelState.nivel.Numero}
          </Paper>
        </Typography>
        <Container className={classes.containerOpciones}>
          {nivelState.nivel.Respuestas.map((opcion) => (
            <Paper
              elevation={4}
              className={
                !gameState.perdio
                  ? classes.paper
                  : opcion.Correcta
                  ? classes.paperCorrecta
                  : classes.paperIncorrecta
              }
              onClick={() =>
                gameState.perdio ? null : opcionClickHandler(opcion)
              }
              key={opcion.Descripcion}
            >
              {opcion.Descripcion}
            </Paper>
          ))}
        </Container>
        {gameState.perdio ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => reiniciar()}
          >
            Jugar de nuevo
          </Button>
        ) : null}
      </Container>
    </LayoutGame>
  );
};

export default JuegoNumAPalabra;
