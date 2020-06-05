
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../../Components/NavBar';
import Button from '@material-ui/core/Button';
import NewDialog from './Components/NewDialog';


import {
    DialogPanel,
    DialogNextLevel, 
    DialogFinishGame,
    DialogLoserGame,
} from './Components'

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

    const [panelDialogOpen, setPanelDialogOpen] = useState(false);
    const handlePanel = () => {setPanelDialogOpen(!panelDialogOpen)};

    const [nextLevelDialogOpen, setNextLevelDialogOpen] = useState(false);
    const handleNextLevel = () => { setNextLevelDialogOpen(!nextLevelDialogOpen)};

    const [loserDialogOpen, setLoserDiagloOpen] = useState(false);
    const handleLoser = () => {setLoserDiagloOpen(!loserDialogOpen)};

    const [finishGameDialogOpen, setFinishGameDiagloOpen] = useState(false);
    const handleFinish = () => {setFinishGameDiagloOpen(!finishGameDialogOpen)};

    const handleCloseDialog = () => props.setShow(false);

    return (
        <div className={classes.rootImage}>
            <NavBar User={{ Name: 'Ale' }} showPanel={panelDialogOpen} handleShowPanel={handlePanel} />
            <CssBaseline />
            
            <DialogPanel 
                open={panelDialogOpen}
                onClose={handlePanel}
                level={props.level}
                points={props.points}
            />

            <DialogNextLevel 
                open={nextLevelDialogOpen}
                onClose={handleNextLevel}
                level={props.level}               
                points={props.points}
            />

            <DialogFinishGame 
                open={finishGameDialogOpen}
                onClose={handleFinish}
                level={props.level}               
                points={props.points}
            />

            <DialogLoserGame 
                open={loserDialogOpen}
                onClose={handleLoser}
                points={props.points}
            />
            
            <Container maxWidth="xl" className={classes.root} >
                <Grid container>
                    <Grid item xs={12} >
                        {props.children}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );

}  /*   <DialogoDatos
showDialog={(startGame || (props.show && props.stateOfGame === "BEGIN"))} 
setShowDialog={handleStartGame} 
level={props.level}
points={props.points}
>
    <Button href="/landing_page"> Elejir otro juego </Button>
    <Button onClick={handleStartGame}> Jugar </Button>
</DialogoDatos>*/