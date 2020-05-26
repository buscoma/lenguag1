import React, { Component } from "react";
import Preview from "./Components/Preview";
import controller from "./Controller";

class PalabrasCorrectas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      text: controller(),
      userInput: "",
    };
  }
  state = {
    position: 0,
    text: controller(),
    userInput: "",
  };
  onRestart = () => {};
  checkIfCorrect() {
    if (this.state.text[this.state.position].EsCorrecta === true) {
      alert("Correcto!  ! ");
      if (this.state.text.length - 1 > this.state.position) {
        let x = this.state.position;
        this.setState({ position: x + 1 });
      } else alert("HAS GANADO");
    } else {
      alert("Incorrecto!");
    }
  }
  checkIfInCorrect(text, posicion) {
    if (this.state.text[this.state.position].EsCorrecta === false) {
      alert("Correcto!  ");
      if (this.state.text.length - 1 > this.state.position) {
        let x = this.state.position;
        this.setState({ position: x + 1 });
      } else alert("HAS GANADO");
    } else {
      alert("Incorrecto!");
    }
  }
  onUserInputChange = (e) => {
    const v = e.target.value;
    this.onFinish(v);
    this.setState({
      userInput: v,
      symbols: this.countCorrectSymbols(v),
    });
  };
  onFinish(userInput) {
    if (userInput === this.state.text) {
      clearInterval(this.interval);
      this.setState({
        finished: true,
      });
      alert("bien");
    }
  }
  countCorrectSymbols(userInput) {
    const text = this.state.text.replace(" ", "");
    return userInput
      .replace(" ", "")
      .split("")
      .filter((s, i) => s === text[i]).length;
  }
  render() {
    return (
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <Preview
              text={this.state.text[this.state.position].palabra}
              userInput={this.state.userInput}
            />
            <div className="text-center">
              <text>ES CORRECTO?</text>
              <br />
              <button
                className="btn btn-light"
                onClick={() => this.checkIfCorrect()}
              >
                SI
              </button>
              <button
                className="btn btn-light"
                onClick={() => this.checkIfInCorrect()}
              >
                NO
              </button>
            </div>
            <br />
            {/*}  <textarea
              value={this.state.userInput}
              onChange={this.onUserInputChange}
              className="form-control mb-3"
              placeholder="Start typing..."
              readOnly={this.state.finished}
            ></textarea> */}
            <div className="text-center">
              <button className="btn btn-light" onClick={this.onRestart}>
                Restart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PalabrasCorrectas;
