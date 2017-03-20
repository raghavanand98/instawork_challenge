import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser, editUser } from '../../actions';

class Form extends Component {
  constructor(props) {
    super(props);
  }

  formAction(edit, user) {
    if(!edit) {
      return this.props.addUser(user);
    } else {
      return this.props.editUser(user);
    }
  }

  render() {
    let user = { firstName: null,
      lastName: null,
      email: null,
      phonenumber: null
    }
    let edit = false;

    const user_id = this.props.id;
    if(user_id) {
      for(let possibleUser of this.props.users) {
        if(possibleUser.id == user_id) {
          user = possibleUser;
        }
        edit = true;
      }
      console.log(user);
    }
    
    return (
      <div>
        <form onSubmit={ () => this.formAction(edit, user) }>
          This is the form
          <div>
            <label>First Name</label>
            <div>
              <input name="firstName" type="text" placeholder="First Name" onChange={ (event) => user.firstName = event.target.value } defaultValue={user.firstName || ''}/>
            </div>
          </div>
          <div>
            <label>Last Name</label>
            <div>
              <input placeholder="Last Name" onChange={ (event) => user.lastName= event.target.value } defaultValue={user.lastName || ''}/>
            </div>
          </div>
          <div>
            <label>Email</label>
            <div>
              <input name="email" type="email" placeholder="Email" onChange={ (event) => user.email = event.target.value } defaultValue={user.email || ''}/>
            </div>
          </div>
          <div>
            <label>Phone Number</label>
            <div>
              <input name="phonenumber" placeholder="Phone Number"  onChange={ (event) => user.phonenumber = event.target.value } defaultValue={user.phonenumber || ''}/>
            </div>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  //console.log("state", state);
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, { addUser, editUser } )(Form);


