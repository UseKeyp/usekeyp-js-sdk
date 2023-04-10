```jsx
const onClick = (provider) => {
  console.log("click", provider);
};
<div>
  <div className="mb-10">
    <LoginPortal
      providers={["DISCORD", "TWITTER", "GITHUB"]}
      additionalProviders={["APPLE", "GOOGLE"]}
      onClick={(provider) => onClick(provider)}
    />
  </div>
  <LoginPortal
    providers={["DISCORD", "TWITTER", "GITHUB", "APPLE", "GOOGLE"]}
    onClick={(provider) => onClick(provider)}
  />
</div>;
```
