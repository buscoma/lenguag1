import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import {
  useStyleTypografy,
      } from './Styles';

export default function Clock(props) {

  const clasessTypografy = useStyleTypografy();
  const [counter, setCounter] = useState(props.time);

  useEffect(() => {
      if(props.stopTimer === true){
        setCounter(props.time / props.level)
      }else{
        counter > 0 ? setTimeout(() => setCounter(counter - 1), 1000) : props.timeIsUp();
      }
      
  }, [counter, props]);

  return (
    <div>
      <Typography classes={clasessTypografy}>
        {" "}
        {props.stopTimer ? "HAZ CLICK PARA INICIAR EL TIEMPO" :  counter }
        
      </Typography>
    </div>
  );
}
