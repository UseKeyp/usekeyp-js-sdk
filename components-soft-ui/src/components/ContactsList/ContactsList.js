import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import UserCard from "../UserCard/UserCard";

const ContactsList = ({ contacts }) => {
    const [filteredContacts, setFilteredContacts] = React.useState(contacts);

    const handleSearch = (searchTerm) => {
        const filteredContacts = contacts.filter((contact) => {
            return (
                contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                contact.phoneNumber.includes(searchTerm)
            );
        });
        setFilteredContacts(filteredContacts);
    };

    return (
        <div className="mx-auto px-6 py-4 max-w-sm">
            <SearchBar contacts={contacts} onSearch={handleSearch} />
            <ul className="mt-6 leading-loose">
                {filteredContacts.map((contact) => (
                    <li key={contact.phoneNumber} className="mt-2">
                        <UserCard
                            name={contact.name}
                            phone={contact.phoneNumber}
                            src={contact.src}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactsList;
