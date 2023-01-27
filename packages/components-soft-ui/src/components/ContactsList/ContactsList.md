```js
import reactLogo from '../../assets/icons/logo512.png';
const contacts = [
{ name: "John Doe", phoneNumber: "123-456-7890", src: reactLogo },
{ name: "Jane Smith", phoneNumber: "234-567-8901", src: reactLogo },
{ name: "Bob Johnson", phoneNumber: "345-678-9012", src: reactLogo }
];

<div className="bg-[#E5E5E5] p-2">
<ContactsList contacts={contacts} />
</div>
```