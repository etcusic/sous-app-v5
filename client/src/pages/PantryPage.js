import React, { Component } from 'react';
import { connect } from 'react-redux'
import PantryTable from '../components/PantryTable'

class PantryPage extends Component {

    render() {
        return (
            <div>
                <h1>PANTRY</h1>
                <PantryTable />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        pantry: state.pantry
    }
}
  
export default connect(mapStateToProps)(PantryPage)