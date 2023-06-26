import { Reducer } from 'redux';
import { Playlist, Update } from '../types';

export interface SpotifyState {
  playlists: Playlist[],
  updates: Update[]
}

const initialState: SpotifyState = {
  playlists: [],
  updates: [],
};

const spotifyReducer: Reducer<SpotifyState> = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PLAYLISTS':
      return { ...state, playlists: action.payload.playlists };
    case 'UNSET_PLAYLISTS':
      return { ...state, playlists: [] };
    case 'SET_UPDATES':
      return { ...state, updates: action.payload.updates };
    case 'UNSET_UPDATES':
      return { ...state, updates: [] };
    default:
      return state;
  }
};

export default spotifyReducer;