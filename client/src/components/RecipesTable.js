import React, { Component } from 'react';
import { connect } from 'react-redux'
import RecipesTableRow from './RecipesTableRow'

class RecipesTable extends Component {

    render() {
        return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title: </th>
                        <th>Servings: </th>
                    </tr>
                </thead>

                <tbody>
                    { this.props.recipes.map( recipe => <RecipesTableRow recipe={ recipe }/> )}
                </tbody>
            </table>
        </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        recipes: state.recipes
    }
}
  
export default connect(mapStateToProps)(RecipesTable)