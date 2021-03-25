import './home.css'
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Logo } from "../../assets";
import '../../pages/style.css'

class Navbar extends Component {
    render() {
        return (
            <header className="sticky-top">
                <nav className="navbar navbar-expand-lg navbar-light shadow rounded">
                    <div className="container">
                        <div className='icon'>
                        <Link to='/'>
                            <div className='brand' ><img src={Logo} className='logo' />
                                <h2 className='txt' style={{marginTop:5, marginLeft:15}}>Pokedex</h2>
                            </div>
                        </Link>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="row">
                                <div className="col col-sm-12 col-md-auto">
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navbar;