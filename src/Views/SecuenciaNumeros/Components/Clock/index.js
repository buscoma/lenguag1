import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import {
  useStyleTypografy,
      } from './Styles';

export default function Clock(props) {

  const clasessTypografy = useStyleTypografy();
   

  const [counter, setCounter] = useState(props.time);
  // const [stopTimer, setStopTimer] = useState(props.stopTimer);

  const endTime = () => {
    props.endLevel(false);
  };

  useEffect(() => {
    counter > 0 ? setTimeout(() => setCounter(counter - 1), 1000) : endTime();
  }, [counter]);

  return (
    <div>
      <Typography classes={clasessTypografy}>
        {" "}
        Tiempo {counter}
      </Typography>
    </div>
  );
}
