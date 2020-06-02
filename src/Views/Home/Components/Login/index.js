// Librerias
import React, { useContext, useState, useCallback } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { TextField, Button, Dialog, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

// Componentes externos
import { AuthContext } from "../../../../Components/Auth";
import firebaseAuth from "../../../../Components/Firebase";

// Componentes internos
import { TextBold, TextBlackShadow } from "./Styles";
import {
  paperScrollPaper,
  buttom,
  paper,
  logo,
  logoClose,
  input,
} from "./Styles/BaseLineDialog";
import { RegistrarLogo, CloseLogo } from "./Assets";

export default function Login(props) {
  const [values, setValues] = useState({
    email: "",
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
    buttom,
    input,
  });
  const history = useHistory();
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        await firebaseAuth
          .auth()
          .signInWithEmailAndPassword(values.email, values.password);
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
  const handleRegister = () => {
    props.show();
    props.showSignUp();
  };
  const classes = useStyles(props);
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/landing_page" />;
  }
  return (
    <Dialog open={true} classes={classes} onBackdropClick={props.show}>
      <form onSubmit={handleSubmit} noValidate autoComplete="on">
        <Container>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} style={{ textAlign: "right" }}>
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
                value={values.email}
                onChange={handleChange("email")}
                fullWidth
                placeholder="Email"
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
                placeholder="Password"
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
                Iniciar
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              justify="center"
              alignItems="center"
              style={{ textAlign: "center" }}
            >
              <Typography className={classes.TitleH2 + " " + classes.TextBold}>
                {" "}
                No estás registrado aún?{" "}
              </Typography>
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
                onClick={() => handleRegister()}
                color="secondary"
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
