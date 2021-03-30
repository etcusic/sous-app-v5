const pantryReducer = (state = [], action) => {
    switch(action.type){
        case "LOAD_PANTRY": 
            let pantry = action.payload
            return pantry

        default:
            return state
    }
}

export default pantryReducer