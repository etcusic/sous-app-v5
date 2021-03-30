import React from 'react';

const PantryTableRow = ({ ingredient }) => {
    return (
        <tr>
            <td>{ ingredient.name}</td>
            <td>{`${ingredient.quantity} ${ingredient.unit}`}</td>        
        </tr>
    );
}
  
export default PantryTableRow