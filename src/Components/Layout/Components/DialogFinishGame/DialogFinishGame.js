
import React, {useEffect, useState} from 'react';

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

  const [open,setOpen] = useState(false);

  useEffect(() => {
    if(props.openFlag)
      setOpen(true);
      
    }, [props.openFlag]);

  return (
    <Dialog
      
      maxWidth="md"
      open={open}
    >
      <Container maxWidth="xl" className={[classes.root,].join(" ")} >
        <Grid container spacing={4}>
          <Grid item xs={12} md={12}>
            <Typography className={[classesTypografy.titleGame].join(" ")}> Felicitaciones!! </Typography>
          </Grid>
          <Grid item xs={12} className={classesIcon.root}>
            <img className={classesIcon.icon} src={CrownIcon} alt="icon"/>
          </Grid>
          <Grid item xs={12} >
            <Typography className={[classesTypografy.titlePanel].join(" ")}> Puntos</Typography>
          </Grid>
          <Grid item xs={12} >
            <Typography className={[classesTypografy.textPanel].join(" ")}>{JSON.parse(sessionStorage.getItem("User")).points}</Typography>
          </Grid>
          <Grid container item xs={12}  >
            <Typography  className={[classesTypografy.titleEnunciado].join(" ")}> Superaste todos los niveles! </Typography>
          </Grid>
          <Grid container item xs={12} className={[classesButtom.root].join(" ")} >
            <Button href="/landing_page" variant="outlined" color="secondary" className={[classesButtom.buttom].join(" ")}> Elegir otro juego </Button>
          </Grid>
        </Grid>
      </Container>
    </Dialog>
  );
}