import { ADD_USER } from '../constants';
import { combineReducers } from 'redux';
import { reducer as forms } from 'redux-form';

const user = (action) => {
  let user = action.user;
  user.id = Math.random();
  return user;
}

const users = (state = [], action) => { 
  let users = null;
  switch(action.type) {
    case ADD_USER:
      users = [...state, user(action)];
      //console.log(users);
      return users;
    default:
      return state;
  }
}


export default combineReducers({ form: forms, users});
