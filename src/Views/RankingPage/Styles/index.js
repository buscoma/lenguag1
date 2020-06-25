import { makeStyles } from "@material-ui/core/styles";
import { BackgroundPlaya } from "../Assets";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  font: {
    fontWeight: "bolder",
  },
}));


const useStylesPaper = makeStyles({
  root: {
      opacity: 0.85,
      padding: "20px",
      maxWidth : "1024PX",
      backgroundColor: "grey",
  },
  rootBlack:{
      opacity: 0.85,
      padding: "20px",
      backgroundColor: "black",
      minHeight: "300px",
      minWidth : "200px",
  }
});

const useStyleImage = makeStyles({
  rootImage: {
    backgroundImage: `url(${BackgroundPlaya})`,
    backgroundSize: "cover",
    height: "100%",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
},
})

export { useStyles, useStylesPaper,useStyleImage };
