```jsx
function logOut() {
  console.log("log out");
}

const currentUserTwitter = {
  username: "@twitterhandle",
  email: "testuser@gmail.com",
  id: "twitter-123",
  address: "0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5",
};
const currentUserDiscord = {
  username: "discordtest",
  email: "testuser@gmail.com",
  id: "discord-123",
  address: "0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5",
};
const currentUserGoogle = {
  username: "googletest",
  email: "testuser@gmail.com",
  id: "google-123",
  address: "0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5",
};
const currentUserTwitch = {
  username: "twitchtest",
  email: "testuser@gmail.com",
  id: "twitch-123",
  address: "0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5",
};
const currentUserChess = {
  username: "chesstest",
  email: "testuser@gmail.com",
  id: "chess-123",
  address: "0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5",
};
const currentUserNode = {
  username: "nodetest",
  email: "testuser@gmail.com",
  id: "node-123",
  address: "0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5",
};
const currentUserReddit = {
  username: "nodetest",
  email: "testuser@gmail.com",
  id: "reddit-123",
  address: "0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5",
};
const currentUserFacebook = {
  username: "nodetest",
  email: "testuser@gmail.com",
  id: "facebook-123",
  address: "0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5",
};
const currentUserMicrosoft = {
  username: "nodetest",
  email: "testuser@gmail.com",
  id: "microsoft-123",
  address: "0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5",
};

const currentUserSpotify = {
  username: "spotifytest",
  email: "testuser@gmail.com",
  id: "spotify-123",
  address: "0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5",
};

return (
  <div className="flex flex-col gap-y-4">
    <UserAccount currentUser={currentUserTwitter} logOut={logOut} />
    <UserAccount currentUser={currentUserDiscord} logOut={logOut} />
    <UserAccount currentUser={currentUserGoogle} logOut={logOut} />
    <UserAccount currentUser={currentUserTwitch} logOut={logOut} />
    <UserAccount currentUser={currentUserChess} logOut={logOut} />
    <UserAccount currentUser={currentUserNode} logOut={logOut} />
    <UserAccount currentUser={currentUserReddit} logOut={logOut} />
    <UserAccount currentUser={currentUserFacebook} logOut={logOut} />
    <UserAccount currentUser={currentUserMicrosoft} logOut={logOut} />
    <UserAccount currentUser={currentUserSpotify} logOut={logOut} />
  </div>
);
```
