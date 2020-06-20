// Librerias
import React, { useState, useContext, useEffect } from "react";
import { Button, Container, Typography } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

// Componentes externos
import { AuthContext } from "../../Components/Auth";
import axios from 'axios';

// Componentes internos
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { Background } from "./Assets";
import { TitleH1, ButtomDefualt, ContainerCenter } from "./Styles";

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

  React.useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [])

  let fechdata = async () => {
    let response2 = await fetch("https://backendlenguamaticag1.herokuapp.com/api/player/game");
		let result2 = await response2.json();
  }
  /*
   async function getUser()
   {
           const options = {
             method:'POST',
             mode: "cors",
             headers: {'Content-Type': 'application/json'},
             body: JSON.stringify({name : "matias", password: "laputamadre"})
         };
         try {
             const res = await fetch('https://backendlenguamaticag1.herokuapp.com/api/player/authenticate', options);
             const resObject = await res.json();
             console.log(resObject);
         } catch (error) {
             console.error('Error: ', error);
         }
   };*/


  const getData = () => {

    const options = {
      mode : "cors",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: "ma3as", password: "laputamadre" })
    };
    return axios.post("https://backendlenguamaticag1.herokuapp.com/api/player/authenticate", options)
      .then((response) => {
        console.log("hola aca");
        console.log(response.token);
      }).catch((err) => {
        console.log("ESTE ERROR")
        console.log(err);
      });
  }

/*  const insertUser = async (userData) => {
      
      console.log(userData);
      const endpoint = `${url}`;
      const options = {
          method:'POST',
          mode: "cors",
          headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'},
          body: JSON.stringify(userData)
      };
      try {
          const res = await fetch(endpoint, options);
          if(res.ok === true) {
              alert("Se ha agregado el usuario");
          } else {
              const resObject = await res.json();
              console.log(resObject);
          }
      } catch(error) {
          console.error('Error: ', error);
      }
  };*/

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
