import React, { Component } from 'react';
import Navbar from '../../components/navbar';
import CardList from '../../components/card'
import axios from 'axios'
import './../style.css'
import { connect } from 'react-redux'
class MyPokemon extends Component {
    constructor() {
        super();

        this.state = {
            isEmpty: false,
        };
    }

    render() {
        const myPokemon = this.props.reduxPokemon.savePoke
        let thisDex;
        if (myPokemon.length < 1) {
            thisDex = <><p> Kosong hehe </p></>
        } else {
            thisDex = <>
                {
                    myPokemon && myPokemon.map(({ id, name }) => {
                        return (
                            <>
                                <CardList id={id} name={name} />
                            </>
                        )
                    })
                }
            </>
        }
        return (
            <>
                <Navbar />
                {thisDex}
            </>
        );
    }
}

const mapStateToProps = ({ pokemon }) => {
    return {
        reduxPokemon: pokemon
    };
};

export default connect(mapStateToProps)(MyPokemon); 