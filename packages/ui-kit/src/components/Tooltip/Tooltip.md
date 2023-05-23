```jsx
import Icon from "../Icon/Icon";

<div className="flex">
  <Tooltip
    delayHideTime={100000}
    id="1"
    effect="float"
    borderColor="#C6CED2"
    bgColor="#eef0f2"
    position="top"
    tooltipChild={
      <div className="text-black">
        Tooltip explainer. Make it short and sweet but still clear. Can have
        <a
          className="text-[#0b54da]"
          href="https://www.google.com"
          rel="noreferrer"
          target="_blank"
        >
          links.
        </a>
      </div>
    }
  >
    <Icon color="fill-gray-800" name="tooltip" />
  </Tooltip>
</div>;
```
