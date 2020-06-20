// Librerias
import React, { useState, useEffect } from 'react';
import { Grid, Paper, Divider, Button } from '@material-ui/core';

// Componentes externos
import LayoutGame from '../../Components/Layout/LayaoutContainer';

// Componentes internos
import './Styles/palabrasPerdidas.css';
import Board from './Components/Board';
import Card from './Components/Card';
import BackgroundImage from './Assets/background.jpg';
import { useStylesPaper, useStylesCard } from './Styles';

const  PalabrasPerdidas = (props) => {
	const clasessPaper = useStylesPaper();
	const clasessCard = useStylesCard();

	const [state, setState] = useState({
		level: 1,
		posints: 0,
		winner: false,
		loser: false,
		frasesBackend : []
	});

	const [refresh, setRefresh] = useState(false);
	const [errors, setErrors] = useState(false);
	const [loading, setLoading] = useState(false);


	const [duplasCardBoard, setDuplasCardBoard] = useState(true);
	const [flag, setFlag] = useState(true);
	const juegoTerminado = () => {
		//console.log(duplasCardBoard);
		if (true/* duplasCardBoard.length === 4 */) {


				if (!duplasCardBoard) {
					setState((prev) => ({...prev, loser: true}) )
					return;
				}
				setLoading(true);
				setDuplasCardBoard([])
			pasarSigNivel();
			
		}

		else {
			alert("Faltan palabras por unir");
		}
	};

	const pasarSigNivel = () => {
		setState((prev) => ({...prev, level: prev.level+1}) )
		setLoading(false);
		setFlag(true)
	}

	const checkIfCorrect = (id1, id2) => {
/* 		alert(`id1 : ${id1} id2:${id2}`)
 */		if(duplasCardBoard === true && id1 !== id2){
			setDuplasCardBoard(false);
		}
	}

    useEffect(() => {
       if(flag){
		setFlag(false)
		   intento();
		   
	   }
    }, [flag, state]); 


	const intento = async function (){
		localStorage.setItem("token", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZGMwNjlkMzczZjRjMDAxODE3MWZlMyIsImlhdCI6MTU5MjYwMzczNSwiZXhwIjoxNTkyNjkwMTM1fQ.unOU6Qs-jhEbBjYyipgfro8b8jeEteV7AOlcli8hxio');
		let token = localStorage.getItem("token");

		var myHeaders = new Headers();
		myHeaders.append("Authorization", "Bearer " + token);

		var requestOptions = {
			method: 'GET',
			redirect: 'follow',
			headers: myHeaders
		};
		  console.log("https://backendlenguamaticag1.herokuapp.com/api/games/palabrasPerdidas?nivel="+ state.level)
		  fetch("https://backendlenguamaticag1.herokuapp.com/api/games/palabrasPerdidas?nivel="+ state.level, requestOptions)
			.then(response => response.text())
			.then(result =>{ console.log(JSON.parse(result).data["0"].frases); setState((prev) => ({...prev, frasesBackend : JSON.parse(result).data["0"].frases}))})
			.catch(error => console.log('error', error));
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
			<Paper classes={clasessPaper}>

				<Grid container spacing={3} className="row">

					<Grid item lg={3} md={3} xs={12} className="center">
						<Paper className={clasessPaper.rootBlack}>
							<Board id="board-0" className="board">
								{loading ? 'Loading...' : state.frasesBackend.map((item) => (
									<Card id={item.id} draggable="true" empty={false} classes={clasessCard}>
										{' '}
										<p> {item.palabra} </p>{' '}
									</Card>
								))}
							</Board>
						</Paper>
					</Grid>

					<Grid item lg={9} md={9} xs={12}>
						<div>
							<Divider />
							{loading ? 'Loading...' : state.frasesBackend.map((item) => (
								<div>
									<div className="clearfix">
										<p> {item.frase_frente}</p>
										<div className="flexbox">
											<Board id="board-1" idBoard={item.id} empty={true} className="board" function={checkIfCorrect} />
										</div>
										<p>{item.frase_atras} </p>
									</div>
									<Divider />
								</div>
							))}
						</div>
					</Grid>

				</Grid>

				<Button onClick={juegoTerminado}> Corregir
        </Button>
	{/* 	<Button onClick={intento}> Corregir
        </Button> */}

			</Paper>



		</LayoutGame>
	);
}

export default PalabrasPerdidas;
