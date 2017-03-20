import { ADD_USER, LIST_SCREEN, ADD_SCREEN } from '../constants';
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
      return users;
    default:
      return state;
  }
}

const page = (state = [], action) => {
  switch(action.type) {
    case LIST_SCREEN:
      return LIST_SCREEN;
    case ADD_SCREEN:
      return ADD_SCREEN;
    default:
      return null;
  }
}
    


export default combineReducers({ form: forms, users, page });
