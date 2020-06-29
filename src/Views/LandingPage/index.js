import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

// Librerias
import { Grid, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

// Componentes internos
import CuadrupleBoton from "./Components/CuadrupleBoton";
import { TitleH1, TitleH3 } from "./Styles";
import "./Styles/LandingPage.css";
import { withRouter } from "react-router-dom";
import NavBar from "../../Views/NavBar";

const useStyles = makeStyles({
    TitleH1,
    TitleH3,
    root: {
        margin: "10px",
        backgroundColor: "rgba(255,255,255,0.9)",
    },
});

export default withRouter(function LandingPage() {
    const classes = useStyles();
    return (
        <div className="root">
            <CssBaseline />
            <NavBar />
            <div className="root__container">
                <Grid container justify="center">
                    <Grid item xs={10}>
                        <Paper
                            elevation={3}
                            className={[classes.root].join(" ")}
                        >
                            <Typography
                                className={[
                                    "LenguaMatica",
                                    classes.TitleH1,
                                ].join(" ")}
                            >
                                {" "}
                                LenguaMática!{" "}
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={10} sm={5}>
                        <Paper
                            elevation={3}
                            className={[classes.root].join(" ")}
                        >
                            <Grid container spacing={1} justify="center">
                                <Grid item xs={10}>
                                    <Typography
                                        className={[classes.TitleH3].join(" ")}
                                    >
                                        Lengua
                                    </Typography>
                                </Grid>
                                <Grid item xs={10}>
                                    <CuadrupleBoton type={"leng"} />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={10} sm={5}>
                        <Paper
                            elevation={3}
                            className={[classes.root].join(" ")}
                        >
                            <Grid container spacing={1} justify="center">
                                <Grid item xs={10}>
                                    <Typography
                                        className={[classes.TitleH3].join(" ")}
                                    >
                                        Matemática
                                    </Typography>
                                </Grid>
                                <Grid item xs={10}>
                                    <CuadrupleBoton type={"math"} />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
});
