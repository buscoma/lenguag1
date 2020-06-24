import React, { useState, useEffect } from "react";

//Librerias
import { Grid, Paper, Button, Collapse } from "@material-ui/core";

// Componentes externos
import LayoutGame from "../../Components/Layout/LayaoutContainer";

// Componentes internos
import { BackgroundMat } from "./Assets";
import ButtonComponent from "./Components/ButtonComponent";
import Clock from "./Components/Clock";
import controller from "./Controller";
import { useStylesPaper, useStylesButtom } from "./Styles";

import { authFetch } from "../../AuthProvider";

export default function SecuenciaDeNumeros(props) {

	const clasessPaper = useStylesPaper();
	const clasessButtom = useStylesButtom();

	const buttonsData = controller();
	const [values, setValues] = useState([]);
	const [lastID, setLastID] = useState(0);
	const [arraySize] = useState(buttonsData.length);
	const [refresh, setRefresh] = useState(false);
	const [errors, setErrors] = useState(false);
	const [loading, setLoading] = useState(false);
	const [secuencia, setSecuencia] = useState([]);

	//LAYOUT HOOK NEW
	const [level, setLevel] = useState(1);
	const [points, setPoints] = useState(0);
	const [winner, setWinner] = useState(false);
	const [loser, setLoser] = useState(false);

	const [stopTimer, setStopTimer] = useState(true);
	const time = 30;

	//FUNCTION THAT VERIFIES INPUTS
	const methodAddId = (id) => {
		if (id > lastID) {
			setValues(values.concat(id));
			setLastID(id);
			if (values.length === arraySize - 1) {
				levelUp();
			}
		}
		else {
			/* Perdiste, fin del juego */
			setLoser(true)
		}
	};

	//FUNCTION TO IDENTIFY WHEN TIME EXPIRES or FUNCTION TO STOP CLOCK AND ADD LEVEL 
	const timerIsUp = () => {
		setLoser(true);
	}

	const levelUp = () => {
		if (level < 3) {/* Todavia no termina el juego. Pido los datos para el siguiente nivel. */
			setLevel(level + 1);
			setValues([]); //Vacio la lista de numeros seleccionados.
			setLastID(0);
			setStopTimer(true);
		} else {/* Termino el juego, y GANASTE!!!!! */
			setWinner(true);
		}
	}

	const startNextLevel = () => {
		setStopTimer(false);
	}


	useEffect(() => {
		async function fetchApi() {
			try {
				setLoading(true);
				
				authFetch(
                    "https://backendlenguamaticag1.herokuapp.com/api/games/secuenciaNumeros?nivel=" +
                        level
                )
                    .then((res) => res.json())
                    .then((json) => {
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
						<Clock time={time} level={level} timeIsUp={timerIsUp} stopTimer={stopTimer} />
					</Grid>
				</Grid>
				<Collapse in={stopTimer} >
					<Grid container>
						<Grid Item xs={12} style={{textAlign:"center"}}>
							<Button variant="contained" onClick={startNextLevel} > Comenzar</Button>
						</Grid>
						</Grid>
					</Collapse>
				<Collapse in={!stopTimer} >
					<Grid container >
						{loading ? " LOADING" : secuencia.map((image) => (
							<Grid Item xs={6} sm={3} align="center">
								<ButtonComponent className={clasessButtom.buttomNumber} id={image.id} methodAddId={methodAddId} />
							</Grid>
						))}
					</Grid>
				</Collapse>
			</Paper>
		</LayoutGame>
	);
}
