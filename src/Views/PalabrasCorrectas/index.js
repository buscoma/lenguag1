import React, { Component } from 'react';
import PalabrasCorrectas from '../../Views/PalabrasCorrectas/PalabrasCorrectas.js';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LayoutGame from '../../Components/Layout/LayaoutContainer';
class App extends Component {

  

	constructor(props) {
		super(props);
		this.state = {
			position: 0,
			text: PalabrasCorrectas(),
			userInput: ''
		};
  }

  

	state = {
		position: 0,
		text: PalabrasCorrectas(),
    userInput: '',
    mensaje: "",
    
	};

	onRestart = () => {};

	checkIfCorrect() {
		if (this.state.text[this.state.position].EsCorrecta === true) {
			this.setState({mensaje:'Correcto!! '});
			if (this.state.text.length - 1 > this.state.position) {
				let x = this.state.position;
				this.setState({ position: x + 1 });
			} else this.setState({mensaje:'Has ganado!'});
		} else {
			this.setState({mensaje:'InCorrecto!! '});
		}
	}

	checkIfInCorrect(text, posicion) {
		if (this.state.text[this.state.position].EsCorrecta === false) {
			this.setState({mensaje:'Correcto!! '});
			if (this.state.text.length - 1 > this.state.position) {
				let x = this.state.position;
				this.setState({ position: x + 1 });
			} else this.setState({mensaje:'Has ganado!! '});
		} else {
			this.setState({mensaje:'Incorrecto!! '});
		}
	}

	onUserInputChange = (e) => {
		const v = e.target.value;
		this.onFinish(v);
		this.setState({
			userInput: v,
			symbols: this.countCorrectSymbols(v)
		});
	};

	onFinish(userInput) {
		if (userInput === this.state.text) {
			clearInterval(this.interval);
			this.setState({
				finished: true
			});
			alert('bien');
		}
	}

	countCorrectSymbols(userInput) {
		const text = this.state.text.replace(' ', '');
		return userInput.replace(' ', '').split('').filter((s, i) => s === text[i]).length;
	}

	render() {
		return (
			<LayoutGame
				title="Palabras Correctas"
				enunciado="Sos bueno escribiendo. Identifica si la palabra esta escrita correctamente o no."
			>
				<div className="root">
					<Container fixed>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								
									{this.state.text[this.state.position].palabra}
								
								
							</Grid>
							<Grid item xs={12}>
							<Typography className="center">
					ES CORRECTO?
				</Typography>
							</Grid>
							<Grid item xs={12} md={6}>
				<Button variant="contained" onClick={() => this.checkIfCorrect()} fullWidth>SI </Button>
								
								
								
							</Grid>
							<Grid item xs={12} md={6}>
				<Button variant="contained" onClick={() => this.checkIfInCorrect()} fullWidth>NO </Button>
							</Grid>
				<Grid item xs={12}>
				{this.state.mensaje}
				</Grid>
						</Grid>
					</Container>
				</div>
			</LayoutGame>
		);
	}
}

export default App;
