import React, { Component } from 'react'
import { connect } from 'react-redux'
import GroceryListStatus from './GroceryListStatus.js'
import NewOrEditIngredient from './NewOrEditIngredient'

class CreateGroceryList extends Component {

    constructor(){
        super()
        this.state = {
            currentItem: {},
            list: [],
            allIngredients: []
        }
    }

    componentDidMount(){
        let ingredients = {}
        this.props.ingredients.forEach( ing => ingredients[ing.id] = ing )
        this.setState({ 
            currentItem: {id: 0, quantity: 0},
            allIngredients: ingredients
        })
    }

    // reset AddToGroceryList after an ingredient is added

    // need to remove count once form input is working
    addIngredient = () => {
        let ing = this.state.currentItem
        let ings = [...this.state.list, ing]
        console.log(ings)
        this.setState({ list: ings })
    }

    removeIngredient = (index) => {
        let updatedList = this.state.list.filter((ing, i) => i !== index)
        this.setState({ list: updatedList })
    }
 
    setIngredient = (event) => {
        let value = event.target ? event.target.value : event
        let item = this.state.allIngredients[value]
        let adjustedList = this.state.list.filter(ing => ing.id != value)
        this.setState({ 
            currentItem: item,
            list: adjustedList
        })
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
                        currentItem={ this.state.currentItem } 
                        setIngredient={ this.setIngredient }
                        changeQuantity={ this.changeQuantity }
                        addIngredient={ this.addIngredient } 
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
