import React from 'react';

const RecipesTableRow = ({ recipe }) => {
    return (
        <tr>
            <td>{ recipe.name}</td>
            <td>{ recipe.servings }</td>        
        </tr>
    );
}
  
export default RecipesTableRow