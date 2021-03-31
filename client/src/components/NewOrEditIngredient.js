import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewOrEditIngredient extends Component {

    constructor(){
        super()
        this.state = {
            filteredIngredients: []
        }
    }

    componentDidMount(){
        this.setState({ filteredIngredients: this.props.ingredients })
    }
    
    showCategory = (event) => {
        let value = event.target.value
        let filteredIngredients = value === "all" ? this.props.ingredients : this.props.ingredients.filter(ing => ing.category === value)
        this.setState({ filteredIngredients: filteredIngredients })
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
                        <select onChange={ event => this.props.setIngredient(event) }>
                            <option value="0">---</option>
                            { this.state.filteredIngredients.map(ing => {
                                return <option value={ ing.id }>{ ing.name }</option>
                            }) }
                        </select>
                    </li>

                    <li>
                        Quantity:
                        <input type="number" placeholder="---" onChange={ event => this.props.changeQuantity(event) }></input>
                    </li>

                    <li>
                        Unit: { this.props.currentItem.name ? this.props.currentItem.unit : "---"} 
                    </li>
                </ul>
                    
                <button onClick = { this.props.addIngredient }>Add Ingredient</button>
                    
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