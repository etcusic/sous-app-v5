import React, { Component } from 'react'
import GroceryListStatus from './GroceryListStatus.js'
import AddToGroceryList from './AddToGroceryList'

class CreateGroceryList extends Component {

    // reset AddToGroceryList after an ingredient is added

    render(){
        return(
            <div>
                <div id="grocery-list-status">
                    <GroceryListStatus />
                </div>
                <div id="add-ingredient">
                    <AddToGroceryList />
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        userName: state.user.name
    }
}
  
export default connect(mapStateToProps)(CreateGroceryList)
