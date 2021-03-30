const ingredientsReducer = (state = [], action) => {
    switch(action.type){
        case "LOAD_INGREDIENTS": 
            let ingredients = action.payload
            return ingredients

        default:
            return state
    }
}

export default ingredientsReducer