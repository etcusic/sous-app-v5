import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewOrEditIngredient extends Component {

    render(){
        return(
            <div>
                <h1>Create Grocery List: </h1>
                <div>

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