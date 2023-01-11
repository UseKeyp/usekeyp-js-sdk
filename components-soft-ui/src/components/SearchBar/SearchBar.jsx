import React from "react";
import Icon from "../Icon/Icon.jsx";

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = React.useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    React.useEffect(() => {
        onSearch(searchTerm);
    }, [searchTerm, onSearch]);

    return (
        <form>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <Icon name="magnifyingglass" />
                </div>
                <input
                    className="flex pl-12 pr-3 py-3 block w-full rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:placeholder-gray-400 sm:text-sm"
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
        </form>
    );
};

export default SearchBar;
