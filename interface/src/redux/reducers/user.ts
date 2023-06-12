import { Reducer } from 'redux';

export interface UserState {
  userId: string;
}

const initialState: UserState = {
  userId: '',
};

const userReducer: Reducer<UserState> = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_ID':
      return { ...state, userId: action.payload };
    case 'UNSET_USER_ID':
      return { ...state, userId: action.payload };
    default:
      return state;
  }
};

export default userReducer;