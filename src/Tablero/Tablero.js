import React, { Component } from 'react'
import Casilla from '../Casilla/Casilla';
import './Tablero.css';

export default class Tablero extends Component {


    finDelJuego = false;

    seleccionarCasilla(casilla) {

        // Añadir fin del juego si la casilla seleccionada es una mina
        if(casilla.es_mina){
            this.finDelJuego = true
        }
        this.seleccionRecursiva(casilla)        
        this.setState({})
    }

    seleccionRecursiva(casilla){
        
        casilla.seleccionada = true;

        if(casilla.numero_minas_alrededor === 0){

            let filaIndex = Math.floor(casilla.casilla_numero/10);
            let colIndex = casilla.casilla_numero%10;
            
            for(let fil=filaIndex-1; fil<=filaIndex+1; fil++){
                for(let col=colIndex-1; col<=colIndex+1; col++){
                    
                    if(fil >= 0 && fil < 10 && col >= 0 && col < 10){
                        if(!this.props.casillas[fil*10+col].seleccionada){
                            this.seleccionRecursiva(this.props.casillas[fil*10+col])
                        }
                    }
                }
            }
        }
    }

    render(){
        return (

            <div>
                <div className="tablero" hidden={this.finDelJuego}>       
                    {
                        this.props.casillas
                        .map((casilla,index) => {
                            return <Casilla
                            key={index}
                            seleccionarCasilla={()=>this.seleccionarCasilla(casilla)}
                            seleccionada={casilla.seleccionada}
                            numero_minas_alrededor={casilla.numero_minas_alrededor}
                            />
                        })
                    }
                </div>

                <div className="puntuacion" hidden={!this.finDelJuego}>
                        FIN DEL JUEGO
                </div>
            </div>  
        )
    }

}