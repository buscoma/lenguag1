
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

import LoserIcon from './icon.svg';

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
            <Typography className={[classesTypografy.titleGame].join(" ")}> Perdiste </Typography>
          </Grid>
          <Grid item xs={12} className={classesIcon.root}>
            <img className={classesIcon.icon} src={LoserIcon} alt="icon"/> 
          </Grid>
          <Grid item xs={12} >
            <Typography className={[classesTypografy.titlePanel].join(" ")}> Puntos</Typography>
          </Grid>
          <Grid item xs={12} >
            <Typography className={[classesTypografy.textPanel].join(" ")}>{props.points}</Typography>
          </Grid>
          <Grid container item xs={12}  >
            <Typography  className={[classesTypografy.titleEnunciado].join(" ")}> No has superado el nivel correctamente. </Typography>
          </Grid>
          <Grid container item xs={12} md={6} className={[classesButtom.root].join(" ")} >
            <Button href="/landing_page" variant="outlined" color="secondary" className={[classesButtom.buttom].join(" ")}> Elejir otro juego </Button>
          </Grid>
          <Grid container item xs={12} md={6} className={[classesButtom.root].join(" ")} >
            <Button href="/landing_page" variant="contained" color="primary" className={[classesButtom.buttom].join(" ")}> Volver a jugar </Button>
          </Grid>
        </Grid>
      </Container>
    </Dialog>
  );
}