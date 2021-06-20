import { SET_USER_NAME } from '../reducers/user';

export function setUserName({ name }) {
  return {
    type: SET_USER_NAME,
    payload: {
      name,
    },
  };
}
