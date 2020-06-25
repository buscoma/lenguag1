import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button, Paper, FilledInput } from "@material-ui/core";
import { useStylesCenter } from './Style';


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

export default function AutoGridNoWrap(props) {

    const classes = useStylesAutoGridNoWrap();
    const [name, setName] = useState("");
    const [friend, setFriend] = useState({});
    const [isFindFriend, setIsFindFriend] = useState(false);
    const classesCenter = useStylesCenter();
    const backgroundColorPosition = ColorRanking(friend.posicion);

    const findFriend = () => {
        debugger
        let copyArray = [];
        setIsFindFriend(false)
        props.list.forEach(e => copyArray.push(e));
        let result = copyArray.filter(e => e.name === name)
        if (result.length === 0) {
            setIsFindFriend(false)
        } else {
            setFriend(result[0])
            setIsFindFriend(true)
            console.log(friend)
        }
    }

    return (
        <div id={friend.posicion + 1} className={classes.root}>
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
                            <Paper
                                className={classes.paper}
                                style={{ backgroundColor: backgroundColorPosition }}
                                elevation={3}
                            >
                                <Grid container wrap="wrap" spacing={2}>
                                    <Grid item xs={4} sm={4} md={2}>
                                        <Typography className={classes.topo} noWrap>#{friend.posicion}</Typography>
                                    </Grid>
                                    <Grid item xs={8} sm={4} md={6} zeroMinWidth>
                                        <Typography className={classes.topo} noWrap>{friend.name}</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4} zeroMinWidth>
                                        <Typography className={classes.topo} noWrap>{friend.points}pts</Typography>
                                    </Grid>
                                </Grid>
                            </Paper>

                            :

                            <Typography variant="h6">
                                No has buscado ningun amigo o bien el nombre es incorrecto
                            </Typography>

                        }

                    </Grid>
                </Grid>
            </Grid>

        </div>
    );
}