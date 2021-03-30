import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewOrEditIngredient extends Component {

    constructor(){
        super()
        this.state = {
            currentItem: {},
            allIngredients: {},
            filteredIngredients: []
        }
    }

    componentDidMount(){
        let ingredients = {}
        this.props.ingredients.forEach( ing => ingredients[ing.id] = ing )
        this.setState({ 
            allIngredients: ingredients,
            filteredIngredients: this.props.ingredients 
        })
    }
    
    showCategory = (event) => {
        let value = event.target.value
        let filteredIngredients = value === "all" ? this.props.ingredients : this.props.ingredients.filter(ing => ing.category === value)
        this.setState({ filteredIngredients: filteredIngredients })
    }

    setIngredient = (event) => {
        let item = this.state.allIngredients[event.target.value]
        this.setState({ currentItem: item })
    }

    checkState = () => {
        console.log(this.state.currentItem)
    } 

    render(){
        return(
            <div>
                <h1>Create Grocery List: </h1>
                <div>
                <ul>
                    <li>
                        Category: 
                        <select onChange={ event => this.showCategory(event) }>
                            <option key="category-1" value="all">all</option>
                            <option key="category-2" value="proteins">proteins</option>
                            <option key="category-3" value="dried goods">dried goods</option>
                            <option key="category-4" value="produce">produce</option>
                            <option key="category-5" value="dairy">dairy</option>
                            <option key="category-6" value="frozen goods">frozen goods</option>
                            <option key="category-7" value="condiments">condiments</option>
                            <option key="category-8" value="spices">spices</option>
                        </select>
                    </li>

                    <li>
                        Ingredient:
                        {/* ACCOUNT FOR ALREADY SELECTED INGREDIENTS - EDIT */}
                        <select onChange={ event => this.setIngredient(event) }>
                            <option value="0">---</option>
                            { this.state.filteredIngredients.map(ing => {
                                return <option value={ ing.id }>{ ing.name }</option>
                            }) }
                        </select>
                    </li>
                </ul>
                    

                    
                    
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
  
export default connect(mapStateToProps)(NewOrEditIngredient)