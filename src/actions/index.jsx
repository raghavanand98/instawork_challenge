import { ADD_USER, LIST_SCREEN, ADD_SCREEN, EDIT_SCREEN, EDIT_USER } from '../constants';

export const addUser = (user) => {
  const action = {
    type: ADD_USER,
    user
  }
  return action;
}

export const editUser = (user) => {
  const action = {
    type: EDIT_USER,
    user
  }
  return action;
}

export const goToList = () => {
  const action = {
    type: LIST_SCREEN,
  }
  return action;
}

export const goToAdd = () => {
  const action = {
    type: ADD_SCREEN,
  }
  return action;
}


export const goToEdit = (user) => {
  const action = {
    type: EDIT_SCREEN,
    user
  }
  return action;
}
