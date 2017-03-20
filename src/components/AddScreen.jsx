import AddUserForm from './form/';
import React, { Component } from 'react';
import { goToList } from '../actions';
import { connect } from 'react-redux';

class AddScreen extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    if(!this.props.display) {
      return null;
    }
    return (
      <div>
        <AddUserForm  />
        <button onClick={ () => this.props.goToList() }> List </button>

      </div>

    );
  }
}


export default connect(null, {goToList})(AddScreen);
