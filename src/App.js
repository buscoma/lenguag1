import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      Hola Mundo!!!
    </div>
  );
}


class Test_comp extends Component {
  render () {
    return React.createElement('div', null, 'h1', 'Hi, Ale');

  }
}


export default App;
