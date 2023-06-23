import { Reducer } from 'redux';

export interface UserState {
  accessToken: string | null,
  profileID: string | undefined,
  displayName: string | undefined,
  profileURL: string | undefined,
  imageUri: Object[] | undefined,
  email: string | undefined,
}

const initialState: UserState = {
  accessToken: null,
  profileID: '',
  displayName: '',
  profileURL: '',
  imageUri: [],
  email: '',
};

const userReducer: Reducer<UserState> = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, accessToken: action.payload.accessToken };
    case 'UNSET_USER':
      return { ...state, accessToken: null };
    case 'SET_BASIC_INFO':
      return { 
        ...state,
        profileID: action.payload.profileID,
        displayName: action.payload.displayName,
        profileURL: action.payload.profileURL,
        imageUri: action.payload.imageUri,
        email: action.payload.email  
      };
    case 'UNSET_BASIC_INFO':
      return { 
        ...state,
        profileID: '',
        displayName: '',
        profileURL: '',
        imageUri: [],
        email: '', 
      };
    default:
      return state;
  }
};

export default userReducer;