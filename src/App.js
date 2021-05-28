import './App.css';
import { Component } from 'react';
import Header from './Header/Header'
import construirTablero from './utils/construirTablero';
import Tablero from './Tablero/Tablero';
class App extends Component{

  casillas = construirTablero();

  constructor(props) {
    super(props);
  }


  render(){
    return(
      <div className="App">
        <Header />
        <Tablero
          casillas={this.casillas}
        />
      </div>
    )
  }

}

export default App;
