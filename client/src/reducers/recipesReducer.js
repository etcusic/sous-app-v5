const recipesReducer = (state = [], action) => {
    switch(action.type){
        case "LOAD_RECIPES": 
            let recipes = action.payload
            return recipes

        default:
            return state
    }
}

export default recipesReducer