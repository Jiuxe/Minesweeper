import React, { Component } from 'react'
import FlipCard from 'react-card-flip'
import './Casilla.css';

export default class Casilla extends Component {

    render(){
        return (
            <div className="casilla" onClick={this.props.seleccionarCasilla}>
                <FlipCard
                    isFlipped={this.props.seleccionada}
                    flipDirection="vertical"
                >
                    <div className="portada"></div>
                    <div className="contenido">
                        <label className="minas">{this.props.numero_minas_alrededor}</label>
                    </div>
                </FlipCard>
            </div>          
        )
    }

}