import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './home'
import Detail from './details'
import MyPokemon from './myPokemon'
import {Provider} from 'react-redux'
import store from './../utils/redux/store'

export default function Router() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Route path="/" exact component={Home} />
                <Route path="/pokemon/:name" component={Detail} />
                <Route path="/myPokemon" component={MyPokemon} />
            </BrowserRouter>
        </Provider>
    )
}