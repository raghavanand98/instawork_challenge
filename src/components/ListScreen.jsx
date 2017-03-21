import React, { Component } from 'react';
import { goToAdd, goToEdit } from '../actions';
import { connect } from 'react-redux';


class ListScreen extends Component {

  adminString(isAdmin) {
    if(isAdmin) {
      return ' (admin)';
    }
    return '';
  }

  renderUsers(users) {
    return (
      <ul className="collection">
        {
          users.map(user => {
            return (
              <li 
                key={user.id} 
                onClick={() => this.props.goToEdit(user.id) } 
                className="collection-item cursor hoverable li-hover auto-overflow"
              >
                <div className="row valign-wrapper">
                  <div className="col s2 valign">
                    <i className="material-icons md-36">account_circle</i>
                  </div>
                  <div className="col s10 valign">
                    <span className="title">{ user.firstName + ' ' + user.lastName + this.adminString(user.isAdmin) }</span><br />
                    { user.phonenumber }<br />
                    { user.email }
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    const { users } = this.props;
    if(!this.props.display) {
      return null;
    }
    return (
        <div className="row">
          <div className="row ">
            <div className="col s1 offset-s11 center-align">
              <i className="material-icons blue-text cursor" onClick={ () => this.props.goToAdd() }>add</i>
            </div>
            <div className="col s10">
              <h5 className="blue-text text-darken-6">Team Members</h5>
              <span className="blue-text text-darken-4">You have {users.length} team members</span>
            </div>
          </div>
          <div className="row auto-overflow height-max">
            { this.renderUsers(users) }
          </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, {goToAdd, goToEdit})(ListScreen);
