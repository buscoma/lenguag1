import React, { useState } from 'react';
import { Grid, Paper, Divider, Button, Collapse } from '@material-ui/core';
import "./botonera.css";


function Botonera (props) {

    const [idSelect, setIdSelect] = useState(-1);
   
    const select = (e) => {
        setIdSelect(e.target.id);
        props.onClick(e.target.id);
    }

    const colorear = (id) => {
        return id === props.looserWordSelected;
    }

    return (
        <div>
            <Collapse in={!props.word.isUsed}>
            <Paper id={props.word.idWord}  onClick={select} className={ colorear(props.word.idWord) ? "cardSelect" : ""}  style={{ padding: "20px", margin: "10px" } }>
                    {props.word.word} 
                </Paper>
            </Collapse>
        </div>
    );

}

export default Botonera;