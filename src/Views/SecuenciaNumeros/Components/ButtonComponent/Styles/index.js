import { makeStyles } from '@material-ui/core/styles';



const useStylesPaper = makeStyles({
  root: {
    opacity: 0.85,
    padding: "20px",
  },
});

const useStyleTypografy = makeStyles((theme) => ({
  questionTitle: {
    textAlign: "center",
    fontSize: "1.2rem",
    fontWeight: "750",
    [theme.breakpoints.up('md')]: {
      fontSize: "2.5rem",
    },
  },
  wordSubTitle: {
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "1000",
    [theme.breakpoints.up('md')]: {
      fontSize: "2.5rem",
    },
  }
}));

const useStylesButtom = makeStyles((theme) => ({
  text: {
    // Some CSS
    backgroundColor: "#FFD740",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 100,
    width: 100,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    color: "white",
    height: "12vw",
    width: "12vw",
    //SCALE FOR TABLET
    "@media (min-width: 768px)": {
      height: "8vw",
      width: "8vw",
    },
  },
  root:{
    margin: theme.spacing(2),
  }
}));

const useStyleAlert = makeStyles((theme) => ({
  alert: {
    [theme.breakpoints.up('md')]: {
      fontSize: "2rem",
    },
  },
}));

export {
  useStylesPaper,
  useStyleTypografy,
  useStylesButtom,
  useStyleAlert,
};
