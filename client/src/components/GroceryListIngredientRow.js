import React from 'react'

const GroceryListIngredientRow = ({ ingredient }) => {
    return (
        <tr>
            <td>delete</td>
            <td>{ ingredient.name }</td>
            <td>{ ingredient.quantity }</td>
            <td>edit</td>
        </tr>
    )
}

export default GroceryListIngredientRow