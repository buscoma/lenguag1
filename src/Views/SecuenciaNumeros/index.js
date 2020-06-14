import React, { useState, useEffect } from 'react';


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
	const [refresh, setRefresh] = useState(false);
	const [errors, setErrors] = useState(false);
	const [loading, setLoading] = useState(false);
	const [secuencia, setSecuencia] = useState([]);

	//LAYOUT HOOK NEW
	const [level, setLevel] = useState(1);
	const [points, setPoints] = useState(0);
	const [winner, setWinner] = useState(false);
	const [loser, setLoser] = useState(false);

	//FUNCTION THAT VERIFIES INPUTS
	const methodAddId = (id) => {
		
		if (id => lastID) {
			
			setValues(values.concat(id));
			setLastID(id);
			console.log(values.length === arraySize - 1)
			if (values.length === arraySize - 1) {
				//Gano el nivel!!!
				console.log("acaca")
				levelUp();
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

	const levelUp = () => {
		
		if (level < 3) {
			setLevel(level + 1);
			setValues([])
			/* Todavia no termina el juego. Pido los datos para el siguiente nivel. */
			//endLevel(true);
		} else {
			/* Termino el juego, y GANASTE!!!!! */
			setWinner(true);
		}
	}


	

	useEffect(() => {

		async function fetchApi() {
			try {
				setLoading(true);
				localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZGMxZTIxMzczZjRjMDAxODE3MWZlNSIsImlhdCI6MTU5MjEzMzU0NSwiZXhwIjoxNTkyMjE5OTQ1fQ.q0PSJFC03u3sIpPyu_VN1EQjOXziiGmKDmfyWja77Qk");
				let token = localStorage.getItem("token");
	
				var myHeaders = new Headers();
				myHeaders.append("Authorization", "Bearer " + token);
	
				var requestOptions = {
					method: 'GET',
					redirect: 'follow',
					headers: myHeaders
				};
	
				const res = await fetch("https://backendlenguamaticag1.herokuapp.com/api/games/secuenciaNumeros?nivel="+ level, requestOptions);
				await res.json().then((json) => {
	
					console.log(json.data);
					setSecuencia(json.data);
				});
			} catch (e) {
				setErrors(e);
			} finally {
				setLoading(false);
			}
		}

		fetchApi();
		setRefresh(false);
	}, [refresh, level, errors]);

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
					{ loading ? " LOADING" : secuencia.map((image) => (
						<Grid Item xs={6} sm={3} align="center">
							<ButtonComponent className={clasessButtom.buttomNumber} id={image.id} methodAddId={methodAddId} />
						</Grid>
					))}

				</Grid>
			</Paper>
		</LayoutGame>
	);
}