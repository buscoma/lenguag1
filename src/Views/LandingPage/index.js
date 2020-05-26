import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

// Componentes internos
import CuadrupleBoton from "./Components/CuadrupleBoton";
import { TitleH1 } from "./Styles";
import "./Styles/LandingPage.css";

// Componentes externos
import NavBar from "../../Components/NavBar";

const useStyles = makeStyles({
  TitleH1,
});

export default function LandingPage() {
  let user = { Name: "Ale" };
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <NavBar User={user} />

      <div className="mainBox">
        <div className={classes.TitleH1}> Juego de LenguaMática!</div>
        <CuadrupleBoton type={"leng"}/>
        <CuadrupleBoton type={"math"}/>
      </div>
    </div>
  );
}
