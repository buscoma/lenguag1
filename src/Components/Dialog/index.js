import React, { useContext, useState, useCallback } from "react";
import { useHistory, Redirect } from "react-router-dom";


import { Button, Dialog, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

// Componentes internos
import useStyles from "./Styles";
import controller from "./Controller";
//import { GanasteSvg, PerdisteSvg, BienvenidoSvg } from "./Assets";
import GanasteSvg from "./Assets/ganaste.svg"
import PerdisteSvg from "./Assets/perdiste.svg"
import BienvenidoSvg from "./Assets/bienvenido.svg"

// Componentes externos
import { AuthContext } from "../Auth";
import firebaseAuth from "../Firebase";

/*
El componente dialogo tiene los siguientes propiedades
- nivel={nivel} posibles valores 1, 2, 3
- resultado="Ganador" posibles valores "Ganador", "Perdedor", "NombreDeSuJuego" 
Respecto al nombre  del juego lo selecciona ustedes, lo importante es que el mismo nombre que utilicen 
en el dialog, lo utilicen apra crear un elemento en el json de abajo con la descripcion de su juego.
*/

const SelectImagen = function (estado) {
  if (estado === "Ganaste") {
    return GanasteSvg;
  }
  if (estado === "Perdiste") {
    return PerdisteSvg;
  }
  return BienvenidoSvg;
};

export default function DialogMessage(props) {
  const [values, setValues] = useState({
    email: "",
    password: "",
    // Gano, perdio o bienvenido
    name: props.tipo,
    // El nivel en el que esta o al que pasa
    nivel: props.nivel,
    volverJugar: props.volverJugar,
    volverPagAnterior: props.volverPagAnterior,
    siguienteNivel: props.siguienteNivel,
  });

  const history = useHistory();

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        await firebaseAuth
          .auth()
          .createUserWithEmailAndPassword(values.email, values.password);
        history.push("/landing_page");
      } catch (error) {
        alert(error);
      }
    },
    [history, values]
  );
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const classes = useStyles(props);

  return (
    <Dialog
      open={true}
      classes={classes}
      onBackdropClick={props.show}
      scroll="body"
    >
      <form onSubmit={handleSubmit} noValidate autoComplete="on">
        <Container alignItems="center">
          <Grid container spacing={3} style={{ textAlign: "center" }}>
            <Grid item xs={12}>
              <img
                src={SelectImagen(values.name)}
                onClick={props.show}
                className={classes.logo}
                alt="img"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.TitleH2}>{values.name}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.TitleH2}>
                Nivel {values.nivel}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.text}>
                {
                  controller.filter(function (item) {
                    return item.name === values.name;
                  })[0].descripcion
                }
              </Typography>
            </Grid>
            {values.volverPagAnterior ? (
              <Grid item xs={12} sm={6} style={{ maxHeight: "100px" }}>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  href={values.volverPagAnterior}
                  spacing={2}
                >
                  Salir
                </Button>
              </Grid>
            ) : null}
            {props.bienvenida ? (
              <Grid item xs={3} sm={6} style={{ maxHeight: "100px" }}>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  onClick={props.show}
                  spacing={2}
                >
                  Jugar
                </Button>
              </Grid>
            ) : null}
            {values.volverJugar ? (
              <Grid item xs={3} sm={6}>
                <Button
                  variant="contained"
                  size="large"
                  href={values.volverJugar}
                  color="primary"
                  spacing={2}
                >
                  Jugar otra vez
                </Button>
              </Grid>
            ) : null}
            {values.siguienteNivel ? (
              <Grid item xs={6} sm={12}>
                <Button
                  variant="contained"
                  size="large"
                  href={values.siguienteNivel}
                  color="primary"
                  spacing={2}
                >
                  Jugar siguiente nivel
                </Button>
              </Grid>
            ) : null}
          </Grid>
        </Container>
      </form>
    </Dialog>
  );
}
