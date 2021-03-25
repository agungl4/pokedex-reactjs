import { combineReducers } from 'redux'
import pokemonReducer from './pokemon'

const reducers = combineReducers({
    pokemon: pokemonReducer
})

export default reducers