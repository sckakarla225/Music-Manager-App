import { UserState } from './reducers/user';
import { SpotifyState } from './reducers/spotify';

export type RootState = {
  user: UserState,
  spotify: SpotifyState,
};

export interface Setting {
  id: number,
  name: string,
  description: string,
  switch: boolean,
};

export interface Playlist {
  id: string,
  playlistCoverUri: string,
  playlistName: string,
  playlistLabels: string[],
}

export interface Update {
  id: string,
  playlistCoverUri: string,
  playlistName: string,
  updateComplete: boolean,
}

export interface Label {
  id: string,
  labelName: string,
  labelCreatorId: string,
}