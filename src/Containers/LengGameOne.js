import React, { Component, useState } from "react";
import { Button, Tab } from "@material-ui/core";
import NavBar from "../Components/NavBar.js";
import Typography from "../Components/Typography";
import getText from "../Components/LengGameOne/getText";
import getText2 from "../Components/LengGameOne/getText2";
import getText3 from "../Components/LengGameOne/getText3";
import Snake from "../Components/LengGameOne/Snake";
import Food from "../Components/LengGameOne/Food";
import Food2 from "../Components/LengGameOne/Food2";
import Food3 from "../Components/LengGameOne/Food3";
import Food4 from "../Components/LengGameOne/Food4";
import Food5 from "../Components/LengGameOne/Food5";
import Preview from "../Components/LengGameOne/Preview";
import DialogMensaje from "../Components/Dialog/Dialog";

const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y];
};

const initialState = {
  text: getText(),
  //userInput: '',
  //symbols: 0,
  //sec: 0,
  //started: false,
  //finished: false,
  food: getRandomCoordinates(),
  food2: getRandomCoordinates(),
  food3: getRandomCoordinates(),
  food4: getRandomCoordinates(),
  food5: getRandomCoordinates(),
  speed: 50,
  direction: "RIGHT",
  snakeDots: [
    [0, 0],
    [2, 0],
    [4, 0],
  ],
};

const initialState2 = {
  text: getText2(),

  food: getRandomCoordinates(),
  food2: getRandomCoordinates(),
  food3: getRandomCoordinates(),
  food4: getRandomCoordinates(),
  food5: getRandomCoordinates(),

  direction: "RIGHT",
  snakeDots: [
    [0, 0],
    [2, 0],
    [4, 0],
    [6, 0],
    [8, 0],
    [10, 0],
    [12, 0],
    [14, 0],
    [16, 0],
  ],
  speed: 50,
};
const initialState3 = {
  text: getText3(),

  food: getRandomCoordinates(),
  food2: getRandomCoordinates(),
  food3: getRandomCoordinates(),
  food4: getRandomCoordinates(),
  food5: [0, 0],
  speed: 40,
  direction: "RIGHT",
  snakeDots: [
    [0, 0],
    [2, 0],
    [4, 0],
    [6, 0],
    [8, 0],
    [10, 0],
    [12, 0],
    [14, 0],
    [16, 0],
    [18, 0],
    [20, 0],
    [22, 0],
    [24, 0],
  ],
};

let user = { Name: "Ale" };

let showWinning = false;
let nivel = 1;
let startGame = true;
let showDialog = false;

function handle(value) {
  return !value;
}

