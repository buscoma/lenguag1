import { makeStyles } from "@material-ui/core/styles";



const useStylesDialogLogin = makeStyles((theme) => ({
    IconClose: {
        position: "absolute",
        top: theme.spacing(1),
        right: theme.spacing(1),
        height: "5vh",
        width: "5vw",
        [theme.breakpoints.up('md')]: {
            height: "2vh",
            width: "2vw",
        },
    },
    IconWelcome: {
        /* height: "15vh", width: "15vh" */
        height: "7em",
        width: "7em"
    },
    Container: {
        padding: theme.spacing(3),
        overflow: "hidden",
        textAlign: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: "1.5rem",
        textAlign: "center",
        "@media (min-width: 768px)": {
            fontSize: "2rem",
        },
    },
    Button: {
        fontSize: "1.5rem",
        padding: "1rem",
        fontWeight: "bold",
        /* TABLET */
        "@media (min-width: 1024px)": {
            fontSize: "1rem",
            padding: "1rem",
        },
    },
    Input: {
        fontSize: "4rem",
    }

}));

export {
    useStylesDialogLogin,
};