const userReducer = (state = {}, action) => {
    switch(action.type){
        case "LOAD_USER": 
            let user = action.payload
            return user

        default:
            return state
    }
}

export default userReducer