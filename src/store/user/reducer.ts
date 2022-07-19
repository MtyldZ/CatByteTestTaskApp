import {UserState} from './state';
import {createReducer} from 'deox';
import {addUserAction, setUserAction} from './action';

const initialState: UserState = {
  userList: [],
};

export const userReducer = createReducer(initialState, handle => [
  handle(setUserAction, (state, action) => {
    return {...state, userList: action.payload.userList};
  }),
  handle(addUserAction, (state, action) => {
    return {...state, userList: [...state.userList, action.payload.newUser]};
  }),
]);
