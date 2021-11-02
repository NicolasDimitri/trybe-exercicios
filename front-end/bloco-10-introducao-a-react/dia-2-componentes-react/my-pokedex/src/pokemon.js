import React, {Component} from 'react'

export default class Pokemon extends Component{
    render(){
        const { 
            name,
            type,
            peso,
            unidadeDeMedida,
image
        } = this.props
        return(
            <div>
                <h1>{name}</h1>
                <h3>{type}</h3>
                <p>{peso}{unidadeDeMedida}</p>
                <img src={image} alt={name} />
            </div>
        )
    }
}