# Spotify Clone with React

A Spotify web clone done with [React](https://react.dev/React) for studying purposes.

This project uses the [Spotify Web API](https://developer.spotify.com/documentation/web-api) to retrieve the necessary data and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



## How to run locally

First, you'll need a [Spotify Client ID](https://developer.spotify.com/dashboard), then you can run the following:

`````bash
$ git clone https://github.com/Mooyeee/spotify-clone-frontend
$ cd spotify-clone-frontend
$ npm install
`````

Now you need to safely pass the Spotify Client ID to the React app in order for it to authorize the API calls needed. To do that, just create a `.env` file in the root directory and set the following variable:

```bash
REACT_APP_CLIENT_ID="YOUR_CLIENT_ID"
```



Now you're ready to go. To run the app just run, in the root directory:

```bash
$ npm start
```

and visit [http://localhost:3000](http://localhost:3000) or the IP indicated in the terminal.
