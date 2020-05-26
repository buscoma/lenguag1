// Librerias
import React, { useState, useContext } from "react";
import { Button, Container, Typography } from "@material-ui/core";
<<<<<<< HEAD:src/Containers/Home.js
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { AuthContext } from "../Components/Auth.js";
import Login from "../Components/Login.js";
import SignUp from "../Components/SignUp.js";
import Background from "../Images/background.jpg";
import CssBaseline from "@material-ui/core/CssBaseline";
import { TitleH1, ButtomDefualt, ContainerCenter } from "../css/BaseStyle.js";
=======
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

// Componentes externos
import { AuthContext } from "../../Components/Auth";

// Componentes internos
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import {Background} from "./Assets";
import { TitleH1, ButtomDefualt, ContainerCenter } from "./Styles";
>>>>>>> develop:src/Views/Home/index.js

const root = {
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  height: "100vh",
  display: "flex",
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
};

const useStyles = makeStyles({
  root,
  TitleH1,
  label: ButtomDefualt,
  container: ContainerCenter,
});

export default function Home(props) {
  const [dialogLogin, setDialogLogin] = useState(false);
  const [dialogSignUp, setDialogSignUp] = useState(false);
  const handleLoginClick = () => {
    setDialogLogin(!dialogLogin);
  };
  const handleSignUpClick = () => {
    setDialogSignUp(!dialogSignUp);
  };
  const classes = useStyles(props);
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    console.log({ currentUser: currentUser });
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container className={classes.container}>
        <ThemeProvider>
          <Typography className={classes.TitleH1}>LenguaMática</Typography>
        </ThemeProvider>
        <Button
          onClick={handleLoginClick}
          variant="contained"
          className={classes.label}
          color="primary"
        >
          Ingresar
        </Button>
        {dialogLogin ? (
          <Login show={handleLoginClick} showSignUp={handleSignUpClick} />
        ) : null}
        {dialogSignUp ? <SignUp show={handleSignUpClick} /> : null}
      </Container>
    </div>
  );
}
