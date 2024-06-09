export const authEndpoint = 'https://accounts.spotify.com/authorize'
// const redirectUrl = 'http://localhost:5173/signin'
const redirectUrl = 'https://music-app-11.netlify.app/signin'
// const redirectUrl = 'https://localhost:3000/callback/'
const clientId = 'de8618a5edbc4f39a21bfd32c66040f2'

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]
const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;

console.log(loginUrl)

export default loginUrl;
