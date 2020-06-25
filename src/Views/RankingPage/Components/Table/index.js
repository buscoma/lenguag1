import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button, Paper, FilledInput, Collapse } from "@material-ui/core";
import { authFetch } from '../../../../AuthProvider';
import { useStylesPaper, useStylesCenter } from './Style';


const useStylesAutoGridNoWrap = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    textAlign: "center",
  },
  topo: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.2rem",
    },
  },
}));

function ColorRanking(posicion) {
  if (posicion === 1) {
    return "rgb(212,175,55)";
  }
  else if (posicion === 2) {
    return "rgb(192,192,192)";
  }
  else if (posicion === 3) {
    return "rgb(224, 155, 91)";
  }
  else {
    return "rgb(231, 231, 231)"
  }

}

function AutoGridNoWrap(props) {

  const classes = useStylesAutoGridNoWrap();
  const [data] = useState(props);
  const backgroundColorPosition = ColorRanking(data.posicion);


  return (
    <div id={data.posicion + 1} className={classes.root}>
      <Paper
        className={classes.paper}
        style={{ backgroundColor: backgroundColorPosition }}
        elevation={3}
      >
        <Grid container wrap="wrap" spacing={2}>
          <Grid item xs={4} sm={4} md={2}>
            <Typography className={classes.topo} noWrap>
              {" "}
              #{data.posicion}
            </Typography>
          </Grid>
          <Grid item xs={8} sm={4} md={6} zeroMinWidth>
            <Typography className={classes.topo} noWrap>
              {data.nombre}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} zeroMinWidth>
            <Typography className={classes.topo} noWrap>
              {data.puntos}pts
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

const useStylesRanking = makeStyles((theme) => ({
  font: {
    fontWeight: "bolder",
    textAlign: "Left",
  },
}));

export default function TableResponsive(props) {
  const classesPaper = useStylesPaper();
  const classesCenter = useStylesCenter();
  const classes = useStylesRanking();

  const [refresh, setRefresh] = useState(false);
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(false);
  const [row, setRow] = useState([]);
  const [name, setName] = useState("");
  const [friend, setFriend] = useState({});
  const [isFindFriend, setIsFindFriend] = useState(false);

  const orderArray = (array) => {
    array.sort((a, b) => (a.points < b.points) ? 1 : -1)
    for (var i = 0; i < array.length; i++) {
      array[i]["posicion"] = i + 1
    }
    return array;
  }

  const findFriend = () => {
    let copyArray = [];
    row.forEach(e => copyArray.push(e));
    let result = copyArray.filter(e => e.name === name)
    if (result.length === 0) {
      setIsFindFriend(false)
    } else {
      setFriend(result[0])
      setIsFindFriend(true)
    }
    console.log(result)
  }

  const myRanking = () => {
    return row.filter(e => e.name === JSON.parse(sessionStorage.getItem("User")).name)
  }

  useEffect(() => {
    async function fetchApi() {
      try {
        setLoading(true);

        await authFetch(
          "https://backendlenguamaticag1.herokuapp.com/api/player/ranking"
        )
          .then((res) => res.json())
          .then((data) => {
            setRow(orderArray(data.data));
          });

      } catch (e) {
        setErrors(e);
      } finally {
        setLoading(false);
      }
    }

    fetchApi();
    setRefresh(false);
  }, [refresh]);


  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      {loading ? (
        "Loading"
      ) : (
          <Container maxWidth="md">
            <Grid container wrap="wrap" spacing={2}>
              <Grid item xs={12}>
                <Paper className={classesPaper.root}>
                  <Grid container>
                    <Grid item xs={12} md={12}>
                      <Typography className={classes.font} variant="h3" noWrap>Mi Ranking</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      {row ? myRanking().map(e => (
                        <AutoGridNoWrap
                          posicion={e.posicion}
                          nombre={e.name}
                          puntos={e.points}
                        />)) : ""}
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classesPaper.root}>
                  <Grid container>
                    <Grid item xs={12} md={6}>
                      <Typography className={classes.font} variant="h3" noWrap>Buscar a un amigo</Typography>
                    </Grid>
                    <Grid container item xs={12} spacing={3} justify="space-around">
                      <Grid item xs={9}>
                        <FilledInput
                          id="standard-search"
                          placeholder="Nombre de tu amigo"
                          fullWidth
                          type="search"
                          onChange={(e) => { setName(e.target.value); }}
                        />
                      </Grid>
                      <Grid item xs={3} className={classesCenter.center}>
                        <Button variant="contained" size="large" onClick={() => findFriend()} color="primary">BUSCAR</Button>
                      </Grid>
                      <Grid item xs={12} style={{ textAlign: "center" }}>
                        {isFindFriend ?
                          <AutoGridNoWrap
                            posicion={friend.posicion}
                            nombre={friend.name}
                            puntos={friend.points}
                          />
                          :
                          <Typography variant="h6">
                            No has buscado ningun amigo o bien el nombre es incorrecto
                            </Typography>

                        }

                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classesPaper.root}>
                  <Grid container>
                    <Grid item xs={12} md={6}>
                      <Typography className={classes.font} variant="h3" noWrap>Ranking</Typography>
                    </Grid>
                    <Grid item xs={12}>

                      {row ? row.slice(0, 10).map((data) => (
                        <AutoGridNoWrap
                          posicion={data.posicion}
                          nombre={data.name}
                          puntos={data.points}
                        />
                      )) : 'loding'}
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>


            </Grid>
          </Container>
        )}
    </div>
  );
}
