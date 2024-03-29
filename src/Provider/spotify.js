const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'http://localhost:3000/';

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
  'user-library-read',
];

export const loginUrl = `${authEndpoint}?client_id=${
  process.env.REACT_APP_CLIENT_ID
}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () =>
  window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
