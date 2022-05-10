const authEndpoint = "https://accounts.spotify.com.authorize?";
const clientID = '6419bfc7571344ab99d374796b9619a6';
const redirecturi = 'https://localhost:3000';
const scopes = ["user-library-read", "playlist-read-private"]

export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirecturi}&scope=${scopes.join(
    "%20"
)}&resonse_type=token&show_dialog=true`;

