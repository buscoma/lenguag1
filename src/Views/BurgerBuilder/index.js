// Librerias
import React, { Component } from "react";
import { Paper, Typography, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

// Componentes externos
import LayoutGame from '../../Components/Layout/LayaoutContainer';
import BackgroundImage from './Assets/FastFood.jpg';

// Componentes internos
import Burger from "./Components/Burger";
import BuildControls from "./Components/Burger/Components/BuildControls";
import "./Styles/BurgerBuilder.css";
import DialogOperacion from "./Components/DialogOperacion";
import {obtenerNivel, obtenerOperacion} from "./Controller";

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nivel: null,
            ingredients: {
                meat: 0,
                cheese: 0,
                salad: 0,
                bacon: 0,
            },
            openDialog: false,
            perdiste: false,
            loading: true,
        };
    }

    componentDidMount() {
        console.log("componentDidMount");
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
        console.log("handleDialogClose called!");
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
                console.log(operacion);
                this.setState({
                    nivel: nivelActual,
                    openDialog: false,
                });
            });
        }
    };

    handleRespuestaChanged = (event) => {
        console.log("handlerespuestachanged called!");

        const nivelActual = this.state.nivel;
        nivelActual.operacion.respuestaUsuario = event.target.value;
        this.setState({
            nivel: nivelActual,
        });
    };

    handleGameOver = () => {
        console.log("handleGameOver called!");
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
                    loading: false,
                });
            });
        });
    };

    handleNextLevel = () => {
        console.log("handleNextLevel called!");
        let nivelSiguiente = this.state.nivel;
        if (nivelSiguiente.nivel === 3) {
            this.setShow(true);
            this.setStateOfGame("END");
            return;
        }

        obtenerNivel(nivelSiguiente.nivel).then((nivelRecuperado) => {
            obtenerOperacion(nivelSiguiente.nivel).then((operacion) => {
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

    handleBotonOrdenar = () => {
        console.log("handleBotonOrdenar called");
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
                backgroundImage={BackgroundImage}
                game="BurgerBilder"
                level={this.state.nivel.nivel}
                points={0}
            >
                <div className="BurgerBuilder">
                    <Paper className="OrderDetail" elevation={4}>
                        <Typography variant="h6">
                            Nivel {this.state.nivel.nivel}
                        </Typography>
                        <Typography variant="inherit">
                            Arma una hamburguesa con los siguientes
                            ingredientes: Carne: {this.state.nivel.orden.carne},
                            Queso: {this.state.nivel.orden.queso}, Lechuga:{" "}
                            {this.state.nivel.orden.lechuga}, Panceta:{" "}
                            {this.state.nivel.orden.panceta}
                        </Typography>
                    </Paper>
                    <Burger ingredients={this.state.ingredients} />

                    <Grid
                        container
                        spacing={2}
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item xs={12} md={8}>
                            <BuildControls
                                ingridientAdded={this.addIngridientHandler}
                                ingridientRemoved={this.removeIngridientHandler}
                                disabled={disabledInfo}
                                ingredients={this.state.ingredients}
                            ></BuildControls>
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
