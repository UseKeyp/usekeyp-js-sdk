```jsx
const onClick = (provider) => {
  console.log("click", provider);
};
<div>
  <div className="mb-10">
    <LoginPortal
      providers={["discord", "twitter", "github"]}
      additionalProviders={["apple", "google"]}
      onClick={(provider) => onClick(provider)}
    />
  </div>
  <LoginPortal
    providers={["discord", "twitter", "github", "apple", "google"]}
    onClick={(provider) => onClick(provider)}
  />
</div>;
```
