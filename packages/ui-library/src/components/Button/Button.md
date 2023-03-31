Button example:

```jsx
import Icon from "../Icon/Icon";

<div>
  <div className="mb-4">
    <Button
      size="regular"
      fluid={true}
      classNameVariant={`justify-start bg-white hover:text-white hover:bg-brand-discord`}
      borderColor="border-gray-200"
      textColor="text-gray-1200"
    >
      <div className="flex">
        <div className="mr-2 ml-2">
          <Icon name="discord"></Icon>
        </div>
        <div className="text-base font-normal capitalize">Discord</div>
      </div>
    </Button>
  </div>
</div>;
```
