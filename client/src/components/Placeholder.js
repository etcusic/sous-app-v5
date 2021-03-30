import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchUser } from '../actions/index.js'

class Placeholder extends Component {

    componentDidMount(){
        this.props.fetchUser()
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
        user: state.user
    }
}
  
export default connect(mapStateToProps, { fetchUser })(Placeholder)