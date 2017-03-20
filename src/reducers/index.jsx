import { ADD_USER, LIST_SCREEN, ADD_SCREEN, EDIT_SCREEN, EDIT_USER } from '../constants';
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
    case EDIT_USER:
      //console.log(state, "action", action);
      for(let i=0; i < state.length; i++) {
        if(state[i].id == action.user.id) {
          state[i] = action.user;
          break;
        }
      }

      return state;
    default:
      return state;
  }
}

const currentUser = (state = [], action) => {
  if(action.type === EDIT_SCREEN) {
    return action.user;
  }
  return state;
}

const page = (state = [], action) => {
  switch(action.type) {
    case LIST_SCREEN:
      return LIST_SCREEN;
    case ADD_SCREEN:
      return ADD_SCREEN;
    case EDIT_SCREEN:
      return EDIT_SCREEN;
    default:
      return null;
  }
}
    


export default combineReducers({ form: forms, users, page, currentUser });
