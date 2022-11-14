```jsx
import Icon from '../Icon/Icon';

<div>
    <Button variant="green" fluid={true} textColor="">Accept Highest Bid</Button>
    <div className="gap-y-4">---</div>
    <Button href="https://www.google.com/" variant="blue" fluid={false} textColor="">Link to Google</Button>
    <div className="gap-y-4">---</div>
    <Button variant="transparent" textColor="text-black" borderColor="border-[#E5E7EB]" fluid={false}>
        <div className="flex justify-center">
            <Icon name="google"></Icon>
        </div>
    </Button>
</div>
```