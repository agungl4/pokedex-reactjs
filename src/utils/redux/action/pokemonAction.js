export const addPokemon = (pokemon) => {
    return {
        type: 'ADD_POKEMON',
        data: pokemon
    }
}

export const removePokemon = (pokemon) => {
    return {
        type: 'DELETE_POKEMON',
        data: pokemon
    }
}

export const deleteAllPokemon = () => {
    return {
        type: 'DELETE_ALL_POKEMON',
    }
}