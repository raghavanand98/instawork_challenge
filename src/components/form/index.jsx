import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../actions';

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const user = { firstName: null,
      lastName: null,
      email: null,
      phonenumber: null
    }
    return (
      <div>
        <form onSubmit={ () => this.props.addUser(user) }>
          This is the form
          <div>
            <label>First Name</label>
            <div>
              <input name="firstName" type="text" placeholder="First Name" onChange={ (event) => user.firstName = event.target.value }/>
            </div>
          </div>
          <div>
            <label>Last Name</label>
            <div>
              <input placeholder="Last Name" onChange={ (event) => user.lastName= event.target.value }/>
            </div>
          </div>
          <div>
            <label>Email</label>
            <div>
              <input name="email" type="email" placeholder="Email" onChange={ (event) => user.email = event.target.value }/>
            </div>
          </div>
          <div>
            <label>Phone Number</label>
            <div>
              <input name="phonenumber" placeholder="Phone Number"  onChange={ (event) => user.phonenumber = event.target.value }/>
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
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { addUser } )(Form);


