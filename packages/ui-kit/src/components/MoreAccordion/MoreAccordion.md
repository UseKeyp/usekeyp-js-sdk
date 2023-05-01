```jsx
import LoginButton from "../LoginButton/LoginButton";

<MoreAccordion title="More">
  <div className="flex gap-x-2 pl-3">
    <div className="mr-1">
      <LoginButton
        label="DISCORD"
        provider="DISCORD"
        size="square"
      ></LoginButton>
    </div>
    <div className="mr-1">
      <LoginButton label="APPLE" provider="APPLE" size="square"></LoginButton>
    </div>
    <div className="mr-1">
      <LoginButton
        label="TWITTER"
        provider="TWITTER"
        size="square"
      ></LoginButton>
    </div>
  </div>
</MoreAccordion>;
```
