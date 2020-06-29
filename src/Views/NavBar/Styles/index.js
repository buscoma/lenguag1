import { makeStyles } from "@material-ui/core/styles";
import {WoodGrain} from "../Assets";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontWeight: "bold",
  },
  mainBkg: {
    backgroundImage: "url(" + WoodGrain + ")",
  },
  homeIcon: {
    fontSize: "25pt",
  },
  usuario: {
    display: "inline",
    float: "right",
    textAlign: "right",
  },
  flexbox: {
    display:"-webkit-box",
    display:"-moz-box",
    display:"-ms-flexbox",
    display:"-webkit-flex",
    display:"flex"
  },
  rightHold: {
    marginLeft:"auto",
    alignItems:"center"
  },
  userspan:{
    marginLeft: "10px"
  }
}));

export { useStyles};
