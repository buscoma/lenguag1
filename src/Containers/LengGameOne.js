import React, { Component } from 'react';
import Preview from '../Component/Preview';
import getText from '../Component/getText';
import Snake from '../Component/Snake';
import Food from '../Component/Food';
import Food2 from '../Component/Food2';
import Food3 from '../Component/Food3';
import Food4 from '../Component/Food4';

const getRandomCoordinates = () => {
	let min = 1;
	let max = 98;
	let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
	let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
	return [ x, y ];
};

const initialState = {
	text: getText(),
	userInput: '',
	symbols: 0,
	sec: 0,
	started: false,
	finished: false,
	food: getRandomCoordinates(),
	food2: getRandomCoordinates(),
	food3: getRandomCoordinates(),
	food4: getRandomCoordinates(),
	speed: 100,
	direction: 'RIGHT',
	snakeDots: [ [ 0, 0 ], [ 2, 0 ] ]
};

class LengGameOne extends Component {
	state = initialState;

	componentDidMount() {
		setInterval(this.moveSnake, this.state.speed);
		document.onkeydown = this.onKeyDown;
	}

	componentDidUpdate() {
		this.checkIfOutOfBorders();
		this.checkIfCollapsed();
		this.checkIfEat();
	}

	onKeyDown = (e) => {
		e = e || window.event;
		switch (e.keyCode) {
			case 38:
				this.setState({ direction: 'UP' });
				break;
			case 40:
				this.setState({ direction: 'DOWN' });
				break;
			case 37:
				this.setState({ direction: 'LEFT' });
				break;
			case 39:
				this.setState({ direction: 'RIGHT' });
				break;
		}
	};

	moveSnake = () => {
		let dots = [ ...this.state.snakeDots ];
		let head = dots[dots.length - 1];

		switch (this.state.direction) {
			case 'RIGHT':
				head = [ head[0] + 2, head[1] ];
				break;
			case 'LEFT':
				head = [ head[0] - 2, head[1] ];
				break;
			case 'DOWN':
				head = [ head[0], head[1] + 2 ];
				break;
			case 'UP':
				head = [ head[0], head[1] - 2 ];
				break;
		}
		dots.push(head);
		dots.shift();
		this.setState({
			snakeDots: dots
		});
	};

	checkIfOutOfBorders() {
		let head = this.state.snakeDots[this.state.snakeDots.length - 1];
		if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
			this.onGameOver();
		}
	}

	checkIfCollapsed() {
		let snake = [ ...this.state.snakeDots ];
		let head = snake[snake.length - 1];
		snake.pop();
		snake.forEach((dot) => {
			if (head[0] == dot[0] && head[1] == dot[1]) {
				this.onGameOver();
			}
		});
	}

	checkIfEat() {
		let head = this.state.snakeDots[this.state.snakeDots.length - 1];
		let food = this.state.food;
		let food2 = this.state.food2;
		let food3 = this.state.food3;
		let food4 = this.state.food4;

		if (head[0] == food[0] && head[1] == food[1]) {
			this.setState({
				food: getRandomCoordinates(),
				food2: getRandomCoordinates(),
				food3: getRandomCoordinates(),
				food4: getRandomCoordinates()
			});
			this.enlargeSnake();
			this.increaseSpeed();
		} else if (head[0] == food2[0] && head[1] == food2[1]) {
			this.onGameOver();
		} else if (head[0] == food3[0] && head[1] == food3[1]) {
			this.onGameOver();
		} else if (head[0] == food4[0] && head[1] == food4[1]) {
			this.onGameOver();
		}
	}

	enlargeSnake() {
		let newSnake = [ ...this.state.snakeDots ];
		newSnake.unshift([]);
		this.setState({
			snakeDots: newSnake
		});
	}

	increaseSpeed() {
		if (this.state.speed > 10) {
			this.setState({
				speed: this.state.speed - 10
			});
		}
	}

	onGameOver() {
		alert(`Game Over. Snake length is ${this.state.snakeDots.length}`);
		this.setState(initialState);
	}

	onRestart = () => {
		this.setState(initialState);
	};

	onFinish(userInput) {
		if (userInput === this.state.text) {
			clearInterval(this.interval);
			this.setState({
				finished: true
			});
		}
	}

	render() {
		return (
			<div>
				<text className="titulo">JUEGO DE LENGUA</text>
				<div className="game-area">
					<Snake snakeDots={this.state.snakeDots} />
					<Food dot={this.state.food} />
					<Food2 dot={this.state.food2} />
					<Food3 dot={this.state.food3} />
					<Food4 dot={this.state.food4} />
					<div className="game-area2">
						<Preview text={this.state.text} userInput={this.state.userInput} />
						<button className="btn btn-light" onClick={this.onRestart}>
							Restart
						</button>
						<button className="btn btn-light" onClick={this.onRestart}>
							Volver
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default LengGameOne;
