import React, { Component } from 'react';
import { connect } from 'react-redux'

class PantryPage extends Component {

    render() {
        return (
        <div>
            <h1>PANTRY</h1>
        </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        userName: state.user.name,
        pantry: state.pantry
    }
}
  
export default connect(mapStateToProps)(PantryPage)