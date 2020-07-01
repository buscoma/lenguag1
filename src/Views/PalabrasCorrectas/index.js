import React, { useState, useEffect } from 'react';
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
import { useStylesPaper, useStyleTypografy, useStylesButtom, useStyleAlert } from './Styles';

// Componentes externos
import LayoutGame from '../../Components/Layout/LayaoutContainer';
import background from './Assets/background.jpg';
import {authFetch} from '../../AuthProvider';

const PalabrasCorrectas = (props) => {
    const clasess = useStylesPaper();
    const clasessTypografy = useStyleTypografy();
    const clasessButtom = useStylesButtom();
    const classesAlert = useStyleAlert();

    const [state, setState] = useState({
        text: PalabrasCorrectasControler(),
        position: 0,
        mensaje: '',
        level: 1,
        points: 0,
        winner: false,
        loser: false,

        rightAnswer: false,
        wrongAnswer: false,
        playNextWord: false
    });

    const [refresh, setRefresh] = useState(false);
    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(false);

    const checkIfCorrect = () => {

        if (state.text.length - 1 === state.position) {
            levelUp();
         }else if (state.text[state.position].EsCorrecta === true) {
            setState((prev) => ({
                ...prev,
                mensaje: 'La palabra esta bien escrita.',
                rightAnswer: true,
                playNextWord: true

            }));
        } else {
            setState((prev) => ({
                ...prev,
                mensaje: 'La palabra esta mal escrita.',
                wrongAnswer: true,
                playNextWord: true
            }));
        }
    };

    const checkIfInCorrect = () => {

        if (state.text.length - 1 === state.position) {
            levelUp();
        }else if (state.text[state.position].EsCorrecta === false) {
            setState((prev) => ({
                ...prev,
                mensaje: 'La palabra esta mal escrita.',
                rightAnswer: true,
                playNextWord: true
            }));
        } else {
            setState((prev) => ({
                ...prev,
                mensaje: 'La palabra esta bien escrita.',
                wrongAnswer: true,
                playNextWord: true
            }));
        }
    };

    const levelUp = () => {
        getPoints().then(()=>{
            playerDetails().then(data=>{
                sessionStorage.setItem("User", JSON.stringify(data));
                setState((prev) => ({
                    ...prev,
                    points: data.points,
                }));
            });
        });
    
        if(state.level < 3){
            setState((prev) => ({
                ...prev,
                level: prev.level + 1,
                playNextWord: false,
                rightAnswer: false,
                wrongAnswer: false,
                position: 0
            }));
        }else{
            setState((prev) => ({
                ...prev,
                winner : true,
            }))
        }
    }

    const getPoints = () => {
		return authFetch("https://backendlenguamaticag1.herokuapp.com/api/player/levelUp?game=palabrasCorrectas&level=" + state.level)
			.catch(error => console.log('error', error));
	}

    const playerDetails = () => {
        return authFetch(
            "https://backendlenguamaticag1.herokuapp.com/api/player/details"
        )
        .then((res) => res.json())
        .then((userResult) => {
            return userResult.data;
        });
    };

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
            alert('Ganaste');
        }
    };

    useEffect(() => {
        async function fetchApi() {
            try {
                setLoading(true);
                
                authFetch('https://backendlenguamaticag1.herokuapp.com/api/games/palabrasCorrectas?nivel=' + state.level)
                .then(res=>res.json())
                .then((json) => {
                    setState((prev) => ({
                        ...prev,
                        text: json.data.preguntas
                    }));
                });
            } catch (e) {
                setErrors(e);
            } finally {
                setLoading(false);
            }
        }
        fetchApi();
        setRefresh(false);
    }, [refresh, state.level, errors]);



    return (
        <LayoutGame
            level={state.level}
            points={state.points}
            game="PalabrasCorrectas"
            winner={state.winner}
            loser={state.loser}
            backgroundImage={background}
        >
            {loading ? ("Loading") :
                (<Container>
                    <Grid container spacing={3} style={{ paddingTop: '15px' }}>
                        <Grid item xs={12}>
                            <Paper className={clasess.root}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <Typography className={clasessTypografy.questionTitle}>
                                            {' '}
                                        ¿La siguiente palabra esta bien escrita?
                                    </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography className={clasessTypografy.wordSubTitle}>
                                            {' '}
                                        "{state.text[state.position].palabra}"{' '}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Button
                                            variant="contained"
                                            className={clasessButtom.buttomYesOn}
                                            disabled={state.playNextWord}
                                            onClick={checkIfCorrect}
                                            fullWidth
                                        >
                                            SI{' '}
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Button
                                            variant="contained"
                                            className={clasessButtom.buttomYesOn}
                                            disabled={state.playNextWord}
                                            onClick={checkIfInCorrect}
                                            fullWidth
                                        >
                                            NO{' '}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Collapse in={state.rightAnswer}>
                                <Grid container spacing={3} justify="center">
                                    <Grid item xs={12}>
                                        <Alert icon=" " severity="success" className={classesAlert.alert}>
                                            <AlertTitle className={classesAlert.alert}>¡Respuesta correcta!</AlertTitle>
                                            {state.mensaje}
                                        </Alert>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Button
                                            variant="contained"
                                            className={clasessButtom.buttomOther}
                                            onClick={readyForNextWord}
                                            fullWidth
                                        >
                                            {' '}
                                        ¿Estás listo para continuar?{' '}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Collapse>
                            <Collapse in={state.wrongAnswer}>
                                <Grid container spacing={3} justify="center">
                                    <Grid item xs={12}>
                                        <Alert icon=" " severity="error" className={classesAlert.alert}>
                                            <AlertTitle className={classesAlert.alert}>Respuesta incorrecta</AlertTitle>
                                            {state.mensaje}
                                        </Alert>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Button
                                            variant="contained"
                                            className={clasessButtom.buttomOther}
                                            href="/landing_page"
                                            fullWidth
                                        >
                                            {' '}
                                        Elegir otro juego{' '}
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Button
                                            variant="contained"
                                            className={clasessButtom.buttomOther}
                                            href="/palabras_correctas"
                                            fullWidth
                                        >
                                            {' '}
                                        Volver a jugar{' '}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Collapse>
                        </Grid>
                    </Grid>
                </Container>)}
        </LayoutGame>
    );
};

export default PalabrasCorrectas;