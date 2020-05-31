import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Componentes externos
import LayoutGame from '../../Components/Layout/LayaoutContainer';

// Componentes internos
import { TitleH2, TitleH1, ButtomDefualt, TextBlackShadow } from './Styles'
import { BackgroundMat } from './Assets';
import ButtonComponent from './Components/ButtonComponent';
import Clock from './Components/Clock';
import controller from './Controller';



const useStyles = makeStyles({ TitleH2, TitleH1, ButtomDefualt, TextBlackShadow });

export default function SecuenciaDeNumeros(props) {

	const classes = useStyles(props);
	const buttonsData = controller();
	const [values, setValues] = useState([]);
	const [lastID, setLastID] = useState(0);
	const [arraySize] = useState(buttonsData.length);
	const [clockTimer, setClockTimer] = useState(30);
	const [result, setResult] = useState();
	const [caption, setCaption] = useState();

	//LAYOUT HOOK
	const[showDialog, setShowDialog] = useState(false);
	const[stateOfGame, setStateOfGame] = useState("bienvenido");
	const [level, setLevel] = useState(1);
	const [points, setPoints] = useState(0);



	//FUNCTION THAT VERIFIES INPUTS
	const methodAddId = (id) => {
		if (id > lastID) {
			setValues(values.concat(id));
			setLastID(id);
			if (values.length === arraySize - 1) {
				endLevel(true);
			}
		}
		else {
			endLevel(false);
		}
	};
	//FUNCTION TO IDENTIFY WHEN TIME EXPIRES or FUNCTION TO STOP CLOCK AND ADD LEVEL 
	const endLevel = (value) => {
		if (value === false) {//PERDISTE
			setResult(false);
			//Set the state to show the dialog with right mensage
			setStateOfGame("LOSER");
			setShowDialog(true);
		} else {//GANASTE
			setLevel(level + 1);
			setResult(true);
			//Set the state to show the dialog with right mensage
			setStateOfGame("WINNER");
			setShowDialog(true);
		}
	}

	//FUNCTION TO CONTROL LEVEL DETAILS
	const gameHandler = (showLevel) => { }

	//FUNCTION TO GO TO LANDING PAGE AFTER EXITING BUTTON ON GAME 
	const goBack = () => {

	}

	return (
		<LayoutGame
			backgroundImage={BackgroundMat}
			points={points}
			show={showDialog}
			setShow={setShowDialog}
			stateOfGame={stateOfGame}
			title="Secuencia de numeros"
			enunciado="Los numeros estan desordenados. Ayudanos a ordenarlos por favor"
		>
			<div >
				<Grid container style={{ marginBottom: '3rem' }}>

					<Grid Item xs={12}>
						<Typography className={classes.TitleH1} variant="h2" align="center" style={{ fontSize: '6vh' }}>
							NIVEL {level}
						</Typography>
					</Grid>

					<Grid Item xs={12}>
						<Clock time={30 / level} endLevel={endLevel} stopTimer={result} />
					</Grid>
				</Grid>

				<Grid container >
					{buttonsData.map((image) => (
						<Grid Item xs={6} sm={3} align="center">
							<ButtonComponent className={classes.ButtomDefualt} id={image.id} methodAddId={methodAddId} />
						</Grid>
					))}

				</Grid>

			</div>
		</LayoutGame>
	);
}