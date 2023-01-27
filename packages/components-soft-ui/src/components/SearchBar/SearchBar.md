```js
const contacts = [
  { name: "John Doe", phoneNumber: "123-456-7890" },
  { name: "Jane Smith", phoneNumber: "234-567-8901" },
  { name: "Bob Johnson", phoneNumber: "345-678-9012" }
];

<div className="bg-[#E5E5E5] p-2">
<SearchBar contacts={contacts} onSearch={(searchTerm) => console.log(searchTerm)} />
</div>
```