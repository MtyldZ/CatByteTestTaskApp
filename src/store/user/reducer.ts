import {UserState} from './state';
import {createReducer} from 'deox';
import {addUserAction, removeUserAction, setUserAction} from './action';

const initialState: UserState = {
  userList: [],
};

export const userReducer = createReducer(initialState, handle => [
  handle(setUserAction, (state, action) => {
    return {...state, userList: action.payload.userList};
  }),
  handle(addUserAction, (state, action) => {
    return {...state, userList: [action.payload.newUser, ...state.userList]};
  }),
  handle(removeUserAction, (state, action) => {
    return {
      ...state,
      userList: [
        ...state.userList.filter(
          ({id}) => id !== action.payload.userIDToRemove,
        ),
      ],
    };
  }),
]);
