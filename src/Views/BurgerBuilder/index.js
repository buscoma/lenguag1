// Librerias
import React, { Component } from "react";
import { Paper, Typography, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

// Componentes externos
import LayoutGame from "../../Components/Layout/LayaoutContainer";
import BackgroundImage from "./Assets/FastFood.jpg";

// Componentes internos
import Burger from "./Components/Burger";
import BuildControls from "./Components/Burger/Components/BuildControls";
import "./Styles/BurgerBuilder.css";
import DialogOperacion from "./Components/DialogOperacion";
import { obtenerNivel, obtenerOperacion, setPoints } from "./Controller";

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nivel: { numero: 1 },
      ingredients: {
        meat: 0,
        cheese: 0,
        salad: 0,
        bacon: 0,
      },
      openDialog: false,
      perdiste: false,
      loading: true,
      winner: false,
      points: 0,
    };
  }

  componentDidMount() {
    obtenerNivel(1).then((nivelRecuperado) => {
      obtenerOperacion(1).then((operacion) => {
        nivelRecuperado.operacion = operacion;
        this.setState({ nivel: nivelRecuperado, loading: false });
      });
    });
  }

  randomInt = (min, max) => {
    return min + Math.floor((max - min) * Math.random());
  };

  addIngridientHandler = (type) => {
    this.setState({
      openDialog: true,
    });

    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;

    this.setState({
      ingredients: updatedIngredients,
    });
  };

  removeIngridientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;

    this.setState({
      ingredients: updatedIngredients,
    });
  };

  handleDialogClose = () => {
    if (
      this.state.nivel.operacion.respuesta !==
      parseInt(this.state.nivel.operacion.respuestaUsuario)
    ) {
      //LOSER
      this.setState({
        perdiste: true,
      });
    } else {
      const nivelActual = this.state.nivel;
      obtenerOperacion(nivelActual.nivel).then((operacion) => {
        nivelActual.operacion = operacion;
        this.setState({
          nivel: nivelActual,
          openDialog: false,
        });
      });
    }
  };

  handleRespuestaChanged = (event) => {
    const nivelActual = this.state.nivel;
    nivelActual.operacion.respuestaUsuario = event.target.value;
    this.setState({
      nivel: nivelActual,
    });
  };

  handleGameOver = () => {
    obtenerNivel(1).then((nivelRecuperado) => {
      obtenerOperacion(1).then((operacion) => {
        nivelRecuperado.operacion = operacion;
        this.setState({
          nivel: nivelRecuperado,
          ingredients: {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0,
          },
          openDialog: false,
          perdiste: false,
          loading: false,
        });
      });
    });
  };

  handleNextLevel = () => {
    let nivelactual = this.state.nivel;

    if (nivelactual.nivel === 3) {
      setPoints(nivelactual.nivel);
      this.setState({ winner: true });
      return;
    }

    obtenerNivel(nivelactual.nivel + 1).then((nivelRecuperado) => {
      obtenerOperacion(nivelactual.nivel + 1).then((operacion) => {
        nivelRecuperado.operacion = operacion;
        this.setState({
          nivel: nivelRecuperado,
          ingredients: {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0,
          },
          openDialog: false,
          perdiste: false,
          loading: false,
        });
        setPoints(nivelactual.nivel);
      });
    });
  };

  handleBotonOrdenar = () => {
    //TODO: validar que la orden este cumplida.
    if (
      this.state.ingredients.salad === this.state.nivel.orden.lechuga &&
      this.state.ingredients.bacon === this.state.nivel.orden.panceta &&
      this.state.ingredients.cheese === this.state.nivel.orden.queso &&
      this.state.ingredients.meat === this.state.nivel.orden.carne
    ) {
      this.handleNextLevel();
    } else {
      alert("Te faltan o sobran ingredientes!");
    }
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] < 0;
    }

    return this.state.loading ? (
      "..."
    ) : (
      <LayoutGame
        points={this.state.points}
        winner={this.state.winner}
        loser={this.state.perdiste}
        backgroundImage={BackgroundImage}
        game="BurgerBilder"
        level={this.state.nivel.nivel}
      >
        <div className="BurgerBuilder">
          <Paper className="OrderDetail" elevation={4}>
            <Typography variant="h6">Pedido del cliente</Typography>
            <Typography variant="inherit">
              ¡Marche una hamburguesa con los siguientes ingredientes!
              {this.state.nivel.orden.carne > 0 ? (" Carne: " + this.state.nivel.orden.carne + " feta/s") : ""}
              {this.state.nivel.orden.queso > 0 ? (" Queso: " + this.state.nivel.orden.queso + " feta/s"): ""} 
              {this.state.nivel.orden.lechuga > 0 ? (" Lechuga: " + this.state.nivel.orden.lechuga + " feta/s"): ""}
              {this.state.nivel.orden.panceta > 0 ? (" Panceta: " + this.state.nivel.orden.panceta + " feta/s") : ""}
            </Typography>
          </Paper>

          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xs={12} md={6}>
              <BuildControls
                ingridientAdded={this.addIngridientHandler}
                ingridientRemoved={this.removeIngridientHandler}
                disabled={disabledInfo}
                ingredients={this.state.ingredients}
              ></BuildControls>
            </Grid>
            <Grid item xs={12} md={6}>
              <Burger ingredients={this.state.ingredients} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => this.handleBotonOrdenar()}
                className="OrderButton"
              >
                Marche pedido
              </Button>
            </Grid>
          </Grid>

          <DialogOperacion
            open={this.state.openDialog}
            handleClose={this.handleDialogClose}
            respuestaChanged={this.handleRespuestaChanged}
            operation={this.state.nivel.operacion}
            gameStatus={this.state.perdiste}
            handleGameOver={this.handleGameOver}
          />
        </div>
      </LayoutGame>
    );
  }
}

export default BurgerBuilder;
