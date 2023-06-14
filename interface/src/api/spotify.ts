import SpotifyWebApi from 'spotify-web-api-js';
import { spotifyConfig } from '../config';

const handleSpotifyAuthentication = () => {
  const { clientId, redirectUri } = spotifyConfig;
  const scope = encodeURIComponent('user-read-private user-read-email');

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
    return accessToken;
  }
  return '';
}

export { 
  handleSpotifyAuthentication, 
  handleSpotifyAccessToken, 
};