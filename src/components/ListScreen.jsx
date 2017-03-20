import React, { Component } from 'react';
import { goToAdd, goToEdit } from '../actions';
import { connect } from 'react-redux';


class ListScreen extends Component {
  constructor(props) {
    super(props);
  }

  renderUsers(users) {
    return (
      <ul>
        {
          users.map(user => {
            return (
              <li key={user.id} onClick= {() => this.props.goToEdit(user.id) } >
                { user.firstName + ' ' + user.lastName + ' ' + user.email + ' ' + user.phonenumber }
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
      <div>
        ListScreen
        { this.renderUsers(users) }
        There are { users.length } users
        <button onClick={ () => this.props.goToAdd() }>Add</button>
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