class LengGameOne extends Component {
  state = initialState3;

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
        this.setState({ direction: "UP" });
        break;
      case 40:
        this.setState({ direction: "DOWN" });
        break;
      case 37:
        this.setState({ direction: "LEFT" });
        break;
      default:
        this.setState({ direction: "RIGHT" });
        break;
    }
  };
  botonAbajo = (e) => {
    e = e || window.event;
    {
      this.setState({ direction: "DOWN" });
    }
  };
  botonArriba = (e) => {
    e = e || window.event;
    {
      this.setState({ direction: "UP" });
    }
  };
  botonIzquierda = (e) => {
    e = e || window.event;
    {
      this.setState({ direction: "LEFT" });
    }
  };
  botonDerecha = (e) => {
    e = e || window.event;
    {
      this.setState({ direction: "RIGHT" });
    }
  };

  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];

    switch (this.state.direction) {
      case "RIGHT":
        head = [head[0] + 2, head[1]];
        break;
      case "LEFT":
        head = [head[0] - 2, head[1]];
        break;
      case "DOWN":
        head = [head[0], head[1] + 2];
        break;
      default:
        head = [head[0], head[1] - 2];
        break;
    }
    dots.push(head);
    dots.shift();
    this.setState({
      snakeDots: dots,
    });
  };

  checkIfOutOfBorders() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.onGameOver();
    }
  }

  checkIfCollapsed() {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach((dot) => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
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
    let food5 = this.state.food5;
    let text = this.state.text;

    if (
      this.state.snakeDots.length <= 8 &&
      (text === "Rojo" || text === "#FF0000")
    ) {
      if (head[0] === food[0] && head[1] === food[1]) {
        this.setState({
          food: getRandomCoordinates(),
          food2: getRandomCoordinates(),
          food3: getRandomCoordinates(),
          food4: getRandomCoordinates(),
          text: getText(),
        });
        this.enlargeSnake();
        this.increaseSpeed();
        this.onNewLevel();
      } else if (head[0] === food2[0] && head[1] === food2[1]) {
        this.onGameOver();
      } else if (head[0] === food3[0] && head[1] === food3[1]) {
        this.onGameOver();
      } else if (head[0] === food4[0] && head[1] === food4[1]) {
        this.onGameOver();
      }
    } else if (
      this.state.snakeDots.length >= 9 &&
      this.state.snakeDots.length < 13 &&
      (text === "Rojo" || text === "#FF0000")
    ) {
      if (head[0] === food[0] && head[1] === food[1]) {
        this.setState({
          food: getRandomCoordinates(),
          food2: getRandomCoordinates(),
          food3: getRandomCoordinates(),
          food4: getRandomCoordinates(),
          text: getText2(),
        });
        this.enlargeSnake();
        this.increaseSpeed();
        this.onNewLevel2();
      } else if (head[0] === food2[0] && head[1] === food2[1]) {
        this.onGameOver();
      } else if (head[0] === food3[0] && head[1] === food3[1]) {
        this.onGameOver();
      } else if (head[0] === food4[0] && head[1] === food4[1]) {
        this.onGameOver();
      }
    } else if (this.state.snakeDots.length >= 13 && text === "Ultravioleta") {
      if (head[0] === food5[0] && head[1] === food5[1]) {
        this.setState({
          food: getRandomCoordinates(),
          food2: getRandomCoordinates(),
          food3: getRandomCoordinates(),
          food4: getRandomCoordinates(),

          text: getText3(),
        });
        this.enlargeSnake();
        this.increaseSpeed();
        this.onNewLevel3();
      } else if (head[0] === food2[0] && head[1] === food2[1]) {
        this.onGameOver();
      } else if (head[0] === food3[0] && head[1] === food3[1]) {
        this.onGameOver();
      } else if (head[0] === food4[0] && head[1] === food4[1]) {
        this.onGameOver();
      } else if (head[0] === food[0] && head[1] === food[1]) {
        this.onGameOver();
      }
    } else if (
      this.state.snakeDots.length <= 8 &&
      (text === "Azul" || text === "#0000FF")
    ) {
      if (head[0] === food2[0] && head[1] === food2[1]) {
        this.setState({
          food: getRandomCoordinates(),
          food2: getRandomCoordinates(),
          food3: getRandomCoordinates(),
          food4: getRandomCoordinates(),
          text: getText(),
        });
        this.enlargeSnake();
        this.increaseSpeed();
        this.onNewLevel();
      } else if (head[0] === food[0] && head[1] === food[1]) {
        this.onGameOver();
      } else if (head[0] === food3[0] && head[1] === food3[1]) {
        this.onGameOver();
      } else if (head[0] === food4[0] && head[1] === food4[1]) {
        this.onGameOver();
      }
    } else if (
      this.state.snakeDots.length >= 9 &&
      this.state.snakeDots.length < 13 &&
      (text === "Azul" || text === "#0000FF")
    ) {
      if (head[0] === food2[0] && head[1] === food2[1]) {
        this.setState({
          food: getRandomCoordinates(),
          food2: getRandomCoordinates(),
          food3: getRandomCoordinates(),
          food4: getRandomCoordinates(),
          text: getText2(),
        });
        this.enlargeSnake();
        this.increaseSpeed();
        this.onNewLevel2();
      } else if (head[0] === food[0] && head[1] === food[1]) {
        this.onGameOver();
      } else if (head[0] === food3[0] && head[1] === food3[1]) {
        this.onGameOver();
      } else if (head[0] === food4[0] && head[1] === food4[1]) {
        this.onGameOver();
      }
    } else if (this.state.snakeDots.length >= 13 && text === "Ultravioleta") {
      if (head[0] === food5[0] && head[1] === food5[1]) {
        this.setState({
          food: getRandomCoordinates(),
          food2: getRandomCoordinates(),
          food3: getRandomCoordinates(),
          food4: getRandomCoordinates(),

          text: getText3(),
        });
        this.enlargeSnake();
        this.increaseSpeed();
        this.onNewLevel3();
      } else if (head[0] === food2[0] && head[1] === food2[1]) {
        this.onGameOver();
      } else if (head[0] === food3[0] && head[1] === food3[1]) {
        this.onGameOver();
      } else if (head[0] === food4[0] && head[1] === food4[1]) {
        this.onGameOver();
      } else if (head[0] === food[0] && head[1] === food[1]) {
        this.onGameOver();
      }
    } else if (
      this.state.snakeDots.length <= 8 &&
      (text === "Verde" || text === "#00FF00")
    ) {
      if (head[0] === food3[0] && head[1] === food3[1]) {
        this.setState({
          food: getRandomCoordinates(),
          food2: getRandomCoordinates(),
          food3: getRandomCoordinates(),
          food4: getRandomCoordinates(),
          text: getText(),
        });
        this.enlargeSnake();
        this.increaseSpeed();
        this.onNewLevel();
      } else if (head[0] === food[0] && head[1] === food[1]) {
        this.onGameOver();
      } else if (head[0] === food2[0] && head[1] === food2[1]) {
        this.onGameOver();
      } else if (head[0] === food4[0] && head[1] === food4[1]) {
        this.onGameOver();
      }
    } else if (
      this.state.snakeDots.length >= 9 &&
      this.state.snakeDots.length < 13 &&
      (text === "Verde" || text === "#00FF00")
    ) {
      if (head[0] === food3[0] && head[1] === food3[1]) {
        this.setState({
          food: getRandomCoordinates(),
          food2: getRandomCoordinates(),
          food3: getRandomCoordinates(),
          food4: getRandomCoordinates(),
          text: getText2(),
        });
        this.enlargeSnake();
        this.increaseSpeed();
        this.onNewLevel2();
      } else if (head[0] === food[0] && head[1] === food[1]) {
        this.onGameOver();
      } else if (head[0] === food2[0] && head[1] === food2[1]) {
        this.onGameOver();
      } else if (head[0] === food4[0] && head[1] === food4[1]) {
        this.onGameOver();
      }
    } else if (this.state.snakeDots.length >= 13 && text === "Ultravioleta") {
      if (head[0] === food5[0] && head[1] === food5[1]) {
        this.setState({
          food: getRandomCoordinates(),
          food2: getRandomCoordinates(),
          food3: getRandomCoordinates(),
          food4: getRandomCoordinates(),

          text: getText3(),
        });
        this.enlargeSnake();
        this.increaseSpeed();
        this.onNewLevel3();
      } else if (head[0] === food2[0] && head[1] === food2[1]) {
        this.onGameOver();
      } else if (head[0] === food3[0] && head[1] === food3[1]) {
        this.onGameOver();
      } else if (head[0] === food4[0] && head[1] === food4[1]) {
        this.onGameOver();
      } else if (head[0] === food[0] && head[1] === food[1]) {
        this.onGameOver();
      }
    } else if (
      this.state.snakeDots.length <= 8 &&
      (text === "Violeta" || text === "##7F00FF")
    ) {
      if (head[0] === food4[0] && head[1] === food4[1]) {
        this.setState({
          food: getRandomCoordinates(),
          food2: getRandomCoordinates(),
          food3: getRandomCoordinates(),
          food4: getRandomCoordinates(),
          text: getText(),
        });
        this.enlargeSnake();
        this.increaseSpeed();
        this.onNewLevel();
      } else if (head[0] === food[0] && head[1] === food[1]) {
        this.onGameOver();
      } else if (head[0] === food2[0] && head[1] === food2[1]) {
        this.onGameOver();
      } else if (head[0] === food3[0] && head[1] === food3[1]) {
        this.onGameOver();
      }
    } else if (
      this.state.snakeDots.length >= 9 &&
      this.state.snakeDots.length < 13 &&
      (text === "Violeta" || text === "#7F00FF")
    ) {
      if (head[0] === food4[0] && head[1] === food4[1]) {
        this.setState({
          food: getRandomCoordinates(),
          food2: getRandomCoordinates(),
          food3: getRandomCoordinates(),
          food4: getRandomCoordinates(),
          text: getText2(),
        });
        this.enlargeSnake();
        this.increaseSpeed();
        this.onNewLevel2();
      } else if (head[0] === food[0] && head[1] === food[1]) {
        this.onGameOver();
      } else if (head[0] === food2[0] && head[1] === food2[1]) {
        this.onGameOver();
      } else if (head[0] === food3[0] && head[1] === food3[1]) {
        this.onGameOver();
      }
    } else if (this.state.snakeDots.length >= 13 && text === "Ultravioleta") {
      if (head[0] === food5[0] && head[1] === food5[1]) {
        this.setState({
          food: getRandomCoordinates(),
          food2: getRandomCoordinates(),
          food3: getRandomCoordinates(),
          food4: getRandomCoordinates(),

          text: getText3(),
        });
        this.enlargeSnake();
        this.increaseSpeed();
        this.onNewLevel3();
      } else if (head[0] === food2[0] && head[1] === food2[1]) {
        this.onGameOver();
      } else if (head[0] === food3[0] && head[1] === food3[1]) {
        this.onGameOver();
      } else if (head[0] === food4[0] && head[1] === food4[1]) {
        this.onGameOver();
      } else if (head[0] === food[0] && head[1] === food[1]) {
        this.onGameOver();
      }
    }
  }

  enlargeSnake() {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([]);
    this.setState({
      snakeDots: newSnake,
    });
  }

  increaseSpeed() {
    if (this.state.speed > 5) {
      this.setState({
        speed: this.state.speed - 50,
      });
    }
  }

  onGameOver() {
    if (!showWinning) {
      //showDialog = handle(showDialog);
      if (this.state.snakeDots.length <= 4) {
        alert(
          `Game Over. Sumo ${
            this.state.snakeDots.length - 3
          } pregunta correcta!`
        );
      } else {
        alert(
          `Game Over. Sumo ${
            this.state.snakeDots.length - 3
          } preguntas correctas!`
        );
      }

      this.setState(initialState);
      //this.setState(stopState);
    }
  }

  onNewLevel() {
    if (this.state.snakeDots.length === 7) {
      alert(`FELICITACIONES, AL SIGUIENTE NIVEL: NIVEL 2`);
      //showDialog = handle(showDialog);
      //showWinning=true;
      this.setState(initialState2);
    }
  }
  onNewLevel2() {
    if (this.state.snakeDots.length === 12) {
      alert(`FELICITACIONES, AL SIGUIENTE NIVEL: NIVEL DIOS`);
      //showDialog = handle(showDialog);
      //showWinning=true;
      this.setState(initialState3);
    }
  }
  onNewLevel3() {
    if (this.state.snakeDots.length === 13) {
      showDialog = handle(showDialog);
      showWinning = true;
      this.setState(initialState);
    }
  }

  onRestart = () => {
    this.setState(initialState);
  };

  onFinish(userInput) {
    if (userInput === this.state.text) {
      clearInterval(this.interval);
      this.setState({
        finished: true,
      });
    }
  }

  render() {
    return (
      <div>
        <NavBar User={user} />
        <Typography h2>JUEGO DE LENGUA</Typography>
        <div className="game-area">
          <Snake snakeDots={this.state.snakeDots} />
          <Food dot={this.state.food} />
          <Food2 dot={this.state.food2} />
          <Food3 dot={this.state.food3} />
          <Food4 dot={this.state.food4} />
          <Food5 dot={this.state.food5} />
          <div className="game-area2">
            <Preview justifyContent="center" text={this.state.text} />
            <Button
              variant="contained"
              color="secondary"
              onClick={this.onRestart}
            >
              Restart
            </Button>
            <Button variant="contained" color="primary" href="/landing_page">
              Volver
            </Button>
            <Tab />{" "}
            <Button variant="contained" onClick={this.botonArriba}>
              ARRIBA
            </Button>
            <br />
            <Tab />
            <Tab />
            <Button variant="contained" onClick={this.botonIzquierda}>
              IZQUIERDA
            </Button>
            <Button variant="contained" onClick={this.botonDerecha}>
              DERECHA
            </Button>
            <br />
            <Tab />
            <Tab />
            <Button variant="contained" onClick={this.botonAbajo}>
              ABAJO
            </Button>
          </div>
        </div>
        {showDialog ? (
          showWinning ? (
            <DialogMensaje
              show={true}
              volverPagAnterior="landing_page"
              volverJugar="leng_game_one"
              siguienteNivel="..."
              tipo="Ganaste"
              nivel={nivel}
            />
          ) : (
            <DialogMensaje
              show={true}
              volverPagAnterior="landing_page"
              volverJugar="leng_game_one"
              siguienteNivel="..."
              tipo="Perdiste"
              nivel={nivel}
            />
          )
        ) : null}
      </div>
    );
  }
}

export default LengGameOne;
