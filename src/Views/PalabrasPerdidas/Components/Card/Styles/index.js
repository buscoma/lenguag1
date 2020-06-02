import { makeStyles } from '@material-ui/core/styles';



const useStylesPaper = makeStyles({
    root: {
        opacity: 0.85,
        padding: "20px",
    },
    rootBlack:{
        opacity: 0.85,
        padding: "20px",
        backgroundColor: "black"
    }
});

const useStylesCard = makeStyles((theme) => ({
    root:{
        backgroundColor : "white",
    }
}));

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
    useStylesCard,
};
