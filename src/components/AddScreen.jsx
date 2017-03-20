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
        <AddUserForm />
        <button onClick={ () => this.props.goToList() }> List </button>

      </div>

    );
  }
}

function mapStateToProps(state) {
  //console.log("state", state);
  const r = {
    users: state.users,
    page: state.page
  }
  //console.log(r);
  return r;
}

export default connect(mapStateToProps, {goToList})(AddScreen);
