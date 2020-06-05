import React, { useState } from 'react';


//Librerias
import { 
	Grid,
	Paper
} from '@material-ui/core';

// Componentes externos
import LayoutGame from '../../Components/Layout/LayaoutContainer';

// Componentes internos
import { BackgroundMat } from './Assets';
import ButtonComponent from './Components/ButtonComponent';
import Clock from './Components/Clock';
import controller from './Controller';
import {
    useStylesPaper,
    useStylesButtom,
        } from './Styles';



export default function SecuenciaDeNumeros(props) {

	const clasessPaper = useStylesPaper();
    const clasessButtom = useStylesButtom();

	const buttonsData = controller();
	const [values, setValues] = useState([]);
	const [lastID, setLastID] = useState(0);
	const [arraySize] = useState(buttonsData.length);
	//const [clockTimer, setClockTimer] = useState(30);
	const [result, setResult] = useState();
	//const [caption, setCaption] = useState();
	

	//LAYOUT HOOK NEW
	const [level, setLevel] = useState(1);
	const [points, setPoints] = useState(0);
    const [winner, setWinner] = useState(false);
    const [loser, setLoser] = useState(false);

	//FUNCTION THAT VERIFIES INPUTS
	const methodAddId = (id) => {
		if (id > lastID) {
			setValues(values.concat(id));
			setLastID(id);
			if (values.length === arraySize - 1) {
				endLevel(true);
				//ACA SE SUPONE QUE EL USUARIO GANO EL JUEGO, LOS 3 NIVELES?cREO QUE NO
				setWinner(true);
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
			setLoser(true);
		} else {//GANASTE
			setLevel(level + 1);
			setResult(true);
			//Set the state to show the dialog with right mensage
		}
	}

	//FUNCTION TO CONTROL LEVEL DETAILS
	//const gameHandler = (showLevel) => { }

	//FUNCTION TO GO TO LANDING PAGE AFTER EXITING BUTTON ON GAME 
	/*const goBack = () => {

	}*/

	return (
		<LayoutGame
			points={points}
			level={level}
			winner={winner}
			loser={loser}
			game="SecuenciaDeNumeros"
			backgroundImage={BackgroundMat}
			>
			<Paper className={clasessPaper.root}>
				<Grid container style={{ marginBottom: '1rem' }}>
					<Grid Item xs={12}>
						<Clock time={30 / level} endLevel={endLevel} stopTimer={result} />
					</Grid>
				</Grid>
				<Grid container >
					{buttonsData.map((image) => (
						<Grid Item xs={6} sm={3} align="center">
							<ButtonComponent className={clasessButtom.buttomNumber} id={image.id} methodAddId={methodAddId} />
						</Grid>
					))}

				</Grid>
			</Paper>
		</LayoutGame>
	);
}