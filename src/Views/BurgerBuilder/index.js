// Librerias
import React, { useState, useEffect } from "react";
import { Paper, Typography, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

// Componentes externos
import LayoutGame from "../../Components/Layout/LayaoutContainer";
import BackgroundImage from "./Assets/FastFood.jpg";

// Componentes internos
import Burger from "./Components/Burger";
import BuildControls from "./Components/Burger/Components/BuildControls";
// import "./Styles/BurgerBuilder.css";
import DialogOperacion from "./Components/DialogOperacion";
import { authFetch } from "../../AuthProvider";

export default function BurgerBuilder(props) {
    console.log("Inicio");
    const [loadingState, setLoadingState] = useState(true);
    const [level, setLevel] = useState(1);
    const [refresh, setRefresh] = useState(false);
    const [errors, setErrors] = useState(false);
    const [gameState, setGameState] = useState({
      nivel: null,
      ingredients: {
        meat: 0,
        cheese: 0,
        salad: 0,
        bacon: 0,
      },
      openDialog: false,
      perdiste: false,
    });

    useEffect(() => {
        async function configurarNivel() {
            try {
                console.log("configurarNivel called");
                authFetch(
                    "https://backendlenguamaticag1.herokuapp.com/api/games/burgerBuilder?nivel=" +
                        level
                )
                    .then((res) => res.json())
                    .then((result1) => {
                        setGameState({ nivel: nivelEncontrado });
                    });
            } catch (e) {
                setErrors(e);
            } finally {
                setLoadingState(false);
            }
        }

        configurarNivel();
        setRefresh(false);
    }, [refresh, level, errors]);

    

    const randomInt = (min, max) => {
        return min + Math.floor((max - min) * Math.random());
    };

    const recuperarOperacion = (nivel) => {
        console.log("recuperarOperacion called");
        var operacion = null;

        if (nivel === 1) {
            let n1 = randomInt(1, 9);
            let n2 = randomInt(1, 9);
            let respuesta = n1 + n2;
            operacion = {
                numero1: n1,
                numero2: n2,
                operador: "+",
                respuesta: respuesta,
            };
        }

        if (nivel === 2) {
            let n1 = randomInt(1, 100);
            let n2 = randomInt(1, 30);
            let respuesta = n1 + n2;
            operacion = {
                numero1: n1,
                numero2: n2,
                operador: "+",
                respuesta: respuesta,
            };
        }

        if (nivel === 3) {
            let n1 = randomInt(16, 100);
            let n2 = randomInt(1, 16);
            let respuesta = n1 - n2;
            operacion = {
                numero1: n1,
                numero2: n2,
                operador: "-",
                respuesta: respuesta,
            };
        }

        return operacion;
    };

    const addIngridientHandler = (type) => {
      setGameState({ openDialog: true });

      const oldCount = gameState.ingredients[type];
      const updatedCount = oldCount + 1;
      const updatedIngredients = {
        ...gameState.ingredients,
      };
      updatedIngredients[type] = updatedCount;

      setGameState({
        ingredients: updatedIngredients,
      });
    };

    const removeIngridientHandler = (type) => {
      const oldCount = gameState.ingredients[type];
      if (oldCount <= 0) {
        return;
      }
      const updatedCount = oldCount - 1;
      const updatedIngredients = {
        ...gameState.ingredients,
      };
      updatedIngredients[type] = updatedCount;

      setGameState({
        ingredients: updatedIngredients,
      });
    };

    const handleDialogClose = () => {
      console.log("handleDialogClose called!");
      debugger;
      if (
        gameState.nivel.operacion.respuesta !==
        parseInt(gameState.nivel.operacion.respuestaUsuario)
      ) {
        //LOSER
        setGameState({
          perdiste: true,
        });
      } else {
        const nivelActual = gameState.nivel;
        nivelActual.operacion = recuperarOperacion(nivelActual.numero);
        setGameState({
          openDialog: false,
          nivel: nivelActual,
        });
      }
    };

    const handleRespuestaChanged = (event) => {
      console.log("handlerespuestachanged called!");

      const nivelActual = gameState.nivel;
      nivelActual.operacion.respuestaUsuario = event.target.value;
      setGameState({
        nivel: nivelActual,
      });
    };

    const handleGameOver = () => {
      console.log("handleGameOver called!");
      setGameState({
        nivel: configurarNivel(1),
        ingredients: {
          meat: 0,
          cheese: 0,
          salad: 0,
          bacon: 0,
        },
        openDialog: false,
        perdiste: false,
      });
    };

    const handleNextLevel = () => {
      console.log("handleNextLevel called!");
      let nivelSiguiente = gameState.nivel;
      if (nivelSiguiente.numero === 3) {
        this.setShow(true);
        this.setStateOfGame("END");
        return;
      }

      nivelSiguiente = configurarNivel(nivelSiguiente.numero + 1);
      setGameState({
        nivel: nivelSiguiente,
        ingredients: {
          meat: 0,
          cheese: 0,
          salad: 0,
          bacon: 0,
        },
      });

      //TODO: guardar en la bd el progreso.
    };

    const handleBotonOrdenar = () => {
      console.log("handleBotonOrdenar called");
      //TODO: validar que la orden este cumplida.
      if (
        gameState.ingredients.salad === gameState.nivel.orden.lechuga &&
        gameState.ingredients.bacon === gameState.nivel.orden.panceta &&
        gameState.ingredients.cheese === gameState.nivel.orden.queso &&
        gameState.ingredients.meat === gameState.nivel.orden.carne
      ) {
        handleNextLevel();
      } else {
        alert("Te faltan o sobran ingredientes!");
      }
    };

    const disabledInfo = {
      ...gameState.ingredients,
    };

    
    return (loadingState ? "..." :
      <LayoutGame
        backgroundImage={BackgroundImage}
        game="BurgerBilder"
        level={gameState.nivel.numero}
        points={0}
      >
        <div className="BurgerBuilder">
          <Paper className="OrderDetail" elevation={4}>
            <Typography variant="h6">Nivel {gameState.nivel.numero}</Typography>
            <Typography variant="inherit">
              Arma una hamburguesa con los siguientes ingredientes: Carne:{" "}
              {gameState.nivel.orden.carne}, Queso: {gameState.nivel.orden.queso},
              Lechuga: {gameState.nivel.orden.lechuga}, Panceta:{" "}
              {gameState.nivel.orden.panceta}
            </Typography>
          </Paper>
          <Burger ingredients={gameState.ingredients} />

          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xs={12} md={8}>
              <BuildControls
                ingridientAdded={addIngridientHandler}
                ingridientRemoved={removeIngridientHandler}
                disabled={disabledInfo}
                ingredients={gameState.ingredients}
              ></BuildControls>
            </Grid>
            <Grid item xs={12} md={4}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleBotonOrdenar()}
                className="OrderButton"
              >
                Marche pedido
              </Button>
            </Grid>
          </Grid>

          <DialogOperacion
            open={gameState.openDialog}
            handleClose={handleDialogClose}
            respuestaChanged={handleRespuestaChanged}
            operation={gameState.nivel.operacion}
            gameStatus={gameState.perdiste}
            handleGameOver={handleGameOver}
          />
        </div>
      </LayoutGame>
    );
}
