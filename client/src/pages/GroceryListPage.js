import React, { Component } from 'react';
import { connect } from 'react-redux'

class GroceryListPage extends Component {

    render() {
        return (
        <div>
            <h1>{ this.props.userName }</h1>
        </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        userName: state.user
    }
}
  
export default connect(mapStateToProps, {  })(GroceryListPage)