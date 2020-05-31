
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../../Components/NavBar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import NewDialog from './Components/NewDialog';
import PerdisteSvg from './icon.svg';
import GanasteSvg from './ganaste.svg';
import JuegoTerminado from './JuegoTerminado.svg';
import IconGame from './Svg/IconJuego.svg';


export default function LayoutContainer(props) {

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '20px',
        height: '92vh',
    },
    rootImage: {
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundSize: "cover",
        height: "100vh",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
    },
    rootPaper: {
        width: '100%',
        height: theme.spacing(9),
        padding: '10px',
    },
    colorPaper: {
        backgroundColor: props.backgroundPaper,
    },
    //TEXT STYLE
    TitleH1: {
        fontSize: '3rem',
        color: props.color,
        fontWeight: "bold"
    },
    TitleH3: {
        fontSize: '2rem',
        color: props.color,
        fontWeight: "bold"
    },
    Text: {
        fontSize: '1.5rem',
        color: props.color,
    },
    gutterBottom: {
        margin: '0px'
    },
    center: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }

}));

    const classes = useStyles();
    const [state, setstate] = useState(props); 
    const [startGame, setStartGame] = useState(true);
    
    const handleStartGame = () => {
        setStartGame(!startGame);
    }
  

    return (
        <div className={classes.rootImage}>
            <NavBar User={{ Name: 'Ale' }} />
            <CssBaseline />
            
            <NewDialog 
                showDialog={startGame} 
                setShowDialog={handleStartGame} 
                title={"Palabras perdidas"}
                description={props.enunciado}
                icon={IconGame}>
                    <Button onClick={handleStartGame}> Elejir otro juego </Button>
                    <Button> Jugar </Button>
            </NewDialog>
            
            <NewDialog 
                showDialog={props.show && props.dialogAction === "Ganaste"} 
                setShowDialog={() => props.handleShow(false)} 
                title={"Ganaste"}
                description={"Felicitaciones, ganaste el nivel."}
                icon={GanasteSvg}>
                    <Button onClick={() => props.handleShow(false)}> Elejir otro juego </Button>
                    <Button onClick={() => props.handleShow(false)}> Seguir jugando </Button>
            </NewDialog>

            <NewDialog 
                showDialog={props.show && props.dialogAction === "Perdiste"} 
                setShowDialog={() => props.handleShow(false)} 
                title={"Perdiste"}
                description={"Perdiste, ganaste el nivel."}
                icon={PerdisteSvg}>
                    <Button onClick={() => () => props.handleShow(false)}> Elejir otro juego </Button>
                    <Button onClick={() => () => props.handleShow(false)}> Volvera a jugar </Button>
            </NewDialog>

            <NewDialog 
                showDialog={props.show && props.dialogAction === "Fin"} 
                setShowDialog={() => props.handleShow(false)} 
                title={"Se termino el juego"}
                description={"Se termino el juego"}
                icon={JuegoTerminado}>
                    <Button onClick={() => () => props.handleShow(false)}> Elejir otro juego </Button>
                    <Button onClick={() => () => props.handleShow(false)}> Volvera a jugar </Button>
            </NewDialog>
            
            <Container maxWidth="xl" className={classes.root} >
                <Grid container>
                    <Grid item xs={12} >
                        {props.children}
                    </Grid>
                </Grid>
            </Container>
        </div>
    )

        ;

}