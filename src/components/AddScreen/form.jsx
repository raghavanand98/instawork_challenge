import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { addUser } from '../../actions';

class UserForm extends Component { 
  constructor(props) {
    super(props);
    this.props = props;
  }

  renderUsers() {
    const { users } = this.props;
  }

  render() {
    const {
       fullName, handleSubmit, pristine, submitting, users
    } = this.props;
      
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <div>
            <Field name="firstName" component="input" type="text" placeholder="First Name"/>
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <Field name="lastName" component="input" type="text" placeholder="Last Name"/>
          </div>
        </div>
        <div>
          <label>Email</label>
          <div>
            <Field name="email" component="input" type="email" placeholder="Email"/>
          </div>
        </div>
        <div>
          <label>Phone Number</label>
          <div>
            <Field name="phonenumber" component="input" placeholder="Phone Number" />
          </div>
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>Submit</button>
        </div>
      </form>
    )
  }
}

UserForm = reduxForm({
  form: 'userForm',  
  onSubmit: addUser
})(UserForm)

const selector = formValueSelector('userForm') 

UserForm = connect(
  state => {
    const { firstName, lastName, email, phonenumber} = selector(state, 'firstName', 'lastName', 'email', 'phonenumber')
    return {
      fullName: `${firstName || ''} ${lastName || ''}`,
      firstName,
      lastName,
      phonenumber,
      email,
      users: state.users
    }
  },
  { addUser }
)(UserForm)

export default UserForm
