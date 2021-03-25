const pokeReducer = (
    prevstate = {
        savePoke: []
    }, action) => {
    switch (action.type) {
        case 'ADD_POKEMON':
            const isAdded = prevstate.savePoke.find((pokemon) =>
                pokemon.id === action.data.id? true:false
            )
            console.log('added?',isAdded)
            return {
                ...prevstate,
                savePoke: isAdded ? prevstate.savePoke : [...prevstate.savePoke, { ...action.data }],
                // savePoke:[...prevstate.savePoke, { ...action.data }],
            }
        case 'DELETE_POKEMON':
            let pokeAfterDelete = prevstate.savePoke
            const newStatePoke = pokeAfterDelete.filter((pokemon) => {
                return pokemon.id !== action.data.id
            })
            return {
                ...prevstate,
                savePoke: newStatePoke
            }
        case 'DELETE_ALL_POKEMON':
            return {
                ...prevstate,
                savePoke: []
            }
        default:
            return {
                ...prevstate,
            };
    }
}

export default pokeReducer