import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// Componentes internos
import Table from "./Components/Table";
import GridGames from "./Components/GridGames";
import {BackgroundPlaya} from "./Assets";
import {useStyles} from "./Styles";

export default function Ranking() {
  const classes = useStyles();
  return (
    <Container
      maxWidth="xl"
      style={{ backgroundImage: "url(" + BackgroundPlaya + ")" }}
    >
      <div className={classes.root}>
        <Grid container spacing={5} justify="space-between" alignItems="center">
          <Grid
            item
            xs={12}
            justify="center"
            alignItems="center"
            style={{ textAlign: "center" }}
          >
            <Typography className={classes.font} variant="h3" noWrap>
              {" "}
              Juguemos{" "}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            justify="center"
            alignItems="center"
            style={{ textAlign: "center" }}
          >
            <GridGames />
          </Grid>
          <Grid item xs={12}>
            <Table />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}