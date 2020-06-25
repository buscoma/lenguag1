import { makeStyles } from "@material-ui/core/styles";




const useStylesPaper = makeStyles({
  root: {
      opacity: 0.85,
      padding: "20px",
      maxWidth : "1024PX",
      backgroundColor: "white",
  },
  rootBlack:{
      opacity: 0.85,
      padding: "20px",
      backgroundColor: "black",
      minHeight: "300px",
      minWidth : "200px",
  }
});

const useStylesCenter = makeStyles({
  center: {
      display : "flex",
      justifyContent: "center",
      alignItems: "center"
  },
  
});

export {  useStylesPaper, useStylesCenter };
