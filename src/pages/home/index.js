import React, { Component } from 'react';
import Navbar from '../../components/navbar';
import CardList from '../../components/card'
import axios from 'axios'
import './../style.css'
import { Pokelogo } from "../../assets";
// import "./style.css";

class home extends Component {
    constructor() {
        super();

        this.state = {
            pokemons: [],
            nextpage: '',
            prevpage: '',
        };
    }

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
            .then(({ data }) => {
                this.setState({
                    pokemons: data.results,
                    prevpage: data.previous,
                    nextpage: data.next,
                })
                console.log(this.state.prevpage)
                console.log(this.state.nextpage)
                console.log(this.state.pokemons)
            }).catch((error) => {
                console.log(error)
            })
    }


    nextPage = () => {
        // console.log(this.state.nextpage)
        const nextPage = this.state.nextpage
        console.log(nextPage)
        if (nextPage != '') {
            axios.get(this.state.nextpage)
                .then(({ data }) => {
                    this.setState({
                        pokemons: data.results,
                        prevpage: data.previous,
                        nextpage: data.next,
                    })
                }).catch((error) => {
                    console.log(error)
                })
        }
    }

    prevPage = () => {
        const prevPage = this.state.prevpage
        if (prevPage != null) {
            axios.get(prevPage)
                .then(({ data }) => {
                    this.setState({
                        pokemons: data.results,
                        prevpage: data.previous,
                        nextpage: data.next,
                    })
                }).catch((error) => {
                    console.log(error)
                })
        }
    }

    //     fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    //         .then(response => response.json())
    //         .then(name => this.setState({ pokemons: name.results }));
    // }
    render() {
        const { pokemons, nextpage, prevpage } = this.state
        return (
            <>
                <Navbar />
                <div className='btn-wrap' style={{ display: 'flex', justifyContent: 'space-around', marginTop: 25 }}>
                    <button className='btn-primary' style={{ width: '70px', height: '50px', marginTop: 75 }}
                        onClick={this.prevPage}
                    >
                        <p className='text' style={{ paddingHorizontal: 10 }}>{`<<<`}</p>
                    </button>

                    <div style={{marginBottom:'10px'}}>
                        <img src={Pokelogo} className='logo' style={{ width: '100%', height: '100%' }} />
                    </div>

                    <button className='btn-primary' style={{ width: '70px', height: '50px' , marginTop: 75}}
                        onClick={this.nextPage}
                    >
                        <p className='text' style={{ paddingHorizontal: 10 }}>{`>>>`}</p>
                    </button>
                </div>

                {
                    pokemons && pokemons.map(({ id, name, url }) => {
                        return (
                            <CardList key={id} name={name} url={url} />
                        )
                    })
                }

            </>
        );
    }
}

export default home;