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
  <div className="mb-10">
    <LoginPortal
      providers={["DISCORD", "TWITTER", "GITHUB", "APPLE", "GOOGLE"]}
      onClick={onClick}
    />
  </div>

  <LoginPortal
    providers={["REDDIT", "SPOTIFY", "MICROSOFT", "CHESS", "TWITCH"]}
    onClick={onClick}
  />
  <div className="bg-[#0079AD] mt-10">
    <LoginPortal
      providers={["REDDIT", "SPOTIFY", "MICROSOFT", "CHESS", "TWITCH"]}
      additionalProviders={["TWITCH"]}
      onClick={onClick}
      bg="transparent"
      align="center"
    />
  </div>
</div>;
```
