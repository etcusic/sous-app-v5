import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewOrEditIngredient from './NewOrEditIngredient'
import GroceryListStatus from './GroceryListStatus.js'

class CreateGroceryList extends Component {

    constructor(){
        super()
        this.state = {
            list: [],
            currentItem: {id: 0, quantity: 0},
            category: "all",
            filteredIngredients: [],
            allIngredients: {}
        }
    }

    componentDidMount(){
        let ingredients = {}
        this.props.ingredients.forEach( ing => ingredients[ing.id] = ing )
        this.setState({ 
            filteredIngredients: this.props.ingredients,
            allIngredients: ingredients 
        })
    }

    // reset category

    addIngredient = () => {
        // need to add a validation checker
        let ing = Object.assign({}, this.state.currentItem)
        let ings = [...this.state.list, ing]
        this.resetInput(ings)
    }

    resetInput = (updatedList) => {
        this.setState({ 
            currentItem:  {id: 0, quantity: 0},
            list: updatedList,
            category: "all",
            filteredIngredients: this.props.ingredients 
        })
    }

    removeIngredient = (index) => {
        let updatedList = [...this.state.list.filter((ing, i) => i !== index)]
        this.setState({ list: updatedList })
    }
 
    setIngredient = (event, id) => {
        // if new ingredient => pull from selected option : else => edit from existing ingredient
        event ? this.newIngredient(event.target.value) : this.editIngredient(id)
    }

    newIngredient = (id) => {
        let item = this.state.allIngredients[id]
        this.setState({ currentItem: item })
    }

    editIngredient = (id) => {
        let list = [...this.state.list]
        let item = list.find(ing => ing.id == id)
        this.setState({ 
            currentItem: item,
            list: list.filter(ing => ing.id != id)
        })
    }

    setCategory = (cat) => {
        this.setState({ category: cat })
    }

    changeQuantity = (event) => {
        let item = this.state.currentItem
        item.quantity = event.target.value
        this.setState({ currentItem: item })
    }

    checkState = () => {
        console.log(this.state)
    }

    render(){
        return(
            <div>
                <h1>Create Grocery List: </h1>
                <button onClick={ this.checkState }>Check State</button>
                <div className="float-right">
                    <GroceryListStatus 
                        list={ this.state.list } 
                        removeIngredient={ this.removeIngredient } 
                        setIngredient={ this.setIngredient }
                    />
                </div>
                <div className="float-left">
                    <NewOrEditIngredient 
                        ingredients = { this.props.ingredients }
                        category = { this.state.category }
                        currentItem = { this.state.currentItem } 
                        setCategory = { this.setCategory }
                        setIngredient = { this.setIngredient }
                        changeQuantity = { this.changeQuantity }
                        addIngredient = { this.addIngredient } 
                    />
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
