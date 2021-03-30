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