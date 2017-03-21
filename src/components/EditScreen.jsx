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
        <div className="row">
          <div className="row ">
            <div className="col s1 offset-s11 center-align">
              <i className="material-icons blue-text cursor" onClick={ () => this.props.goToList() }>close</i>
            </div>
            <div className="col s10">
              <h5 className="blue-text text-darken-6">Add a team member</h5>
              <span className="blue-text text-darken-4">Set email, location and role</span>
            </div>
          </div>
          <div className="row">
            <EditUserForm id={this.props.currentUser} />
          </div>
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
