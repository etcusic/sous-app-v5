import React, { Component } from 'react';
import { connect } from 'react-redux'
import { initializeAppState } from '../actions/index.js'

class ProfilePage extends Component {

    componentDidMount(){
        this.props.initializeAppState()
    }

    render() {
        return (
        <div>
            <h1>{ this.props.user.name }</h1>
        </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        userName: state.user
    }
}
  
export default connect(mapStateToProps, { initializeAppState })(ProfilePage)