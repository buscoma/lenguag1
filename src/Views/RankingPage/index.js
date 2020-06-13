import React, {useEffect, useState} from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// Componentes internos
import Table from "./Components/Table";
import {BackgroundPlaya} from "./Assets";
import {useStyles} from "./Styles";

export default function Ranking() {
  const classes = useStyles();

  const [data, setData] = useState([]);

  
 /*  useEffect(() => {
    localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZGMwNjlkMzczZjRjMDAxODE3MWZlMyIsImlhdCI6MTU5MjAwMTA5OCwiZXhwIjoxNTkyMDg3NDk4fQ.IO4fZ7SYqOTm1V4kw2B1RNNGdeE5reVIdzkBdcPLOiU");
    let token = localStorage.getItem("token");
    console.log("Here i am")

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZGMwNjlkMzczZjRjMDAxODE3MWZlMyIsImlhdCI6MTU5MjAwMTA5OCwiZXhwIjoxNTkyMDg3NDk4fQ.IO4fZ7SYqOTm1V4kw2B1RNNGdeE5reVIdzkBdcPLOiU");
    
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    console.log(token)
    fetch("https://backendlenguamaticag1.herokuapp.com/api/player/ranking", requestOptions)
      .then(response => response.text())
      .then(result =>{ console.log(result); setData(result.data)})
      .catch(error => console.log('error', error));
  });
 */
  

  return (
    <Container
      maxWidth="xl"
      style={{ backgroundImage: "url(" + BackgroundPlaya + ")" }}
    >
      <div className={classes.root}>
        <Grid container spacing={5} justify="space-between" alignItems="center">
          <Grid
            item
            xs={12}
            justify="center"
            alignItems="center"
            style={{ textAlign: "center" }}
          >
            <Typography className={classes.font} variant="h3" noWrap>
              {" "}
              Juguemos{" "}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Table />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
