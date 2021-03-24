import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './home'

// import { Provider } from "react-redux";
// import store from "../redux/store";

export default function Router() {
    return (
        // <Provider store={store}>
            <BrowserRouter>
                <Route path="/" exact component={Home} />
            </BrowserRouter>
        // </Provider>
    )
}