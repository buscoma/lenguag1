import { makeStyles } from '@material-ui/core/styles';


const useStylesTypografy = makeStyles((theme) => ({
    titleGame: {
        textAlign: "center",
        fontSize: "1.5rem",
        fontWeight: "1000",
        marginBottom: "1em",
        textDecoration: "underline",
        [theme.breakpoints.up('sm')]: {
            fontSize: "2.5rem",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "3.5rem",
        },
    },
    titlePanel: {
        textAlign: "center",
        fontSize: "1.5rem",
        fontWeight: "750",
        marginBottom: ".5em",
        [theme.breakpoints.up('sm')]: {
            fontSize: "2rem",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "2.5rem",
        },
    },
    textPanel: {
        textAlign: "center",
        fontSize: "1.2rem",
        [theme.breakpoints.up('sm')]: {
            fontSize: "1.5rem",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "1.8rem",
        },
    },
    titleEnunciado: {
        textAlign: "center",
        fontSize: "1.5rem",
        fontWeight: "750",
        marginBottom: ".5em",
        [theme.breakpoints.up('sm')]: {
            fontSize: "2rem",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "2.5rem",
        },
    },
}));


const useStylesButtom = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "1rem"
    },
    buttom: {
        [theme.breakpoints.up('sm')]: {
            fontSize: "1.5rem",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "1.8rem",
        },
    },
}));


const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        minHeight: "250px",
        padding: theme.spacing(2),
    },
    closeButtom: {
        position: "absolute",
        top: "0px",
        right: "0px"
    }

}));

export {
    useStyles,
    useStylesTypografy,
    useStylesButtom,
};