import React from 'react'

const NewOrEditIngredient = ({ ingredients, category, currentItem, setCategory, setIngredient, changeQuantity, addIngredient }) => {

    const blankIngredient = {id: 0, name: "---"}

    const filteredIngredients = () => {
        return category === "all" ? [blankIngredient, ...ingredients] : [blankIngredient, ...ingredients.filter(ing => ing.category === category)] 
    }
    
    // showCategory = (event, category) => {
    //     let value = event ? event.target.value : category
    //     console.log(value)
    //     let filteredIngredients = value === "all" ? this.ingredientsWithBlank(this.props.ingredients) : this.ingredientsWithBlank(this.props.ingredients.filter(ing => ing.category === value))
    //     // this.setState({ filteredIngredients: filteredIngredients })
    //     this.setState({ 
    //         category: value,
    //         filteredIngredients: filteredIngredients 
    //     })
    // }

    const categoryOptions = (cat) => {
        const categories = ["all", "proteins", "dried goods", "produce", "dairy", "frozen goods", "condiments", "spices"]
        return categories.map((cat, i) => {
            if (cat === category){
                return <option selected keyId={ `category-${i + 1}` } value={ cat }>{ cat }</option>
            } else {
                return <option keyId={ `category-${i + 1}` } value={ cat }>{ cat }</option>
            }
        })
    }

    const ingredientOptions = () => {
        let ings = filteredIngredients() 
        return ings.map(ing => {
            if (ing.id === currentItem.id){
                return <option selected value={ ing.id }>{ ing.name }</option>
            } else {
                return <option value={ ing.id }>{ ing.name }</option>
            }
        })
    }

    // addIngredientAndReset = () => {
    //     this.showCategory(false, "all")
    //     this.props.addIngredient()
    // }


    return(
        <div>
            <h1>Add Ingredient to List: </h1>
            <table>
                <tbody>
                    <tr>
                        <td>Category: </td>
                        <td>
                            <select onChange={ event => setCategory(event.target.value) }>
                                { categoryOptions(category) }
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td>Ingredient: </td>
                        <td>
                            <select onChange={ event => setIngredient("new", event.target.value) }>
                                { ingredientOptions() }
                            </select>
                        </td>
                    </tr>
                
                    {/* <tr>
                        <td>Quantity: </td>
                        <td>
                            <input type="number" onChange={ event => this.props.changeQuantity(event) } value={ this.props.currentItem.quantity }></input>
                        </td>
                    </tr> */}
                
                    {/* <tr>
                        <td>Unit: </td>
                        <td>
                            { this.props.currentItem.name ? this.props.currentItem.unit : "---"}
                        </td>
                    </tr> */}
                
                </tbody>
            </table>
                                
            {/* <button onClick = { this.addIngredientAndReset }>Add Ingredient</button> */}
                 
        </div>
    )

}
  
export default NewOrEditIngredient