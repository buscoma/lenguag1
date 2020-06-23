// Librerias
import React, { useState, useEffect } from 'react';
import { Grid, Paper, Divider, Button, Typography } from '@material-ui/core';

// Componentes externos
import LayoutGame from '../../Components/Layout/LayaoutContainer';

// Componentes internos
import './Styles/palabrasPerdidas.css';
import BackgroundImage from './Assets/background.jpg';
import { useStylesPaper, useStyleTypografy, useStyleCenter } from './Styles';
import Botonera from './Components/Botonera';
import Frases from './Components/Frases';
import { object } from 'prop-types';



const PalabrasPerdidas = () => {
	const clasessPaper = useStylesPaper();
	const clasessTypografy = useStyleTypografy();
	const classesCenter = useStyleCenter();

	const [state, setState] = useState({
		level: 1,
		posints: 0,
		winner: false,
		loser: false,
		frasesBackend: [],
	});

	const [emptySentences, setEmptySentences] = useState([]);
	const [looseWords, setLooseWords] = useState([]);
	const [flag, setFlag] = useState(true);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (flag) {
			setFlag(false)
			intento();
		}
	}, [flag, state]);

	const intento = async function () {
		localStorage.setItem("token", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZGMxZTIxMzczZjRjMDAxODE3MWZlNSIsImlhdCI6MTU5Mjc4NDYxNCwiZXhwIjoxNTkyODcxMDE0fQ.3Gvz9Yn1VFGerOTKBj6K3bpzHamAkT2kECE0_gqxtMc');
		let token = localStorage.getItem("token");

		var myHeaders = new Headers();
		myHeaders.append("Authorization", "Bearer " + token);

		var requestOptions = {
			method: 'GET',
			redirect: 'follow',
			headers: myHeaders
		};
		console.log("https://backendlenguamaticag1.herokuapp.com/api/games/palabrasPerdidas?nivel=" + state.level)
		fetch("https://backendlenguamaticag1.herokuapp.com/api/games/palabrasPerdidas?nivel=" + state.level, requestOptions)
			.then(response => response.text())
			.then(result => {

				let list = JSON.parse(result).data["0"].frases;

				list.forEach(item => {
					let looseWord = { idWord: item.id, word: item.palabra, isUsed: false }
					let aux = looseWords;
					aux.push(looseWord);
					setLooseWords(aux);
				})

				list.forEach(item => {
					let emptySentence = { idSentence: item.id, begin: item.frase_frente, end: item.frase_atras, idWord: undefined, word: undefined }
					let aux = emptySentences;
					aux.push(emptySentence);
					setEmptySentences(aux);
				})
				console.log(emptySentences)

				//viejo
				setState((prev) => ({ ...prev, frasesBackend: list }));
			})
			.catch(error => console.log('error', error));
	}

	const juegoTerminado = () => {
		if(state.level < 3){
			let threeIsEmptySentence = emptySentences.some(e => (e.idWord === undefined));
			console.log(emptySentences)
			console.log(!threeIsEmptySentence)
			if (!threeIsEmptySentence) {
				let isLevelComplete = emptySentences.some(e => (e.idWord === e.idSentence));
				console.log(isLevelComplete)
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
		setEmptySentences([]);
		setLooseWords([]);
		setState((prev) => ({ ...prev, level: prev.level + 1 }))
		setLoading(false);
		setFlag(true)
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
			level={state.level}
			points={state.posints}
			winner={state.winner}
			loser={state.loser}
			game="PalabrasPerdidas"
			backgroundImage={BackgroundImage}
		>
			<div id="center" className={classesCenter.center}>
				<Paper classes={clasessPaper}>

					<Grid container spacing={3} className="row">

						<Grid container item lg={3} md={9} xs={12}>
							<Grid item xs={12}>
								<Typography className={clasessTypografy.Title} variant="h5"> Palabras perdidas</Typography>
							</Grid>
							{loading ? 'Loading...' :
								looseWords.map((item) => (
									<Grid item xs={12}>
										<Botonera word={item} looserWordSelected={looserWordSelected} onClick={setLooserWordSelected} />
									</Grid>
								))}
						</Grid>

						<Grid container item lg={9} md={9} xs={12}>
							<Grid item xs={12}>
								<Typography className={clasessTypografy.Title} variant="h5"> Frases a completar</Typography>
							</Grid>
							{loading ? 'Loading...' : emptySentences.map((item) => (
								<Grid item xs={12}>
									<Frases sentence={item} onClickSelectMe={completarFrase} thereIsWordSelected={looserWordSelected !== undefined} setPalabra={recuperarPalabra} />
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
