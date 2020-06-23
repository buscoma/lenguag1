// Librerias
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { TextField, Button, Dialog } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

// Componentes internos
import { RegistrarLogo, CloseLogo } from "./Assets";
import { TitleH2, TextBold } from "./Styles";
import {
  paperScrollPaper,
  buttom,
  paper,
  logo,
  logoClose,
} from "./Styles/BaseLineDialog";

function SignUp(props) {
  const API_URL = "https://backendlenguamaticag1.herokuapp.com";
  const [values, setValues] = useState({
    name: "",
    password: "",
  });
  const useStyles = makeStyles({
    root: {
      padding: "1rem",
    },
    paperScrollPaper,
    paper,
    logo,
    logoClose,
    TitleH2,
    TextBold,
    buttom,
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(API_URL + '/api/player/authenticate', {
      name: values.name,
      password: values.password,
    }).then(res => {
      console.log(res.data)
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('refresh', res.data.refresh);
      props.history.push('/landing_page')
    }).catch((err) => {
      console.log(err);
    });
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const classes = useStyles(props);
  
  return (
    <Dialog open={true} classes={classes} onBackdropClick={props.show}>
      <form onSubmit={e => handleSubmit(e)} noValidate autoComplete="on">
        <Container>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} style={{ textAlign: "right" }}>
              <img
                src={CloseLogo}
                onClick={props.show}
                className={classes.logoClose}
                alt="React Logo"
              />
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <img
                src={RegistrarLogo}
                className={classes.logo}
                alt="React Logo"
              />
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Typography className={classes.TitleH2 + " " + classes.TextBold}>
                Regístrate para jugar!!
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              justify="strech"
              alignItems="center"
              style={{ textAlign: "center" }}
            >
              <TextField
                className={classes.textField}
                value={values.name}
                onChange={handleChange("name")}
                fullWidth
                placeholder="Nombre de usuario"
              />
            </Grid>
            <Grid
              item
              xs={12}
              justify="center"
              alignItems="center"
              style={{ textAlign: "center" }}
            >
              <TextField
                className={classes.textField}
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
              justify="center"
              alignItems="center"
              style={{ textAlign: "center" }}
            >
              <Button
                className={classes.buttom}
                variant="outlined"
                type="submit"
                color="primary"
              >
                Registrarse
              </Button>
            </Grid>
          </Grid>
        </Container>
      </form>
    </Dialog>
  );
}

export default withRouter(SignUp);