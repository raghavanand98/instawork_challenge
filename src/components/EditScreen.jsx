import EditUserForm from './form/';
import React, { Component } from 'react';
import { goToList } from '../actions';
import { connect } from 'react-redux';

class EditScreen extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    if(!this.props.display) {
      return null;
    }
    return (
      <div>
        <EditUserForm id={this.props.currentUser} />
        <button onClick={ () => this.props.goToList() }> List </button>

      </div>

    );
  }
}

function mapStateToProps(state) {
  //console.log("state", state);
  return {
    users: state.users,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, {goToList})(EditScreen);
