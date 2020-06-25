import React from 'react';
import {  Paper } from '@material-ui/core';
import "./botonera.css";


function Botonera(props) {


    const select = (e) => {
        if (!props.word.isUsed) {
            props.onClick(e.target.id);
        }

    }

    const colorear = (id) => {
        if (!props.word.isUsed) {
            return id === props.looserWordSelected;
        }
    }

    return (
        <div className={!props.word.isUsed ? "" : "cardDisabled" } style={{textAlign:"center"}}>
            <Paper id={props.word.idWord}
                onClick={select}
                className={colorear(props.word.idWord) ? "cardSelect" : ""}
                style={{ padding: "20px", margin: "10px" }}>
                {props.word.word}
            </Paper>
        </div>
    );

}

export default Botonera;