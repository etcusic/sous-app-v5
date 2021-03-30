import React from 'react'

const GroceryListIngredientRow = ({ ingredient, index, removeIngredient }) => {
    return (
        <tr>
            <td><button onClick={ () => removeIngredient(index) }> - </button></td>
            <td>{ ingredient.name }</td>
            <td>{ ingredient.quantity }</td>
            <td>edit</td>
        </tr>
    )
}

export default GroceryListIngredientRow