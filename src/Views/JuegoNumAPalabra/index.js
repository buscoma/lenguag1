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

  //Layout hook
  const [show, setShow] = useState(false);
  const [stateOfGame, setStateOfGame] = useState("Enunciado");

  const opcionClickHandler = (opcion) => {
    if (opcion.Correcta === true) {
      setStateOfGame("WINNER");
      setShow(true);
      console.log("Correcta!");
      subirNivel();
    } else {
      setStateOfGame("LOSER");
      setShow(true);
      console.log("Incorrecta");
      setGameState({ perdio: true });
    }
  };

  const subirNivel = () => {
    if (nivelState.dificultad === 3) {
      setStateOfGame("END");
      setShow(true);
      return;
    }

    var nuevaDificultad = nivelState.dificultad + 1;
    setNivelState({
      dificultad: nuevaDificultad,
      nivel: controller.obtenerNivel(nuevaDificultad),
    });
  };

  const reiniciar = () => {
    setGameState({ perdio: false });

    setNivelState({
      dificultad: 1,
      nivel: controller.obtenerNivel(1),
    });
  };

  return (
    <LayoutGame
      backgroundImage={Background}
      title="Numeros a palabras"
      enunciado="Selecciona el como se escribe el numero en la parte superiro"
      show={show}
      setShow={setShow}
      stateOfGame={stateOfGame}
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
