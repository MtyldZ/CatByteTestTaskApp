import {createAction} from 'deox';
import {User} from '../../models/user.model';

export const setUserAction = createAction(
  'SET_USER_LIST_ACTION',
  resolve => (userList: User[]) => resolve({userList}),
);
export const addUserAction = createAction(
  'ADD_USER_ACTION',
  resolve => (newUser: User) => resolve({newUser}),
);
export const removeUserAction = createAction(
  'REMOVE_USER_ACTION',
  resolve => (userIDToRemove: number) => resolve({userIDToRemove}),
);
