import { useEffect } from 'react';
import './App.css';
import Login from './Pages/Login/Login';
import Player from './Pages/Player/Player';
import { getTokenFromUrl } from './Provider/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useStateProviderValue } from './Provider/StateProvider';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateProviderValue();

  // Run code based on a given condition
  useEffect(() => {
    // This code specifically
    const _hash = getTokenFromUrl();
    // Clear url
    window.location.hash = '';
    const _token = _hash.access_token;

    if (_token) {
      // setToken(_token);
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) =>
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      );

      spotify.getUserPlaylists().then((playlists) =>
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
      );

      spotify.getMySavedTracks().then((savedTracks) =>
        dispatch({
          type: 'SET_SAVED_TRACKS',
          savedTracks: savedTracks,
        })
      );
    }
  });

  return <div className='App'>{token ? <Player spotify /> : <Login />}</div>;
}

export default App;
