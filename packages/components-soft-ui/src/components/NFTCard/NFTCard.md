```jsx
import Icon from '../Icon/Icon';
import reactLogo from '../../assets/icons/logo512.png';

<div>
<NFTCard src={reactLogo} name="ItemName"/>
<div className="gap-y-4">---</div>
<NFTCard name="ItemName">
    <div className="flex justify-center">
        <Icon name="sampleNFT"></Icon>
    </div>
</NFTCard>
</div>
```