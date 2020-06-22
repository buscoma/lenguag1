import React, { useState } from 'react';
import { Grid, Paper, Divider, Button } from '@material-ui/core';


const Frase = (props) => {


    const [isFull, setIsFull] = useState(false);

    const select = () => {
        if (props.thereIsWordSelected ) {
            if (!isFull) {
                props.onClickSelectMe(props.sentence.idSentence);
            } else {
                props.setPalabra(props.sentence.idSentence, props.sentence.idWord)
            }
            setIsFull(prev => !prev);
        }
    }

    return (
        <div>
            <Paper onClick={select} style={{ padding: "20px", margin: "10px" }}>
                <Grid container>
                    <Grid item xs={4}>
                        {props.sentence.begin}
                    </Grid>
                    <Grid item xs={4}>
                        {props.sentence.word === undefined ? "______" : props.sentence.word}
                    </Grid>
                    <Grid item xs={4}>
                        {props.sentence.end}
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );

}

export default Frase;