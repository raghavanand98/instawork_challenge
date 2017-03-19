import { ADD_USER } from '../constants';

export const addUser = (user, dispatch) => {
  const action = {
    type: ADD_USER,
    user
  }
  dispatch(action);
  return action;
}

