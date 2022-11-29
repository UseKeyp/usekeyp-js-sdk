```jsx
import reactLogo from '../../assets/icons/logo512.png';

const contactMethods = [
    {id: 1, method: 'PHONE', value: '+1 542 555 2564'},
    {id: 2, method: 'EMAIL', value: 'testuser@gmail.com'},
    {id: 3, method: 'TWITTER', value: '@testuser1234'},
];

const contactMethods2 = [
    {id: 1, method: 'PHONE', value: '+1 542 555 2564'},
];

<div className="bg-[#E5E5E5] p-2 flex flex-row gap-x-2">
    <UserDetailsCard name="Test User" src={reactLogo} contactMethods={contactMethods}/>
    <UserDetailsCard name="Test User 2" src={reactLogo} contactMethods={contactMethods2}/>
</div>
```