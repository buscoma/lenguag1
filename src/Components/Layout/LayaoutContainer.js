
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../../Components/NavBar';
import Button from '@material-ui/core/Button';
import NewDialog from './Components/NewDialog';
import PerdisteSvg from './icon.svg';
import GanasteSvg from './ganaste.svg';
import JuegoTerminado from './JuegoTerminado.svg';
import IconGame from './Svg/IconJuego.svg';


const mensaje = [
    {
        title:"Ganaste",
        description: "Felicitaciones ganaste el juego!!",
        type:"WIN"
    },
    {
        title:"Perdiste",
        description: "Felicitaciones ganaste el juego!!",
        type:"LOSER"
    },
    {
        title:"Fin del juego",
        description: "Felicitaciones ganaste el juego!!",
        type:"END"
    }

];

export default function LayoutContainer(props) {

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '20px',
        height: '92vh',
        overflow : "hidden",
        [theme.breakpoints.down('sm')]: {
            overflowY : "scroll"
        },
    },
    rootImage: {
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundSize: "cover",
        height: "100vh",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        overflow : "hidden",
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

    const [startGame, setStartGame] = useState(true);
    
    const handleStartGame = () => {
        setStartGame(!startGame);
    }

    const handleCloseDialog = () => props.setShow(false);
  

    return (
        <div className={classes.rootImage}>
            <NavBar User={{ Name: 'Ale' }} />
            <CssBaseline />
            
            <NewDialog 
                showDialog={startGame || (props.show && props.stateOfGame === "BEGIN")} 
                setShowDialog={handleStartGame} 
                title={props.title}
                description={props.enunciado}
                icon={IconGame}>
                    <Button href="/landing_page"> Elejir otro juego </Button>
                    <Button onClick={handleStartGame}> Jugar </Button>
            </NewDialog>
            
            <NewDialog 
                showDialog={props.show && props.stateOfGame === "WINNER"} 
                setShowDialog={handleCloseDialog} 
                title={"Ganaste"}
                description={"Felicitaciones, ganaste el nivel."}
                icon={GanasteSvg}>
                    <Button href="/landing_page"> Elejir otro juego </Button>
                    <Button onClick={handleCloseDialog}> Seguir jugando </Button>
            </NewDialog>

            <NewDialog 
                showDialog={props.show && props.stateOfGame === "LOSER"} 
                setShowDialog={handleCloseDialog} 
                title={"Perdiste"}
                description={"Perdiste, ganaste el nivel."}
                icon={PerdisteSvg}>
                    <Button href="/landing_page"> Elejir otro juego </Button>
                    <Button onClick={() => handleCloseDialog}> Volvera a jugar </Button>
            </NewDialog>

            <NewDialog 
                showDialog={props.show && props.stateOfGame === "END"} 
                setShowDialog={handleCloseDialog} 
                title={"Se termino el juego"}
                description={"Se termino el juego"}
                icon={JuegoTerminado}>
                    <Button href="/landing_page"> Elejir otro juego </Button>
                    <Button onClick={() => handleCloseDialog}> Volvera a jugar </Button>
            </NewDialog>
            
            <Container maxWidth="xl" className={classes.root} >
                <Grid container>
                    <Grid item xs={12} >
                        {props.children}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );

}