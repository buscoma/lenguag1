// Librerias
import React, { useState } from "react";
import { Grid} from "@material-ui/core";

// Componentes externos
import LayoutGame from "../../Components/Layout/LayaoutContainer";

// Componentes internos
import "./Styles/palabrasPerdidas.css";
import Board from "./Components/Board";
import Card from "./Components/Card";
import BackgroundImage from "./Assets/background.jpg";

const row = [
  {
    id: "1",
    palabra: "busca",
    frase_frente: "Mi hermano",
    frase_atras: "sus gafas",
  },
  {
    id: "2",
    palabra: "hizo",
    frase_frente: "El pintor",
    frase_atras: "su primera exposición",
  },
  {
    id: "3",
    palabra: "gusta",
    frase_frente: "A la niña le",
    frase_atras: "ir al jardín",
  },
  {
    id: "4",
    palabra: "gusta",
    frase_frente: "A la niña le",
    frase_atras: "ir al jardín",
  },
];

function PalabrasPerdidas() {

  const [show, setShow] = useState(false);
  const [stateOfGame, setStateOfGame] = useState("BEGIN");

  return (
    <LayoutGame
      show={show}
      setShow={setShow}
      stateOfGame={stateOfGame}
      title="Palabras perdiddas"
      enunciado="Oh, no!. Las palabras se han perdido y no saben como volver a sus oraciones. Ayudalas a volver a casa."
      backgroundImage={BackgroundImage}
    >
      <Grid container spacing={3} className="row">
        <Grid item lg={3} md={3} xs={5}>
          <div className="boxPalabras">
            <Board id="board-0" className="board">
              {row.map((item) => (
                <Card id={item.id} draggable="true">
                  {" "}
                  <p> {item.palabra} </p>{" "}
                </Card>
              ))}
            </Board>
          </div>
        </Grid>

        <Grid item lg={9} md={9} xs={12}>
          <div>
            {row.map((item) => (
              <div className="clearfix">
                <p>
                  {" "}
                  {item.frase_frente}
                  <div className="flexbox">
                    <Board id="board-1" className="board"></Board>
                  </div>
                  {item.frase_atras}{" "}
                </p>
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </LayoutGame>
  );
}

export default PalabrasPerdidas;
