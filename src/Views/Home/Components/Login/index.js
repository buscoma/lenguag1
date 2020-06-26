// Librerias
import React, { useState } from "react";
import { TextField, Button, Dialog, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';
// Componentes internos
import { TextBold, TextBlackShadow } from "./Styles";
import {
  paperScrollPaper,
  button,
  paper,
  logo,
  logoClose,
  input,
} from "./Styles/BaseLineDialog";
import { RegistrarLogo, CloseLogo } from "./Assets";
import {login} from "../../../../AuthProvider";

function Login(props) {
  const API_URL = "https://backendlenguamaticag1.herokuapp.com";
  const [invalidPassword, setInvalidPassword] = useState(false);
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
    TextBlackShadow,
    logo,
    logoClose,
    TitleH2: {
      fontSize: "2rem",
      padding: ".7rem",

      textAlign: "center",
      "@media (min-width: 768px)": {
        fontSize: "2.5rem",
        padding: "1.5rem",
      },
    },
    TextBold,
    button,
    input,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(API_URL + '/api/player/authenticate', {
      name: values.name,
      password: values.password,
    }).then(res => {
      if (res.status === 200){
        login(res.data);
        props.history.push('/landing_page')
      } else{
        
      }
    }).catch((err) => {
      setInvalidPassword(true);
      console.log(err);
    });
  };


  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const classes = useStyles(props);
  
  return (
      
      <Dialog open={true} classes={props} onBackdropClick={props.show}>
        <form onSubmit={e => handleSubmit(e)} noValidate autoComplete="on">
          <Container style={{margin:".2rem"}}>
            <Grid flex container spacing={2} alignItems="center">
              <Grid flex item xs={12} style={{ textAlign: "right" }}>
                <img
                  src={CloseLogo}
                  onClick={props.show}
                  className={classes.logoClose}
                  alt="Logo"
                />
              </Grid>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <img
                  src={RegistrarLogo}
                  style={{ height: "15vh", width: "15vh" }}
                  alt="Logo"
                />
              </Grid>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <Typography
                  className={
                    classes.TitleH2 +
                    " " +
                    classes.TextBold +
                    " " +
                    classes.TextBlackShadow
                  }
                >
                  Inicia sesión o registrate
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                //justify="strech"
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
                  className={classes.input}
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
                  className={classes.button}
                  variant="outlined"
                  type="submit"
                  color="primary"
                >
                  Iniciar
                </Button>
              </Grid>
              <Grid item xs={12} style={{ textAlign: "center" }}>
              {invalidPassword ? <Alert severity="error"> Ese nombre de usuario ya se encuentra registrado, ¿tenes otro? </Alert>: null}
              </Grid>
            </Grid>
          </Container>
        </form>
      </Dialog>
  );
}

export default withRouter(Login);