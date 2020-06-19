// Librerias
import React, { useState, useEffect } from 'react';
import { Grid, Paper, Divider } from '@material-ui/core';

// Componentes externos
import LayoutGame from '../../Components/Layout/LayaoutContainer';

// Componentes internos
import './Styles/palabrasPerdidas.css';
import Board from './Components/Board';
import Card from './Components/Card';
import BackgroundImage from './Assets/background.jpg';
import { useStylesPaper, useStylesCard } from './Styles';

function PalabrasPerdidas() {
	const clasessPaper = useStylesPaper();
	const clasessCard = useStylesCard();
	const [ frasesBackend, setFrasesBackend] = useState([]);

	const [ state, setState ] = useState({
		level: 1,
		posints: 0,
		winner: false,
		loser: false
	});

	const [ refresh, setRefresh ] = useState(false);
	const [ errors, setErrors ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  
	useEffect(
		() => {
			async function fetchApi() {
				try {
					setLoading(true);
					localStorage.setItem(
						'token',
						'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZGMwNjlkMzczZjRjMDAxODE3MWZlMyIsImlhdCI6MTU5MjYwMzczNSwiZXhwIjoxNTkyNjkwMTM1fQ.unOU6Qs-jhEbBjYyipgfro8b8jeEteV7AOlcli8hxio'
					);
					let token = localStorage.getItem('token');

					var myHeaders = new Headers();
					myHeaders.append('Authorization', 'Bearer ' + token);

					var requestOptions = {
						method: 'GET',
						redirect: 'follow',
						headers: myHeaders
					};

					const res = await fetch(
						'https://backendlenguamaticag1.herokuapp.com/api/games/palabrasPerdidas?nivel=' + state.level,
						requestOptions
					);
					await res.json().then((json) => {
            console.log(json.data['0'].frases)
            setFrasesBackend(json.data['0'].frases);
					});
				} catch (e) {
					setErrors(e);
				} finally {
					setLoading(false);
				}
			}

			fetchApi();
			setRefresh(false);
		},
		[ refresh, state.level, errors ]
	);

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
								{ loading ? 'Loading...' : frasesBackend.map((item) => (
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
											<Board id="board-1" empty={true} className="board" />
										</div>
										<p>{item.frase_atras} </p>
									</div>
									<Divider />
								</div>
							))}
						</div>
					</Grid>
				</Grid>
			</Paper>
		</LayoutGame>
	);
}

export default PalabrasPerdidas;
