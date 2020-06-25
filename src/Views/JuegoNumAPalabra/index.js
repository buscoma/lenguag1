// Librerias
import React, { useState, useEffect } from "react";
import { Container, Paper, Typography, Button } from "@material-ui/core";

// Componentes externos
import LayoutGame from "../../Components/Layout/LayaoutContainer";

// Componentes internos
import { obtenerNivel } from "./Controller";
import styles from "./Styles";
import { Background } from "./Assets";

const JuegoNumAPalabra = (props) => {
  const classes = styles();

  const [nivelState, setNivelState] = useState({
    dificultad: 1,
    // nivel: controller.obtenerNivel(1),
    nivel: null,
    perdio: false,
  });

  const [gameState, setGameState] = useState({
    perdio: false,
  });

  const [loading, setLoading] = useState(true);

  //LAYOUT HOOK NEW
  const [winner, setWinner] = useState(false);
  const [loser, setLoser] = useState(false);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    recuperarNivel(1);
  }, []);

  const recuperarNivel = (dificultad) => {
    setLoading(true);
    var promise = obtenerNivel(dificultad);
    promise.then((data) => {
      setNivelState({ dificultad: dificultad, nivel: data });
      setLoading(false);
    });
  };

  const opcionClickHandler = (opcion) => {
    if (opcion.correcta === true) {
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
    recuperarNivel(nuevaDificultad);
  };

  const reiniciar = () => {
    recuperarNivel(1);
  };

  return loading ? (
    "..."
  ) : (
    <LayoutGame
      level={nivelState.nivel.numero}
      points={points}
      game="PalabrasNumeros"
      winner={winner}
      loser={loser}
      backgroundImage={Background}
    >
      <Container className={classes.container}>
        <Typography variant="h2" style={{ fontWeight: "bold" }}>
          <Paper elevation={4} className={classes.paperNumero}>
            {nivelState.nivel.numero}
          </Paper>
        </Typography>
        <Container className={classes.containerOpciones}>
          {nivelState.nivel.respuestas.map((opcion) => (
            <Paper
              elevation={4}
              className={
                !gameState.perdio
                  ? classes.paper
                  : opcion.correcta
                  ? classes.paperCorrecta
                  : classes.paperIncorrecta
              }
              onClick={() =>
                gameState.perdio ? null : opcionClickHandler(opcion)
              }
              key={opcion.descripcion}
            >
              {opcion.descripcion}
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
