import React from "react";
import { Button, Container, Link } from "@material-ui/core";

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container>
        <Button href="/sign_in" variant="contained" color="primary">Ingresar</Button>
        <Button href="/sign_up" variant="contained" color="primary">Registrarse</Button>
        </Container>
      </React.Fragment>
    );
  }
}
