```jsx
import LoginButton from "../LoginButton/LoginButton";

<MoreAccordion title="More">
  <div className="flex gap-x-2 pl-3">
    <div className="mr-1">
      <LoginButton
        label="discord"
        provider="discord"
        size="square"
      ></LoginButton>
    </div>
    <div className="mr-1">
      <LoginButton label="apple" provider="apple" size="square"></LoginButton>
    </div>
    <div className="mr-1">
      <LoginButton
        label="twitter"
        provider="twitter"
        size="square"
      ></LoginButton>
    </div>
  </div>
</MoreAccordion>;
```
