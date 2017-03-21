import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser, editUser } from '../../actions';
import './form.css';

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
      //console.log(user);
    }
    
    return (
      <div>
        <form 
          className="userForm"
          id="userForm"
          onSubmit={ () => this.formAction(edit, user) }
        >
          <div>
            <div>
              <input 
                name="firstName" 
                type="text" 
                placeholder="First Name" 
                onChange={ (event) => user.firstName = event.target.value } 
                defaultValue={user.firstName || ''} 
                required 
                pattern="[a-zA-Z]+" 
                onInvalid={ (event) => event.target.setCustomValidity("Name can consist only of letters") }
                onInput = { (event) => event.target.setCustomValidity('') } 
              />
            </div>
          </div>
          <div>
            <div>
              <input 
                placeholder="Last Name" 
                onChange={ (event) => user.lastName= event.target.value } 
                defaultValue={user.lastName || ''}
                required 
                pattern="[a-zA-Z]+" 
                onInvalid={ (event) => event.target.setCustomValidity("Name can consist only of letters") } 
                onInput = { (event) => event.target.setCustomValidity('') } 
              />
            </div>
          </div>
          <div>
            <div>
              <input 
                name="email" 
                type="email" 
                placeholder="Email" 
                onChange={ (event) => user.email = event.target.value } 
                required
                defaultValue={user.email || ''}
              />
            </div>
          </div>
          <div>
            <div>
              <input 
                name="phonenumber" 
                placeholder="Phone Number"  
                onChange={ (event) => user.phonenumber = event.target.value } 
                defaultValue={user.phonenumber || ''}
                required 
                pattern="(\+\(\d+\))?(\d{3}-\d{3}-\d{4}|\d+)" 
                onInvalid={ (event) => event.target.setCustomValidity("Phone number must be only digits, or of the form xxx-xxxx-xxx. If you are using a country code, put it at the beginning in the format +(xx)") } 
                onInput = { (event) => event.target.setCustomValidity('') } 
              />
            </div>
          </div>
          <div>
            <button 
              type="submit" 
      className="waves-effect waves-light btn">Save
            </button>
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


