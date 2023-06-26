import { Playlist, Update } from '../types';

export const SET_PLAYLISTS = 'SET_PLAYLISTS';
export const UNSET_PLAYLISTS = 'UNSET_PLAYLISTS';
export const SET_UPDATES = 'SET_UPDATES';
export const UNSET_UPDATES = 'UNSET_UPDATES';

export function setPlaylists(playlists: Playlist[]) {
  return { type: SET_PLAYLISTS, payload: { playlists } };
}

export function unsetPlaylists() {
  return { type: UNSET_PLAYLISTS, payload: { } };
}

export function setUpdates(updates: Update[]) {
  return { type: SET_UPDATES, payload: { updates } };
}

export function unsetUpdates() {
  return { type: UNSET_UPDATES, payload: { } };
}