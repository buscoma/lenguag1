import React, { Component } from 'react';
import PalabrasCorrectas from './Controller/index';

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



class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			position: 0,
			text: PalabrasCorrectas(),
			userInput: '',
			right: false,
			wrong: false,
			nextWord: false,
			stateOfGame: "BEGIN",
			show: false,
		};
	}

	state = {
		position: 0,
		text: PalabrasCorrectas(),
		userInput: '',
		mensaje: "",
	};

	setShow(state) {
		this.setState({ show: state })
	}

	onRestart = () => { };

	checkIfCorrect() {
		if (this.state.text[this.state.position].EsCorrecta === true) {
			this.setState({ mensaje: 'Esta escrita correctamente!!' });
			this.setState({ right: true });
			if (this.state.text.length - 1 > this.state.position) {
				this.setState({ nextWord: true });
			} else {
				//this.setState({ mensaje: 'Has ganado!' });
				this.setState({ stateOfGame: "WINNER" });
			}
		} else {
			this.setState({ mensaje: 'Esta escrita incorrecto!!' });
			this.setState({ wrong: true });
			this.setState({ nextWord: true });
		}
	}

	checkIfInCorrect(text, posicion) {
		if (this.state.text[this.state.position].EsCorrecta === false) {
			this.setState({ mensaje: 'Esta escrita incorrecto!! ' });
			this.setState({ right: true });
			if (this.state.text.length - 1 > this.state.position) {
				this.setState({ nextWord: true });
			} else {
				//this.setState({ mensaje: 'Has ganado!! ' });
				this.setState({ stateOfGame: "WINNER" });
			}
		} else {
			this.setState({ mensaje: 'Esta escrita correctamente!! ' });
			this.setState({ wrong: true });
			this.setState({ nextWord: true });
		}
	}

	playNextWord() {
		let x = this.state.position;
		this.setState({ position: x + 1 });
		this.setState({ nextWord: false });
		this.setState({ right: false });
		this.setState({ wrong: false });
	}

	render() {
		return (
			<LayoutGame
				backgroundImage={background}
				title="Palabras Correctas"
				enunciado="Sos bueno escribiendo. Identifica si la palabra esta escrita correctamente o no."
				show={this.show}
				setShow={this.setShow}
				stateOfGame={this.stateOfGame}
			>
				<div >
					<Container fixed>
						<Grid container spacing={3} style={{padding:"20px"}}>
							<Grid item xs={12}>
								<Paper elevation={3} style={{padding:"20px"}}>
									<Grid container spacing={4}>
										<Grid item xs={12}>
											<Typography className="center">Esta palabra esta escrita correctamente?</Typography>
										</Grid>
										<Grid item xs={12} style={{textAlign:"center"}}>
											"{this.state.text[this.state.position].palabra}"
										</Grid>
									</Grid>
								</Paper>
							</Grid>
							<Grid item xs={12}>
								<Collapse in={!this.state.nextWord} style={{ width: "100%" }}>
									<Grid container spacing={3}>
										<Grid item xs={12} md={6}>
											<Button variant="contained" onClick={() => this.checkIfCorrect()} fullWidth>SI </Button>
										</Grid>
										<Grid item xs={12} md={6}>
											<Button variant="contained" onClick={() => this.checkIfInCorrect()} fullWidth>NO </Button>
										</Grid>
									</Grid>
								</Collapse>
							</Grid>

							<Collapse in={this.state.nextWord} style={{ width: "100%" }}>
								<Grid item xs={12} md={12}>
									<Button variant="contained" onClick={() => this.playNextWord()} fullWidth> CONTINUAR </Button>
								</Grid>
							</Collapse>

							<Grid item xs={12}>
								<Collapse in={this.state.wrong}>
									<Alert severity="error" >
										<AlertTitle>RESPUESTA INCORRECTO</AlertTitle>
										{this.state.mensaje}
									</Alert>
								</Collapse>
								<Collapse in={this.state.right}>
									<Alert severity="success" >
										<AlertTitle>RESPUESTA CORRECTO</AlertTitle>
										{this.state.mensaje}

									</Alert>
								</Collapse>
							</Grid>
						</Grid>
					</Container>
				</div>
			</LayoutGame>
		);
	}
}

export default App;
