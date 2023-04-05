```jsx
const onClick = () => {
  console.log("click");
};
<LoginPortal
  providers={["discord", "twitter"]}
  additionalProviders={["apple", "google"]}
  onClick={() => onClick()}
/>;
```
