```jsx
const onClick = (provider) => {
  console.log("click", provider);
};
<div>
  <div className="mb-10">
    <LoginPortal
      providers={["DISCORD", "TWITTER", "GITHUB", "EPIC_GAMES"]}
      additionalProviders={[
        "APPLE",
        "GOOGLE",
        "REDDIT",
        "SPOTIFY",
        "FACEBOOK",
        "MICROSOFT",
        "EPIC_GAMES",
        "CHESS",
        "TWITCH",
      ]}
      onClick={onClick}
    />
  </div>
  <LoginPortal
    providers={[
      "DISCORD",
      "TWITTER",
      "GITHUB",
      "APPLE",
      "GOOGLE",
      "REDDIT",
      "SPOTIFY",
      "FACEBOOK",
      "MICROSOFT",
      "EPIC_GAMES",
      "CHESS",
      "TWITCH",
    ]}
    onClick={onClick}
  />
</div>;
```
