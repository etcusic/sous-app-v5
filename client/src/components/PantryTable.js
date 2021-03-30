import React, { Component } from 'react';
import { connect } from 'react-redux'
import PantryTableRow from './PantryTableRow'

class PantryTable extends Component {

    render() {
        return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Ingredient: </th>
                        <th>Quantity: </th>
                    </tr>
                </thead>

                <tbody>
                    { this.props.pantry.map( ingredient => <PantryTableRow ingredient={ ingredient }/> )}
                </tbody>
            </table>
        </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        pantry: state.pantry
    }
}
  
export default connect(mapStateToProps)(PantryTable)