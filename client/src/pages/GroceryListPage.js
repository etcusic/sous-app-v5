import React, { Component } from 'react';
import { connect } from 'react-redux'
import NewGroceryListButton from '../components/NewGroceryListButton.js'

class GroceryListPage extends Component {

    constructor(){
        super()
        this.state = {
            view: <NewGroceryListButton changeView={ this.changeView } />
        }
    }

    changeView = (component) => {
        this.setState({ view: component })
    }

    render() {
        return (
        <div>
            <h1>GROCERY LIST</h1>
            {/* FETCH INGREDIENTS TO CREATE GROCERY LIST */}
            { this.state.view }
        </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        userName: state.user.name
    }
}
  
export default connect(mapStateToProps)(GroceryListPage)