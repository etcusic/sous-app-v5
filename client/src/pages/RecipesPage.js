import React, { Component } from 'react';
import { connect } from 'react-redux'
import RecipesTable from '../components/RecipesTable'

class RecipesPage extends Component {

    render() {
        return (
        <div>
            <h1>RECIPES</h1>
            <RecipesTable />
        </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        recipes: state.recipes
    }
}
  
export default connect(mapStateToProps)(RecipesPage)