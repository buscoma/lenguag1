// Librerias
import React, { useState } from "react";
import { TextField, Button, Dialog, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';
// Componentes internos

import {
  useStylesDialogLogin,
} from './Style2';

import { RegistrarLogo, CloseLogo } from "./Assets";
import { login } from "../../../../AuthProvider";

function Login(props) {
  const API_URL = "https://backendlenguamaticag1.herokuapp.com";
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [values, setValues] = useState({
    name: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(API_URL + '/api/player/authenticate', {
      name: values.name,
      password: values.password,
    }).then(res => {
      if (res.status === 200) {
        login(res.data);
        props.history.push('/landing_page')
      } else {

      }
    }).catch((err) => {
      setInvalidPassword(true);
      console.log(err);
    });
  };


  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const classesDialogLogin = useStylesDialogLogin();

  return (

    <Dialog open={true} onBackdropClick={props.show} >
      <img src={CloseLogo} onClick={props.show} className={classesDialogLogin.IconClose} alt="Logo" />
      <form onSubmit={e => handleSubmit(e)} noValidate autoComplete="on">
        <Container className={classesDialogLogin.Container}>
          <Grid flex container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <img
                src={RegistrarLogo}
                className={classesDialogLogin.IconWelcome}
                alt="Logo"
              />
            </Grid>
            <Grid item xs={12} >
              <Typography className={classesDialogLogin.title} >
                Inicia sesión o registrate
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
            >
              <TextField
                value={values.name}
                onChange={handleChange("name")}
                fullWidth
                placeholder="Nombre de usuario"
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <TextField
                className={classesDialogLogin.Input}
                value={values.password}
                onChange={handleChange("password")}
                type="password"
                fullWidth
                autoComplete="current-password"
                placeholder="Contraseña"
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <Button
                className={classesDialogLogin.Button}
                variant="outlined"
                type="submit"
                color="primary"
              >
                Iniciar
              </Button>
            </Grid>
            <Grid item xs={12} >
              {invalidPassword ? <Alert severity="error"> Ese nombre de usuario ya se encuentra registrado, ¿tenes otro? </Alert> : null}
            </Grid>
          </Grid>
        </Container>
      </form>
    </Dialog>
  );
}

export default withRouter(Login);