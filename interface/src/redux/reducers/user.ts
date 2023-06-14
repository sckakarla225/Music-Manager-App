import { Reducer } from 'redux';

export interface UserState {
  accessToken: string | null,
}

const initialState: UserState = {
  accessToken: null,
};

const userReducer: Reducer<UserState> = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, accessToken: action.payload };
    case 'UNSET_USER':
      return { ...state, accessToken: null };
    default:
      return state;
  }
};

export default userReducer;