
import React, {useState, useEffect} from 'react';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
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
  const [levelNow, setLevelNow] = useState(props.flagAndLevel);
  const [open,setOpen] = useState(false);

  const changeOpen = () => {setOpen(prevState => !prevState);}

  useEffect(() => {

    if(props.flagAndLevel !== levelNow){
      setLevelNow(props.flagAndLevel)
      changeOpen()
    }
        
    }, [levelNow, props.flagAndLevel]);

  return (
    <Dialog
      fullWidth
      maxWidth="xl"
      open={open}
    >
      <Container maxWidth="xl" className={[classes.root,].join(" ")} >
        <IconButton className={classes.closeButtom} onClick={()=> setOpen(!open)} >
          <CloseIcon />
        </IconButton>
        <Grid container spacing={4}>
          <Grid item xs={12} md={12}>
            <Typography className={[classesTypografy.titleGame].join(" ")}>¡¡Nivel completado!!</Typography>
          </Grid>
          <Grid item xs={6} >
            <Grid container >
              <Grid item xs={12}>
                <Typography className={[classesTypografy.titlePanel].join(" ")}>Nivel</Typography>
              </Grid>
              <Grid item xs={12} >
                <Typography className={[classesTypografy.textPanel].join(" ")}>{props.flagAndLevel}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} >
            <Grid container >
              <Grid item xs={12} >
                <Typography className={[classesTypografy.titlePanel].join(" ")}>Puntos</Typography>
              </Grid>
              <Grid item xs={12} >
                <Typography className={[classesTypografy.textPanel].join(" ")}>{JSON.parse(sessionStorage.getItem("User")).points}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item xs={12}  >
            <Grid item xs={12}>
              <Typography className={[classesTypografy.titleEnunciado].join(" ")}>¡Nivel superado!</Typography>
            </Grid>
          </Grid>
          <Grid container item xs={12} >
            <Grid item xs={12} sm={6} className={[classesButtom.root].join(" ")}>
              <Button onClick={()=> setOpen(!open)} variant="contained" color="primary" className={[classesButtom.buttom].join(" ")}>Siguiente nivel</Button>
            </Grid>
            <Grid item xs={12} sm={6}  className={[classesButtom.root].join(" ")}>
              <Button href="/landing_page" variant="outlined" color="secondary" className={[classesButtom.buttom].join(" ")}>Elegir otro juego</Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Dialog>
  );
}