import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// Componentes internos
import Table from "./Components/Table";
import { useStyles, useStyleImage } from "./Styles";
import NavBar from "../../Views/NavBar";

export default function Ranking() {
    const classes = useStyles();
    const classesBackgroundImage = useStyleImage();
    return (
        <div className={classesBackgroundImage.rootImage}>
            <NavBar />
            <Container
                maxWidth="xl"
            >
                <div className={classes.root}>
                    <Grid
                        container
                        spacing={5}
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid
                            item
                            xs={12}
                            justify="center"
                            alignItems="center"
                            style={{ textAlign: "center" }}
                        >
                        </Grid> 
                        <Grid item xs={12}>
                            <Table />
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
}
