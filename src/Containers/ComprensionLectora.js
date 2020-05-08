import React, { useState } from "react";
import {
  Container,
  makeStyles,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";
import * as BaseStyle from "../css/BaseStyle.js";
import controller from "../Controllers/ComprensionLectoraCtrl";
import { Background } from "../Images";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  containerOpciones: {
    /* MOBILE */
    alignSelf: "strech",
    justifyContent: "center",
    padding: "2rem",
    display: "flex",
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
  H2: BaseStyle.TitleH2,
  H3: BaseStyle.TitleH3,
  paper: BaseStyle.paper,
  paperCorrecta: BaseStyle.paperCorrecta,
  paperIncorrecta: BaseStyle.paperIncorrecta,
  containerOpciones: {
    marginTop: "50px",
  },
  paperNumero: BaseStyle.paperNumero
}));

const ComprensionLectora = (props) => {
  const classes = useStyles();

  const [nivelState, setNivelState] = useState({
    dificultad: 1,
    nivel: controller.obtenerNivel(1),
    perdio: false,
  });

  const [gameState, setGameState] = useState({
    perdio: false,
  });

  const opcionClickHandler = (opcion) => {
    if (opcion.Correcta === true) {
      console.log("Correcta!");
      subirNivel();
    } else {
      console.log("Incorrecta");
      setGameState({ perdio: true });
    }
  };

  const subirNivel = () => {
    if (nivelState.dificultad === 3) {
      alert("ganaste!")
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
    <div className={classes.root}>
      <Container className={classes.container}>
        <Typography className={classes.H1}>
          <Paper className={classes.paperNumero}>
            {"Nivel " + nivelState.dificultad}
          </Paper>
        </Typography>
        <Typography className={classes.H2}>
          <Paper className={classes.paperNumero}>
            {nivelState.nivel.Pregunta}
          </Paper>
        </Typography>
        <Container className={classes.containerOpciones}>
          {nivelState.nivel.Respuestas.map((opcion) => (
            <Typography className={classes.H3}>
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
            </Typography>
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
    </div>
  );
};

export default ComprensionLectora;
