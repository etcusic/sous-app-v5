import React, { Component } from 'react'
import { connect } from 'react-redux'
import GroceryListStatus from './GroceryListStatus.js'
import NewOrEditIngredient from './NewOrEditIngredient'

class CreateGroceryList extends Component {

    constructor(){
        super()
        this.state = {
            list: [],
            count: 0
        }
    }

    // reset AddToGroceryList after an ingredient is added

    // need to remove count once form input is working
    addIngredient = () => {
        let ing = this.props.ingredients[this.state.count]
        ing.quantity = Math.floor(Math.random() * (40 - 1) + 1)
        let updatedList = this.state.list.push(ing)
        this.setState({ 
            list: updatedList,
            count: this.state.count + 1
         })
    }

    removeIngredient = (index) => {
        let updatedList = this.state.list.filter((ing, i) => i !== index)
        this.setState({ list: updatedList })
    }

    render(){
        return(
            <div>
                <h1>Create Grocery List: </h1>
                <button onClick={ this.addIngredient }>Add Ingredient</button>
                <div className="float-right">
                    <GroceryListStatus list={ this.state.list } removeIngredient={ this.removeIngredient } />
                </div>
                <div className="float-left">
                    <NewOrEditIngredient />
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        userName: state.user.name,
        ingredients: state.ingredients
    }
}
  
export default connect(mapStateToProps)(CreateGroceryList)
