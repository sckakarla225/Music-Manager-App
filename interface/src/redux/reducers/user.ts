import { Reducer } from 'redux';
import { Label } from '../types';

export interface UserState {
  accessToken: string | null,
  profileID: string | undefined,
  displayName: string | undefined,
  profileURL: string | undefined,
  imageUri: Object[] | undefined,
  email: string | undefined,
  labels: Label[] | undefined,
}

const initialState: UserState = {
  accessToken: null,
  profileID: '',
  displayName: '',
  profileURL: '',
  imageUri: [],
  email: '',
  labels: [],
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
    case 'SET_LABELS':
      return { ...state, labels: action.payload.labels };
    case 'UNSET_LABELS':
      return { ...state, labels: [] };
    default:
      return state;
  }
};

export default userReducer;