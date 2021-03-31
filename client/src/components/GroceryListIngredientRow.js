import React from 'react'

const GroceryListIngredientRow = ({ index, ingredient, setIngredient, removeIngredient }) => {
    return (
        <tr keyId={ `grocery-item-${index + 1}` }>
            <td><button onClick={ () => removeIngredient(index) }> - </button></td>
            <td>{ ingredient.name }</td>
            <td>{ ingredient.quantity }</td>
            <td><button onClick={ () => setIngredient(false, ingredient.id) }> ~ </button></td>
        </tr>
    )
}

export default GroceryListIngredientRow