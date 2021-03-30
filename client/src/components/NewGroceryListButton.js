import React from 'react'
import CreateGroceryList from './CreateGroceryList.js'

const NewGroceryListButton = ({ changeView }) => {
    return (
        <button onClick={ () => changeView(<CreateGroceryList />) }>New Grocery List</button>
    )
}

export default NewGroceryListButton