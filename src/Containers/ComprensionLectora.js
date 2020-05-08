import React, { useEffect, useState } from "react";
import * as BaseStyle from "../css/BaseStyle.js";
import controller from "../Controllers/ComprensionLectoraCtrl"
import {
  CssBaseline,
  Container,
  Typography,
  CircularProgress,
  Paper,
  Grid,
  Button,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Background } from "../Images";

export default function ComprensionLectora(props) {
  const [nivel, setNivel] = useState(1);
  const [loading, setLoading] = useState(true);
  const [startGame, setStartGame] = useState(true);
  const [gameState, setGameState] = useState({
    perdio: false,
  });
  const [data, setData] = useState({});
  useEffect(() => {
    let _data = controller.fetchData();
    console.log({data: data})
    setData(_data)
    setLoading(false)
  }, []);

  const root = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  const useStyles = makeStyles({
    root,
    TitleH1: BaseStyle.TitleH1,
    TitleH2: BaseStyle.TitleH2,
    TitleH3: BaseStyle.TitleH3,
    label: BaseStyle.ButtomDefualt,
    container: BaseStyle.ContainerCenter,
    progress: BaseStyle.progress,
    paperCorrecta: BaseStyle.paperCorrecta,
    paperInorrecta: BaseStyle.paperIncorrecta,
    paper: BaseStyle.paper,
  });
  const classes = useStyles(props);
  const subirNivel = () => {
    if (nivel == 3){
      console.log("Ganaste!")
      reiniciar(); // TODO: Dialogo que lleve al siguiente juego !
    }else{
      setNivel(nivel+1);
    }
  };
  const opcionClickHandler = (opcion) => {
    if (opcion.valid) {
      console.log("Correcta!");
      subirNivel();
    } else {
      console.log("Incorrecta");
      setGameState({ perdio: true });
    }
  };
  const reiniciar = () => {
    setGameState({ perdio: false });
  }
  return (
    <div>
      {!loading ? (
        <div className={classes.root}>
          <CssBaseline />
          {startGame && (
            <Container className={classes.container}>
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} style={{ textAlign: "center" }}>
                  <Paper elevation={4}>
                    <Typography className={classes.TitleH2}>
                      {data[nivel].query}
                    </Typography>
                  </Paper>
                </Grid>
                {/* <Grid item xs={12} style={{ textAlign: "center" }}>
                  <Paper elevation={2}>{data[nivel].resp[0].value}</Paper>
                </Grid> */}
                {data[nivel].resp.map((opcion) => (
                  <Grid item xs={12} style={{ textAlign: "center" }}>
                  <Paper
                    className={
                      !gameState.perdio
                        ? classes.paper
                        : opcion.valid
                        ? classes.paperCorrecta
                        : classes.paperIncorrecta
                    }
                    onClick={() =>
                      !gameState.perdio ? opcionClickHandler(opcion): null
                    }
                    key={opcion.value}
                  >
                    {opcion.value}
                  </Paper>
                </Grid>
                ))}
                </Grid>
            </Container>
          )}
        {gameState.perdio ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => reiniciar()}
          >
            Jugar de nuevo
          </Button>
        ) : null}
        </div>
      ) : (
        <div className={classes.root}>
          <CircularProgress color="secondary" size={80} />
        </div>
      )}
    </div>
  );
}
