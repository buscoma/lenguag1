import React from "react";

import {useStylesBoard} from './Styles';

function Board(props) {

  const classesBoard = useStylesBoard();
  
  const drop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");

    const card = document.getElementById(card_id);
    card.style.display = "block";

    e.target.appendChild(card);

    //alert(card_id);
    //alert(props.idBoard);

    props.function( card_id, props.idBoard );
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id={props.id}
      className={ props.empty === false ? classesBoard.CasillaLlena : classesBoard.casillaVacia}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
}

export default Board;
