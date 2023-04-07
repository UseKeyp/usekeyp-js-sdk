```jsx
const onClick = () => {
  console.log("click");
};
<div>
  <div className="mb-10">
    <LoginPortal
      providers={["discord", "twitter", "github"]}
      additionalProviders={["apple", "google"]}
      onClick={() => onClick()}
    />
  </div>
  <LoginPortal
    providers={["discord", "twitter", "github", "apple", "google"]}
    onClick={() => onClick()}
  />
</div>;
```
