import React, { useState } from 'react';
import PalabrasCorrectasControler from './Controller/index';

// Librerias
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Alert, AlertTitle } from '@material-ui/lab';
import Collapse from '@material-ui/core/Collapse';
import Paper from '@material-ui/core/Paper';

// Componentes externos
import LayoutGame from '../../Components/Layout/LayaoutContainer';
import background from './Assets/background.jpg';

//Internas
import "./Styles/PalabraCorrectasStyle.css";






const PalabrasCorrectas = (props) => {

	const [state, setState] = useState({
		position: 0,
		text: PalabrasCorrectasControler(),
		userInput: '',
		mensaje: '',
		right: false,
		wrong: false,
		nextWord: false,
		stateOfGame: "BEGIN",
		show: false,
	});


/*
	const setShow = () => {
		let oldState = state.show;
		setState({ show: !oldState })
	}

*/

	const checkIfCorrect = () => {
		console.log(state.text)
		console.log(state.position)
		console.log(state.text[state.position])
		debugger
		if (state.text[state.position].EsCorrecta === true) {
			console.log(1)
			this.setState(prev => ({...prev, mensaje: 'Esta escrita correctamente!!',	right: true}));
			if (state.text.length - 1 > state.position) {
				setState({ nextWord: true });
			} else {
				//setState({ mensaje: 'Has ganado!' });
				setState({ stateOfGame: "WINNER" });
			}
			console.log(2)
		} else {
			setState({ mensaje: 'Esta escrita incorrecto!!' });
			setState({ wrong: true });
			setState({ nextWord: true });
		}
		console.log(3)
	}

	const checkIfInCorrect = () => {

		if (state.text[state.position].EsCorrecta === false) {
			setState({ mensaje: 'Esta escrita incorrecto!! ' });
			setState({ right: true });
			setState({ nextWord: true });
			/*			if (state.text.length - 1 > state.position) {
							
						} else {
							//setState({ mensaje: 'Has ganado!! ' });
							setState({ stateOfGame: "WINNER" });
						}*/
		} else {
			setState({ mensaje: 'Esta escrita correctamente!! ' });
			setState({ wrong: true });
			setState({ nextWord: true });
		}
	}

	const playNextWord = () => {
		if (state.text.length - 1 > state.position) {
			let x = state.position;
			setState({ position: x + 1 });
			setState({ nextWord: false });
			setState({ right: false });
			setState({ wrong: false });
		} else {
			setState({ stateOfGame: "END" });
			//this.setShow(true)
			alert(state.stateOfGame);
			setState({ show: true });
			alert(state.show);
		}
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
			<div >
				<Container fixed>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Paper elevation={3} className="MuiPaper-root" style={{ padding: "20px" }}>
								<Grid container spacing={3} style={{ padding: "20px" }}>
									<Grid item xs={12}>

										<Grid container spacing={4}>
											<Grid item xs={12}>
												<Typography className="MuiTypography-body1" variant="body1">Esta palabra esta escrita correctamente?</Typography>
											</Grid>
											<Grid item xs={12}  >
												<Typography variant="h6" > "{state.text[state.position].palabra}"</Typography>

											</Grid>
										</Grid>

									</Grid>
									<Grid item xs={12}>
										<Grid container spacing={3}>
											<Grid item xs={12} md={6}>
												<Button variant="contained" disabled={state.nextWord} onClick={() => checkIfCorrect()} fullWidth>SI </Button>
											</Grid>
											<Grid item xs={12} md={6}>
												<Button variant="contained" disabled={state.nextWord} onClick={() => checkIfInCorrect()} fullWidth>NO </Button>
											</Grid>
										</Grid>
									</Grid>

								</Grid>
							</Paper>
						</Grid>
						<Grid item xs={12}>
							<Collapse in={state.wrong}>
								<Grid container spacing={3}>
									<Grid item xs={12} md={12}>
										<Alert severity="error" >
											<AlertTitle>RESPUESTA INCORRECTO</AlertTitle>
											{state.mensaje}
										</Alert>
									</Grid>
									<Grid item xs={12} md={12}>

									</Grid>
								</Grid>
							</Collapse>
							<Collapse in={state.right}>
								<Grid container spacing={3}>
									<Grid item xs={12} md={12}>
										<Alert severity="success" >
											<AlertTitle>RESPUESTA CORRECTO</AlertTitle>
											{state.mensaje}
										</Alert>
									</Grid>
									<Grid item xs={12} md={12}>

									</Grid>
								</Grid>
							</Collapse>
						</Grid>
					</Grid>
				</Container>
			</div>
		</LayoutGame>
	);

}


export default PalabrasCorrectas;