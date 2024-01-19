export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  savedTracks: null,
};

export const reducer = (state, action) => {
  console.log('--- DISPATCHING ---');
  console.log(action);

  // Action has a type and a (dynamic) payload
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };

    case 'SET_SAVED_TRACKS':
      return {
        ...state,
        savedTracks: action.savedTracks,
      };
    default:
      return state;
  }
};
