import React from 'react'

const NewOrEditIngredient = ({ ingredients, category, currentItem, setCategory, setIngredient, changeQuantity, addIngredient }) => {

    const blankIngredient = {id: 0, name: "---"}

    const filteredIngredients = () => {
        return category === "all" ? [blankIngredient, ...ingredients] : [blankIngredient, ...ingredients.filter(ing => ing.category === category)] 
    }

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
                
                    <tr>
                        <td>Quantity: </td>
                        <td>
                            <input type="number" onChange={ event => changeQuantity(event.target.value) } value={ currentItem.quantity }></input>
                        </td>
                    </tr>
                
                    <tr>
                        <td>Unit: </td>
                        <td>
                            { currentItem.name ? currentItem.unit : "---"}
                        </td>
                    </tr>
                
                </tbody>
            </table>
                                
            <button onClick = { addIngredient }>Add Ingredient</button>
                 
        </div>
    )

}
  
export default NewOrEditIngredient