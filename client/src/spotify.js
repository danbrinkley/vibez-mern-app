
export const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = "9a2df62a8b5e4fe1aedb898f2717a401";
// const redirectUri = "http://localhost:3000/dashboard";
const redirectUri = "https://warm-meadow-59971.herokuapp.com/dashboard";
const scopes = [
    "user-read-currently-playing",
    "user-read-playback-state",
    "playlist-read-private",
    "playlist-read-collaborative",
    "playlist-modify-public",
    "user-read-recently-played",
    "playlist-modify-private",
    "ugc-image-upload",
    "user-follow-modify",
    "user-follow-read",
    "user-library-read",
    "user-library-modify",
    "user-read-private",
    "user-read-email",
    "user-top-read"
];


export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;