export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
};

export const reducer = (state, action) => {
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
    default:
      return state;
  }
};
