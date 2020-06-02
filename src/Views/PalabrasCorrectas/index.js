import React, { useState } from 'react';
import PalabrasCorrectasControler from './Controller/index';

// Librerias
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Alert, AlertTitle } from '@material-ui/lab';
import Collapse from '@material-ui/core/Collapse';
import Paper from '@material-ui/core/Paper';

// Componentes externos
import {
    useStylesPaper,
    useStyleTypografy
        } from './Styles';

// Componentes externos
import LayoutGame from '../../Components/Layout/LayaoutContainer';
import background from './Assets/background.jpg';



const PalabrasCorrectas = (props) => {

    const clasess = useStylesPaper();
    const clasessTypografy = useStyleTypografy();

    const [state, setState] = useState({
        text: PalabrasCorrectasControler(),
        position: 0,
        mensaje: '',
        rightAnswer: false,
        wrongAnswer: false,
        playNextWord: false,
        stateOfGame: "BEGIN",
        show: false,
    });

    const checkIfCorrect = () => {
        if (state.text[state.position].EsCorrecta === true) {
            setState((prev) => ({
                ...prev,
                mensaje: "Es correcto, la palabra esta escrita bien.",
                rightAnswer: true,
                playNextWord: true,
            }));
        } else {
            setState((prev) => ({
                ...prev,
                mensaje: "Es incorrecto, la palabra esta escrita mal.",
                wrongAnswer: true,
                playNextWord: true,
            }));
        }
    }

    const checkIfInCorrect = () => {
        if (state.text[state.position].EsCorrecta === false) {
            setState((prev) => ({
                ...prev,
                mensaje: "Es correcto, la palabra esta escrita mal.",
                rightAnswer: true,
                playNextWord: true,
            }));
        } else {
            setState((prev) => ({
                ...prev,
                mensaje: "Es incorrecto, la palabra esta escrita bien.",
                wrongAnswer: true,
                playNextWord: true,
            }));
        }
    }

    const readyForNextWord = () => {
        if (state.position < state.text.length - 1) {
            setState((prev) => ({
                ...prev,
                position: prev.position + 1,
                playNextWord: false,
                rightAnswer: false,
                wrongAnswer: false
            }));
        } else {
            alert("Ganaste")
        }
    }

    const playAgain = () => {
        alert("Aca hay que volver a iniciar juego");
    }

    return (
        <LayoutGame
            backgroundImage={background}
            title="Palabras Correctas"
            enunciado="Sos bueno escribiendo. Identifica si la palabra esta escrita correctamente o no."
            show={state.show}
            //setShow={setShow}
            stateOfGame={state.stateOfGame}
        >
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={clasess.root}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Typography className={clasessTypografy.root}> La palabra esta escrita correctamente?</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography> "{state.text[state.position].palabra}" </Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Button variant="contained" disabled={state.playNextWord} onClick={checkIfCorrect} fullWidth>SI </Button>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Button variant="contained" disabled={state.playNextWord} onClick={checkIfInCorrect} fullWidth>NO </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Collapse in={state.rightAnswer}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Alert severity="success" >
                                        <AlertTitle>RESPUESTA CORRECTO</AlertTitle>
                                        {state.mensaje}
                                    </Alert>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" onClick={readyForNextWord} fullWidth> ESTAS LISTO PARA CONTINUAR </Button>
                                </Grid>
                            </Grid>
                        </Collapse>
                        <Collapse in={state.wrongAnswer}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Alert severity="error" >
                                        <AlertTitle>RESPUESTA INCORRECTA</AlertTitle>
                                        {state.mensaje}
                                    </Alert>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" onClick={playAgain} fullWidth> Volver a juegar </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" onClick={playAgain} fullWidth> Juegar a otra cosa </Button>
                                </Grid>
                            </Grid>
                        </Collapse>
                    </Grid>
                </Grid>
            </Container>
        </LayoutGame>

    );
}

export default PalabrasCorrectas;