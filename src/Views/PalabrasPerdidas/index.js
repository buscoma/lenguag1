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
import {authFetch} from '../../AuthProvider';

function PalabrasPerdidas() {
	const clasessPaper = useStylesPaper();
	const clasessCard = useStylesCard();
	const [frasesBackend, setFrasesBackend] = useState([]);
	const [up, setUp] = useState(true);
	const [state, setState] = useState({
		level: 1,
		posints: 0,
		winner: false,
		loser: false
	});

	const [refresh, setRefresh] = useState(false);
	const [errors, setErrors] = useState(false);
	const [loading, setLoading] = useState(false);


	const [duplasCardBoard, setDuplasCardBoard] = useState([]);

	const juegoTerminado = () => {
		//console.log(duplasCardBoard);
		if (duplasCardBoard.length === 4) {

			for (let index = 0; index < duplasCardBoard.length; index++) {

				if (duplasCardBoard[index].uno !== duplasCardBoard[index].dos) {
					setState((prev)=>({...prev, loser: true}));
					return;
				}
            }
            nestLevel();
		}

		else {
			alert("Faltan palabras por unir");
		}
    };

    const nestLevel = () => {
        if(state.level < 3){
            setState((prev)=>({...prev, level: prev.level +1}));
            setUp(true);
        }else{
            setState((prev)=>({...prev, winner: true}));
        }
        
    }
    

	useEffect(() => {
		async function fetchApi() {
			try {
				setLoading(true);
				
                if(up === true){
                    const res = await authFetch("https://backendlenguamaticag1.herokuapp.com/api/games/palabrasPerdidas?nivel=" + state.level);
                    await res.json().then((json) => { setFrasesBackend(json.data['0'].frases); console.log(json.data['0'].frases) });
                    setUp(false)
                }
			} catch (e) {
				setErrors(e);
			} finally {
				setLoading(false);
			}
		}

		fetchApi();
		setRefresh(false);
	}, [refresh, state.level, up, errors]);

    


	return (
		<LayoutGame
			level={ state.level}
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
								{loading ? 'Loading...' : frasesBackend.map((item) => (
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
							{loading ? 'Loading...' : frasesBackend.map((item) => (
								<div>
									<div className="clearfix">
										<p> {item.frase_frente}</p>
										<div className="flexbox">
											<Board id="board-1" idBoard={item.id} empty={true} className="board" addDupla={setDuplasCardBoard} />
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

			</Paper>



		</LayoutGame>
	);
}

export default PalabrasPerdidas;
