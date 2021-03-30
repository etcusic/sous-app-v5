const groceryListReducer = (state = [], action) => {
    switch(action.type){
        case "LOAD_GROCERY_LISTS": 
            let groceryLists = action.payload
            return groceryLists

        default:
            return state
    }
}

export default groceryListReducer