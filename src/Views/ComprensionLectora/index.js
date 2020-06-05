// Librerias
import React, { useState } from "react";
import {
  Container,
  makeStyles,
  Paper,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";

// Componentes externos
import LayaoutGame from '../../Components/Layout/LayaoutContainer';

// Componentes internos
import * as BaseStyle from "./Styles";
import controller from "./Controller";
import { Background } from "./Assets";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  containerOpciones: {
    /* MOBILE */
    alignSelf: "strech",
    justifyContent: "center",
    padding: ".1rem",
    display: "flex",
    label: {
      color: "white",
      height: "12vw",
      width: "12vw",
      //SCALE FOR TABLET
      "@media (min-width: 768px)": {
        height: "8vw",
        width: "8vw",
      },
    },
    flexDirection: "column",
    /* TABLET */
    "@media (min-width: 768px)": {
      fontSize: "2rem",
      padding: "2rem",
    },
    "@media (min-width: 1000px)": {
      fontSize: "6rem",
      padding: "2rem",
      alignSelf: "Center",
      textAlign: "center",
      maxWidth: "900px",
    },
  },
  container: BaseStyle.ContainerCenter,
  H1: BaseStyle.TitleH1,
  H2: {
    fontSize: "1.5rem",
    padding: ".7rem",
    textAlign: "center",
    "@media (min-width: 768px)": {
      fontSize: "2rem",
      padding: ".5rem",
    },
  },
  H3: {
    fontSize: "1.5rem",
    padding: ".5rem",
    color: "white",
    textAlign: "center",
    textShadow: "1px 1px 1px black",
    "@media (min-width: 768px)": {
      fontSize: "3rem",
      padding: "1rem",
    },
  },
  paper: BaseStyle.paper,
  paperCorrecta: BaseStyle.paperCorrecta,
  paperIncorrecta: BaseStyle.paperIncorrecta,
  paperNumero: BaseStyle.paperNumero,
}));

const ComprensionLectora = (props) => {
  const classes = useStyles();

  const [nivelState, setNivelState] = useState({
    dificultad: 1,
    nivel: controller.obtenerNivel(1),
    perdio: false,
  });

  //Layout hook
  const [puntos, setPuntos] = useState(0);
  const [winner, setWinner] = useState(false);
  const [loser, setLoser] = useState(false);

  const [gameState, setGameState] = useState({
    perdio: false,
  });

  const opcionClickHandler = (opcion) => {
    if (opcion.Correcta === true) {
      console.log("Correcta!");
      subirNivel();
    } else {
      setLoser(true);
      console.log("Incorrecta");
    }
  };

  const subirNivel = () => {
    if (nivelState.dificultad === 3) {
      //alert("ganaste!");
      //EL juego termino.
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
    setGameState({ perdio: false });

    setNivelState({
      dificultad: 1,
      nivel: controller.obtenerNivel(1),
    });
  };

  return (
    <LayaoutGame 
      level={nivelState.dificultad}
      points={puntos}
      winner={winner}
      loser={loser}
      game="CompresionLectora"
      backgroundImage={Background}
    >
      <div className={classes.root}>
        <Container className={classes.container}>
          <Grid container>
            <Grid item xs={12}>
              <Typography className={classes.H3}>
                <Paper className={classes.paperNumero}>
                  {"Nivel " + nivelState.dificultad}
                </Paper>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography className={classes.H2}>
                <Paper className={classes.paperNumero}>
                  {nivelState.nivel.Pregunta}
                </Paper>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Container className={classes.containerOpciones}>
                {nivelState.nivel.Respuestas.map((opcion) => (
                  <Typography className={classes.H3}>
                    <Paper
                      elevation={4}
                      style={{ marginBottom: "0px" }}
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
                  </Typography>
                ))}
              </Container>
            </Grid>
          </Grid>
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
      </div>
    </LayaoutGame>
  );
};

export default ComprensionLectora;
