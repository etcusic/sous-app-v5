import React, { Component } from 'react'
import GroceryListIngredientRow from './GroceryListIngredientRow'

class GroceryListStatus extends Component {

    // populate from props

    render(){
        return(
            <div>
                <h1 className="float-center">Grocery List Status: </h1>
                <table className="float-center">
                    <thead>
                        <tr>
                            <th>REMOVE</th>
                            <th>INGREDIENT</th>
                            <th>QUANTITY</th>
                            <th>EDIT</th>
                        </tr>
                    </thead>

                    <tbody>
                        { this.props.list.map((ingredient, index) => {
                        return (
                            <GroceryListIngredientRow 
                                index={ index } 
                                ingredient={ ingredient } 
                                setIngredient={ this.props.setIngredient }
                                removeIngredient={ this.props.removeIngredient } 
                            /> 
                        )})}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default GroceryListStatus