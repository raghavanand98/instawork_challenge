import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser, editUser, deleteUser, goToList } from '../../actions';
import './form.css';

class Form extends Component {

  render() {
    let user = { 
      firstName: null,
      lastName: null,
      email: null,
      phonenumber: null,
      isAdmin: false
    }
    let edit = false;

    const user_id = this.props.id;
    if(user_id) {
      for(let possibleUser of this.props.users) {
        if(possibleUser.id === user_id) {
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
          <hr />
          <p className="blue-text text-lighten-2 medium-text">Info</p>
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
                onInput={ (event) => event.target.setCustomValidity('') } 
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
                onInput={ (event) => event.target.setCustomValidity('') } 
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
                onInvalid={ (event) => event.target.setCustomValidity("Phone number must be only digits, or of the form xxx-xxxx-xxx. If you are using a country code, put it at the beginning as +(xx)") } 
              />
            </div>
          </div>
          <div>
          <p className="blue-text text-lighten-2 medium-text">Role</p>
            <p>
              <input 
                className="with-gap" 
                name="role" 
                type="radio" 
                id="regular"  
                defaultChecked={ !user.isAdmin } 
                onChange={ (event) => user.isAdmin = false }
              />
              <label htmlFor="regular">Regular - Can't delete members</label>
            </p>
            <p>
              <input 
                className="with-gap" 
                name="role" 
                type="radio" 
                id="admin"  
                defaultChecked={ user.isAdmin } 
                onChange={ (event) => user.isAdmin = true }
              />
              <label htmlFor="admin">Admin - Can delete members</label>
            </p>
            <div className="row">

              <div className="col s6">
                { (edit === true)
                    ?  <button 
                          onClick={ () => this.props.deleteUser(user) && this.props.goToList() }
                          className="waves-effect waves-light btn">Delete
                        </button>
                    : <p />
                }
              </div>
              <div className="col s6">
                <button 
                  type="submit" 
                  className="waves-effect waves-light btn">Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }

  formAction(edit, user) {
    if(!edit) {
      return this.props.addUser(user);
    } else {
      return this.props.editUser(user);
    }
  }


}

function mapStateToProps(state) {
  //console.log("state", state);
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, { addUser, editUser, deleteUser, goToList } )(Form);


