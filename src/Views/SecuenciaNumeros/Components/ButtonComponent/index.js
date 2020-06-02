import React, { useState } from "react";

import {
  Button,
  Typography
} from "@material-ui/core";

import {
  useStylesButtom,
      } from './Styles';


export default function CustomizedButtons(props) {

  const clasessButtom = useStylesButtom();

  const [showButton, setShowButton] = useState(false);

  const handleClick = () => {
    setShowButton(true);
    props.methodAddId(props.id);
  };

  return (
        <Button
          disabled={showButton}
          onClick={() => handleClick()}
          variant="contained"
          color="primary"
          classes={clasessButtom}
        >
          <Typography variant="h4">{props.id}</Typography>
        </Button>
  );
}
