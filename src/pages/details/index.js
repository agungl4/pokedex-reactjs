import React, { Component } from 'react';
import './style.css';
import Navbar from '../../components/navbar';
import { connect } from 'react-redux'
import { addPokemon, removePokemon, deleteAllPokemon } from './../../utils/redux/action/pokemonAction'
import { Link } from 'react-router-dom'
import './../style.css'

class Details extends Component {
    state = {
        pokemon: {},
        isLoading: true,
        isSaved: false,
    }

    getSinglePoke = () => {
        const { match } = this.props;
        const newUrl = match.params.name
        fetch(`https://pokeapi.co/api/v2/pokemon/${newUrl}`)
            .then(data =>
                data.json())
            .then(response => {
                this.setState({
                    pokemon: response,
                    isLoading: false,
                });
            })
            .catch((err) => {
                console.log(err)
            });
    }

    getSavePoke = () => {
        const savedPokemon = this.props.reduxPokemon.savePoke.find(({ id, name }) => {
            return name == this.props.match.params.name ? true : false
        })
        return savedPokemon
    }

    componentDidMount = () => {
        this.getSinglePoke();
        if (this.getSavePoke()) {
            this.setState({
                isSaved: true,
            })
        }
    }

    addPokemon = () => {
        this.props.dispatch(addPokemon({
            id: this.state.pokemon.id,
            name: this.state.pokemon.name
        }))
        this.setState({
            isSaved: true,
        })
    }

    removePokemon = () => {
        this.props.dispatch(removePokemon({
            id: this.state.pokemon.id,
            name: this.state.pokemon.name
        }))
        this.setState({
            isSaved: false,
        })
    }

    removeAllPokemon = () => {
        this.props.dispatch(deleteAllPokemon())
    }

    render() {
        const { pokemon } = this.state
        console.log(this.props.reduxPokemon)
        console.log('isSaved', this.state.isSaved)
        let status
        if (this.state.isLoading != true) {
            status =
                <>
                    <section className="detail-view" >
                        <div className='data-wrapper'>
                            <div className='imgWrap'>
                                <img alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${this.props.match.params.name}.jpg`} />
                            </div>
                            <div className='text-info'>ID : {pokemon.id} </div>
                            <div className='text-info'>Name : {pokemon.name}</div>
                            {
                                pokemon.types.map(({ type }, index) => {
                                    if (index == 0) {
                                        return (
                                            <>
                                                <div style={{ display: 'flex', marginLeft: '-160px' }} >
                                                    <p className="data-name" style={{}}>Type :</p>
                                                    <p className="data-name" style={{ width: '100px' }}> - {type.name}</p>
                                                </div>
                                            </>
                                        )
                                    } else {
                                        return (
                                            <>
                                                <div style={{ display: 'flex', marginLeft: '-160px' }} >
                                                    <p className="data-name" style={{ width: '60px' }}></p>
                                                    <p className="data-name" style={{ width: '100px' }}> - {type.name}</p>
                                                </div>
                                            </>
                                        )
                                    }
                                })
                            }

                            {
                                this.state.isSaved ? (
                                    <button onClick={this.removePokemon} className='btn-primary'>
                                        <div className='txt-primary'> Unsave </div>
                                    </button>
                                ) : (
                                        <button onClick={this.addPokemon} className='btn-primary'>
                                            <div className='txt-primary'> Save </div>
                                        </button>
                                    )
                            }


                            <button onClick={this.removeAllPokemon} className='btn-primary'>
                                <div className='txt-primary'> Clear Saved Pokemon </div>
                            </button>

                            <button className='btn-primary'>
                                <Link to={{
                                    pathname: `/myPokemon`,
                                    state: this.state
                                }}>
                                    <div className='txt-primary'> My Pokemon </div>
                                </Link>
                            </button>
                        </div>


                    </section>
                </>
        } else {
            <h1>Loading</h1>
        }
        return (
            <>
                <Navbar />
                {status}
            </>
        );
    }
}


const mapStateToProps = ({ pokemon }) => {
    return {
        reduxPokemon: pokemon
    };
};

export default connect(mapStateToProps)(Details); 