import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../../Components/NavBar";
import Enunciados from "./Components/Enunciados";

import {
    DialogPanel,
    DialogNextLevel,
    DialogFinishGame,
    DialogLoserGame,
} from "./Components";

export default function LayoutContainer(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            padding: "20px",
            height: "92vh",
            overflow: "hidden",
            [theme.breakpoints.down("sm")]: {
                overflowY: "scroll",
            },
        },
        rootImage: {
            backgroundImage: `url(${props.backgroundImage})`,
            backgroundSize: "cover",
            height: "100vh",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
        },
        rootPaper: {
            width: "100%",
            height: theme.spacing(9),
            padding: "10px",
        },
        colorPaper: {
            backgroundColor: props.backgroundPaper,
        },
        //TEXT STYLE
        TitleH1: {
            fontSize: "3rem",
            fontWeight: "bold",
        },
        TitleH3: {
            fontSize: "2rem",
            color: props.color,
            fontWeight: "bold",
        },
        Text: {
            fontSize: "1.5rem",
            color: props.color,
        },
        gutterBottom: {
            margin: "0px",
        },
        center: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
    }));

    const classes = useStyles();
    const [panelDialogOpen, setPanelDialogOpen] = useState(true);
    const handlePanel = () => {
        setPanelDialogOpen(!panelDialogOpen);
    };

    return (
        <div className={classes.rootImage}>
            <NavBar
                showPanel={panelDialogOpen}
                handleShowPanel={handlePanel}
            />
            <CssBaseline />

            <DialogPanel
                open={panelDialogOpen}
                onClose={handlePanel}
                level={props.level}
                points={JSON.parse(sessionStorage.getItem("User")).points}
                title={Enunciados[props.game].title}
                description={Enunciados[props.game].description}
            />

            <DialogNextLevel flagAndLevel={props.level} points={JSON.parse(sessionStorage.getItem("User")).points} />

            <DialogFinishGame
                level={props.level}
                points={JSON.parse(sessionStorage.getItem("User")).points}
                openFlag={props.winner}
            />

            <DialogLoserGame
                points={JSON.parse(sessionStorage.getItem("User")).points}
                openFlag={props.loser}
                urlGameAgein={Enunciados[props.game].urlGame}
            />

            <Container maxWidth="xl" className={classes.root}>
                <Grid container>
                    <Grid item xs={12}>
                        {props.children}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
