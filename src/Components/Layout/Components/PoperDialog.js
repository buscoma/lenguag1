
import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    minHeight:"500px",
    padding: theme.spacing(2),
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCenter:{
    textAlign:"center"
  },
  right: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  logo: {
    height: '25vw',
    width: '25vw',
    [theme.breakpoints.up('md')]: {
      height: '30vw',
      width: '30vw',
    },
  },
  textTitle:{
    fontSize:"1.5rem",
    fontWeight:"750",
    textDecoration:"underline",
    [theme.breakpoints.up('sm')]: {
      fontSize:"3rem"
    },
    [theme.breakpoints.up('md')]: {
      fontSize:"3rem"
    },
  },
  textSubTitle:{
    fontSize:"1.5rem",
    [theme.breakpoints.up('md')]: {
      fontSize:"2rem"
    },
  },
  closeButtom:{
    position:"absolute",
    top: "0px",
    right: "0px"
  }

}));

export default function PoperDialog(props) {
  
  const classes = useStyles();

  return (
    <Dialog
      fullWidth
      maxWidth="xl"
      open={true}
    >
      <Container maxWidth="xl" className={[classes.root, classes.center].join(" ")} >
          <IconButton className={classes.closeButtom} onClick={props.setShowDialog} >
            <CloseIcon />
          </IconButton>
        <Grid container >
          <Grid item xs={12} md={6} className={[classes.center].join(" ")}>
            <img src={props.icon} onClick={props.show} className={classes.logo} alt="React Logo" />
          </Grid>
          <Grid container item spacing={2} xs={12} md={6} justify="center">
            <Grid item xs={12} >
              <Typography className={[classes.center, classes.textTitle, classes.textCenter].join(" ")}> {props.title}</Typography>
            </Grid>
            <Grid item xs={12} >
              <Typography variant="h6">{props.description}</Typography>
            </Grid>
            <Grid item xs={12} >
              {props.children} 
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Dialog>
  );
}