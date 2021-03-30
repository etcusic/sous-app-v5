export const initializeAppState = () => {
    return(dispatch) => {
        // NEED TO ACCOUNT FOR DIFFERENT USERS WHEN LOGIN IS APPLIED
        return fetch('http://localhost:3001/users/1')
        .then(resp =>  resp.json())
        .then(userInfo => {
            console.log(userInfo)
            dispatch({ type: "LOAD_USER", payload: {id: userInfo.id, name: userInfo.name} })
            dispatch({ type: "LOAD_RECIPES", payload: userInfo.recipes})
            dispatch({ type: "LOAD_PANTRY", payload: userInfo.pantry})
        })
    }
}

export const fetchUser = () => {
    return(dispatch) => {
        // NEED TO ACCOUNT FOR DIFFERENT USERS WHEN LOGIN IS APPLIED
        return fetch('http://localhost:3001/users/1')
        .then(resp =>  resp.json())
        .then(userInfo => {
            console.log(userInfo)
            dispatch({ type: "LOAD_USER", payload: userInfo })
        })
    }
}