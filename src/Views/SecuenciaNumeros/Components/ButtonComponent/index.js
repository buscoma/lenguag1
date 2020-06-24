import React from "react";

import {
  Button,
  Typography
} from "@material-ui/core";

import {
  useStylesButtom,
      } from './Styles';


export default function CustomizedButtons(props) {

  const clasessButtom = useStylesButtom();


  const handleClick = () => {
    props.methodAddId(props.id);
  };

  return (
        <Button
          disabled={props.disabled}
          onClick={() => handleClick()}
          variant="contained"
          color="primary"
          classes={clasessButtom}
        >
          <Typography variant="h4">{props.id}</Typography>
        </Button>
  );
}
