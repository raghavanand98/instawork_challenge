import { DELETE_USER, ADD_USER, LIST_SCREEN, ADD_SCREEN, EDIT_SCREEN, EDIT_USER } from '../constants';

export const addUser = (user) => {
  return {
    type: ADD_USER,
    user
  }
}

export const editUser = (user) => {
  return {
    type: EDIT_USER,
    user
  }
}

export const deleteUser = (user) => {
  return {
    type: DELETE_USER,
    user
  }
}

export const goToList = () => {
  return {
    type: LIST_SCREEN,
  }
}

export const goToAdd = () => {
  return {
    type: ADD_SCREEN,
  }
}


export const goToEdit = (user) => {
  return {
    type: EDIT_SCREEN,
    user
  }
}
