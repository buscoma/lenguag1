import React, {useState} from "react";
import "./Styles/card.css";

function Card(props) {
 
  const [isChecked, setIsChecked] = useState(false);

  const onClick = () => {
    let resultado = props.handleItemSelect(props.id, "palabra")
    setIsChecked(resultado);
  }


  return (
    <div
      id={props.id}
      className={(isChecked ? "card cardSelect" : "card " )}
      
      onClick={onClick}
    >
      {props.children}
    </div>
  );
}

export default Card;
