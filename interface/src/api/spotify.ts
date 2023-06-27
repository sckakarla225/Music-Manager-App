import axios from 'axios';
import SpotifyWebApi from 'spotify-web-api-js';
import { spotifyConfig } from '../config';

const handleSpotifyAuthentication = () => {
  const { clientId, redirectUri } = spotifyConfig;
  const scope = encodeURIComponent('user-read-private user-read-email playlist-read-private');

  const authEndpoint = 
    `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token`

  window.location.href = authEndpoint;
}

const handleSpotifyAccessToken = () => {
  const spotifyAPI = new SpotifyWebApi();
  const params = new URLSearchParams(window.location.hash.substring(1));
  const accessToken = params.get('access_token');

  if (accessToken) {
    spotifyAPI.setAccessToken(accessToken);
    console.log(accessToken);
    return accessToken;
  }
  return '';
}

const getUserBasicInfo = async (accessToken: string) => {
  const spotifyAPI = new SpotifyWebApi();
  spotifyAPI.setAccessToken(accessToken);
  const userInfo = await spotifyAPI.getMe();
  if (userInfo.id) {
    return userInfo;
  }
}

const getUserPlaylistInfo = async (accessToken: string) => {
  const playlistsEndpoint = 'https://api.spotify.com/v1/me/playlists';
  const playlists: any = await axios.get(playlistsEndpoint, {
    headers: {
      Authorization: 'Bearer ' + accessToken,
    }
  });

  console.log(playlists.data.items);
  if (playlists.data.items && playlists.data.total !== 0) {
    return playlists.data.items;
  }
  return [];
}

export { 
  handleSpotifyAuthentication, 
  handleSpotifyAccessToken, 
  getUserBasicInfo,
  getUserPlaylistInfo,
};