Button example:

```jsx
import Icon from "../Icon/Icon";

<div>
  <div className="mb-4">
    <Button
      size="regular"
      fluid={true}
      classNameVariant={`justify-start bg-[white] hover:bg-[#5865F2] hover:text-white`}
      borderColor="#E9EBED"
    >
      <div className="flex">
        <div className="mr-4 ml-2">
          <Icon name="discord"></Icon>
        </div>
        <div className="text-[#80858E] hover:text-white leading-[130%] text-base font-normal capitalize">
          Discord
        </div>
      </div>
    </Button>
  </div>
</div>;
```
