import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom'
import '../../pages/style.css'
class Card extends Component {


    render() {
        const { id, name, url } = this.props
        return (
            <div className="card-container">
                 <Link to={{
                    pathname: `/pokemon/${name}`,
                    state: this.state
                }}>
                {/* <a href={`http://pokeapi.co/api/v2/pokemon/${name}`} target="_blank" rel="noreferrer"> */}
                    <img alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${name}.jpg`} />
                    <h2 className='txt'>{name[0].toUpperCase() + name.slice(1)}</h2>
                {/* </a> */}
                </Link>
            </div>
        );
    }
}

export default Card;
