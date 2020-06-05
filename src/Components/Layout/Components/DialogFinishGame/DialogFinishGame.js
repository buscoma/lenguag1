
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import {Button}from '@material-ui/core';

import {
  useStyles,
  useStylesTypografy,
  useStylesButtom
} from './style';


export default function CustomizedDialogs(props) {

  const classes = useStyles();
  const classesTypografy = useStylesTypografy();
  const classesButtom = useStylesButtom();

  return (
    <Dialog
      fullWidth
      maxWidth="xl"
      open={props.open}
    >
      <Container maxWidth="xl" className={[classes.root,].join(" ")} >
        <Grid container spacing={4}>
          <Grid item xs={12} md={12}>
            <Typography className={[classesTypografy.titleGame].join(" ")}> Felicitaciones!! </Typography>
          </Grid>
          <Grid item xs={6} >
            <Grid container >
              <Grid item xs={12}>
                <Typography className={[classesTypografy.titlePanel].join(" ")}> Nivel </Typography>
              </Grid>
              <Grid item xs={12} >
                <Typography className={[classesTypografy.textPanel].join(" ")}>{props.level}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} >
            <Grid container >
              <Grid item xs={12} >
                <Typography className={[classesTypografy.titlePanel].join(" ")}> Puntos</Typography>
              </Grid>
              <Grid item xs={12} >
                <Typography className={[classesTypografy.textPanel].join(" ")}>{props.points}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item xs={12}  >
              <Typography className={[classesTypografy.titleEnunciado].join(" ")}> Has superado todos los nivels sadisfactoriamente </Typography>
          </Grid>
          <Grid container item xs={12} className={[classesButtom.root].join(" ")} >
              <Button href="/landing_page" variant="outlined" color="secondary" className={[classesButtom.buttom].join(" ")}> Elejir otro juego </Button>
          </Grid>
        </Grid>
      </Container>
    </Dialog>
  );
}