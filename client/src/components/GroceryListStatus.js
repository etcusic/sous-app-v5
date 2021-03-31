import React, { Component } from 'react'
import GroceryListIngredientRow from './GroceryListIngredientRow'

class GroceryListStatus extends Component {

    // populate from props

    render(){
        return(
            <div>
                <h1 className="float-center">Create Grocery Status: </h1>
                <table className="float-center">
                    <thead>
                        <tr>
                            <th></th>
                            <th>INGREDIENT</th>
                            <th>QUANTITY</th>
                            <th></th>
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