import { makeStyles } from '@material-ui/core/styles';



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


const useStyleTypografy = makeStyles((theme) => ({
    Title: {
        textAlign: "center",
        textDecoration : "underline",
        fontWeight : "750",
        color: "white"
    },
   
}));

const useStylesButtom = makeStyles((theme) => ({
    buttomYesOn: {
        [theme.breakpoints.up('md')]: {
            fontSize: "2rem",
        },
    },
    buttomOther: {
        [theme.breakpoints.up('md')]: {
            fontSize: "2rem",
        },
    },
}));

const useStyleCenter = makeStyles((theme) => ({
    center: {
      display : "flex",
      justifyContent: "center",
      alignItems : "center",
      height : "100%"
    },
  
}));

export {
    useStylesPaper,
    useStyleTypografy,
    useStylesButtom,
    useStyleCenter
};
