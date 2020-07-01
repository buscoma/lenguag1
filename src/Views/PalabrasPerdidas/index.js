// Librerias
import React, { useState, useEffect } from 'react';
import { Grid, Paper, Button, Typography } from '@material-ui/core';

// Componentes externos
import LayoutGame from '../../Components/Layout/LayaoutContainer';

// Componentes internos
import './Styles/palabrasPerdidas.css';
import BackgroundImage from './Assets/background.jpg';
import { useStylesPaper, useStyleTypografy, useStyleCenter} from './Styles';
import Botonera from './Components/Botonera';
import Frases from './Components/Frases';
import {authFetch} from '../../AuthProvider';



const PalabrasPerdidas = () => {
	const clasessPaper = useStylesPaper();
	const clasessTypografy = useStyleTypografy();
	const classesCenter = useStyleCenter();

	const [state, setState] = useState({
		level: 1,
		points: 0,
		winner: false,
		loser: false,
		frasesBackend: [],
	});

	const [emptySentences, setEmptySentences] = useState([]);
	const [looseWords, setLooseWords] = useState([]);
	const [flag, setFlag] = useState(true);
	const [loading, setLoading] = useState(false);


	const intento = async function () {
		authFetch("https://backendlenguamaticag1.herokuapp.com/api/games/palabrasPerdidas?nivel=" + state.level)
		.then(response => response.json())
		.then(response => {
			
			let list = response.data.frases;

			list.forEach(item => {
				let looseWord = { idWord: item.id, word: item.palabra, isUsed: false }
				let aux = looseWords;
				aux.push(looseWord);
				aux.sort(function(){return Math.random() - 0.5})
				setLooseWords(aux);
			})

			list.forEach(item => {
				let emptySentence = { idSentence: item.id, begin: item.frase_frente, end: item.frase_atras, idWord: undefined, word: undefined }
				let aux = emptySentences;
				aux.push(emptySentence);
				aux.sort(function(){return Math.random() - 0.5})
				setEmptySentences(aux);
			})
			setState((prev) => ({ ...prev, frasesBackend: list }));
		})
		.catch(error => console.log('error', error));
	}

	useEffect(() => {
		if (flag) {
			setFlag(false)
			intento();
		}
	}, [flag, state]);

	const juegoTerminado = () => {
		if(state.level < 3){
			let threeIsEmptySentence = emptySentences.some(e => (e.idWord === undefined));
			if (!threeIsEmptySentence) {
				let isLevelComplete = emptySentences.some(e => (e.idWord === e.idSentence));
				if (isLevelComplete) {
					pasarSigNivel();
				} else {
					setState((prev) => ({ ...prev, loser: true }))
				}
			} else {
				alert("faltan palabras")
			}
		}else{
			setState((prev) => ({ ...prev, winner: true }))
		}

	};

	const pasarSigNivel = () => {
		getPoints();
		setEmptySentences([]);
		setLooseWords([]);
		playerDetails()
		.then(data => {
			sessionStorage.setItem("User", JSON.stringify(data));
			setState((prev) => ({ ...prev, points: data.points, level: prev.level + 1 }))
		});
		setLoading(false);
		setFlag(true)
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

	const getPoints = () => {
		authFetch("https://backendlenguamaticag1.herokuapp.com/api/player/levelUp?game=palabrasPerdidas&level=" + state.level)
		.catch(error => console.log('error', error));
	}

	const [looserWordSelected, setLooserWordSelected] = useState(undefined);

	const changeUsedWord = (idWord) => {
		let wordFind;
		let arrayAux = looseWords;
		arrayAux.forEach(element => {
			if (element.idWord === idWord) {
				element.isUsed = !element.isUsed;
				wordFind = element;
			}
		});
		setLooseWords(arrayAux);
		return wordFind;
	}

	const fullSentence = (idSentence, word) => {
		let arrayAux = emptySentences;
		arrayAux.forEach(element => {
			if (element.idSentence === idSentence) {
				element.idWord = word.idWord;
				element.word = word.word;
			}
		});
		setEmptySentences(arrayAux);
	}


	const completarFrase = (idSentence) => {
		let word = changeUsedWord(looserWordSelected);
		fullSentence(idSentence, word);
		setLooserWordSelected(undefined)
	}

	const recuperarPalabra = (idSentence, idWord) => {
		changeUsedWord(idWord);
		fullSentence(idSentence, { word: undefined, idWord: undefined });
	}


	return (
		<LayoutGame
			level={ state.level}
			points={state.points}
			winner={state.winner}
			loser={state.loser}
			game="PalabrasPerdidas"
			backgroundImage={BackgroundImage}
		>
			<div id="center" className={classesCenter.center}>
				<Paper classes={clasessPaper}>

					<Grid container spacing={3} className="row">

						<Grid container item  xs={12} md={3}>
							<Grid item xs={12}>
								<Typography className={clasessTypografy.Title} variant="h5"> Palabras perdidas</Typography>
							</Grid>
							{loading ? 'Loading...' :
								looseWords.map((item) => (
									<Grid key={item.id} item xs={6} md={12}>
										<Botonera key={item.id} word={item} looserWordSelected={looserWordSelected} onClick={setLooserWordSelected} />
									</Grid>
								))}
						</Grid>

						<Grid container item  xs={12} md={9}>
							<Grid item xs={12}>
								<Typography className={clasessTypografy.Title} variant="h5"> Frases a completar</Typography>
							</Grid>
							{loading ? 'Loading...' : emptySentences.map((item) => (
								<Grid key={item.id} item xs={12}>
									<Frases key={item.id} sentence={item} onClickSelectMe={completarFrase} thereIsWordSelected={looserWordSelected !== undefined} setPalabra={recuperarPalabra} />
								</Grid>
							))}

						</Grid>
						<Grid item xs={12}  className={classesCenter.center}>
							<Button variant="contained" color="secondary" onClick={juegoTerminado}> Corregir </Button>
						</Grid>
					</Grid>



				</Paper>

			</div>



		</LayoutGame>
	);
}

export default PalabrasPerdidas;
