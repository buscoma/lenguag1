
import React from 'react';

import {
  Button,
  Grid,
  Container,
  Typography,
  Dialog
} from '@material-ui/core';

import {
  useStyles,
  useStylesTypografy,
  useStylesButtom,
  useStylesIcon
} from './style';

import CrownIcon from './corona.svg';

export default function CustomizedDialogs(props) {

  const classes = useStyles();
  const classesTypografy = useStylesTypografy();
  const classesButtom = useStylesButtom();
  const classesIcon = useStylesIcon();

  return (
    <Dialog
      
      maxWidth="md"
      open={props.open}
    >
      <Container maxWidth="xl" className={[classes.root,].join(" ")} >
        <Grid container spacing={4}>
          <Grid item xs={12} md={12}>
            <Typography className={[classesTypografy.titleGame].join(" ")}> Felicitaciones!! </Typography>
          </Grid>
          <Grid item xs={12} className={classesIcon.root}>
            <img className={classesIcon.icon} src={CrownIcon} />
          </Grid>
          <Grid item xs={12} >
            <Typography className={[classesTypografy.titlePanel].join(" ")}> Puntos</Typography>
          </Grid>
          <Grid item xs={12} >
            <Typography className={[classesTypografy.textPanel].join(" ")}>{props.points}</Typography>
          </Grid>
          <Grid container item xs={12}  >
            <Typography  className={[classesTypografy.titleEnunciado].join(" ")}> Has superado todos los nivels sadisfactoriamente </Typography>
          </Grid>
          <Grid container item xs={12} className={[classesButtom.root].join(" ")} >
            <Button href="/landing_page" variant="outlined" color="secondary" className={[classesButtom.buttom].join(" ")}> Elejir otro juego </Button>
          </Grid>
        </Grid>
      </Container>
    </Dialog>
  );
}