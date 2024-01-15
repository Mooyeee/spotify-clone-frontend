import { useEffect } from 'react';
import './App.css';
import Login from './Login';
import Player from './Player';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useStateProviderValue } from './StateProvider';

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
        token: token,
      });
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) =>
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      );
    }
  });

  return <div className='App'>{token ? <Player spotify /> : <Login />}</div>;
}

export default App;
