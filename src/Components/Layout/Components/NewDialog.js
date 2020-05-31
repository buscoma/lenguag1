
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

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
  right: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  logo: {
    height: '25vw',
    width: '25vw',
    [theme.breakpoints.up('md')]: {
      height: '40vw',
      width: '40vw',
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
  }
}));

export default function CustomizedDialogs(props) {
  
  const classes = useStyles();

  return (
    <Dialog
      fullWidth
      maxWidth="xl"
      open={props.showDialog}
    >
      <Container maxWidth="xl" className={classes.root} >
        <Grid container spacing={2}>
          <Hidden mdUp>
            <Grid item xs={12} className={[classes.right].join(" ")}  >
              <IconButton className={classes.closeButton} onClick={props.setShowDialog} >
                <CloseIcon />
              </IconButton>
            </Grid>
          </Hidden>
          <Grid item xs={12} md={4} className={[classes.center].join(" ")}>
            <img src={props.icon} onClick={props.show} className={classes.logo} alt="React Logo" />
          </Grid>
          <Grid container item spacing={2} xs={12} md={8} justify="center">
            <Hidden smDown>
              <Grid item xs={12} className={[classes.right].join(" ")}>
                <IconButton  className={classes.closeButton} onClick={props.setShowDialog}>
                  <CloseIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item xs={12} md={8}>
              <Typography className={[classes.center, classes.textTitle].join(" ")}> {props.title}</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography className={[classes.textSubTitle].join(" ")}> Enunciado </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h6">{props.description}</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              {props.children} 
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Dialog>
  );
}