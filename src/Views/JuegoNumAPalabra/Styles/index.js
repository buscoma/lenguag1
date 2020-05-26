import { makeStyles } from "@material-ui/core/styles";

import {Background} from "../Assets";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundColor: "#e0da62",
    height: "100vh",
    padding: "30px",
    textAlign: "center",
  },
  paper: {
    padding: "35px",
    marginBottom: "25px",
    fontSize: "22px",
    fontWeight: "bold",
    fontFamily: "inherit",
    backgroundColor: "white",
    color: "black",
    cursor: "pointer",
    opacity: "0.85",
    "&:hover": {
      backgroundColor: "white",
      opacity: "1",
      fontSize: "24px",
    },
    "&:focus": {
      backgroundColor: "white",
      opacity: "1",
      fontSize: "24px",
    },
  },
  paperCorrecta: {
    padding: "35px",
    marginBottom: "25px",
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "inherit",
    backgroundColor: "#e0da62",
    color: "white",
    cursor: "pointer",
    opacity: "1",
  },
  paperIncorrecta: {
    padding: "35px",
    marginBottom: "25px",
    fontSize: "22px",
    fontWeight: "bold",
    fontFamily: "inherit",
    backgroundColor: "red",
    color: "black",
    cursor: "pointer",
    opacity: "0.85",
  },
  containerOpciones: {
    marginTop: "50px",
  },
  paperNumero: {
    opacity: "0.85",
    borderRadius: "35px",
  },
}));

export default useStyles;