import React, { Component } from 'react'

class AddToGroceryList extends Component {

    render(){
        return(
            <div>

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
  
export default connect(mapStateToProps)(AddToGroceryList)