import React from "react";
import "./Styles/card.css";

function Card(props) {
  const dragStart = (e) => {
    const target = e.target;

    e.dataTransfer.setData("card_id", target.id);

    // este timeout es el que hace que cuando tenga la carta seleccionada, "desaparezca" de la board donde esta puesta
    setTimeout(() => {
      target.style.display = "visible";
    }, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      id={props.id}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
      className="card"
    >
      {props.children}
    </div>
  );
}

export default Card;
