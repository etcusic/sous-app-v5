const menusReducer = (state = [], action) => {
    switch(action.type){
        case "LOAD_MENUS": 
            let menus = action.payload
            return menus

        default:
            return state
    }
}

export default menusReducer