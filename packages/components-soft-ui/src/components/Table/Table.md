```jsx
import React from "react";
import Table from "./Table";
import {SelectColumnFilter} from "../../helpers/tablehelpers"

const getData = () => {

    const data = [
        {
            name: "Game Items Mountain World",
            permissions: "Facilitator",
            type: "ERC1155",
            last_change: "3 days ago",
            collection_items: "10,000",
        },
        {
            name: "Game Token",
            permissions: "Facilitator",
            type: "ERC20",
            last_change: "2 days ago",
            collection_items: "225",
        },
    ];
    return [...data, ...data, ...data]
}

const columns = React.useMemo(
    () => [
        {
            Header: "Name",
            accessor: "name",
        },
        {
            Header: "Permissions",
            accessor: "permissions",
        },
        {
            Header: "Type",
            accessor: "type",
            Filter: SelectColumnFilter,
            filter: 'includes',
        },
        {
            Header: "LAST CHANGE",
            accessor: 'last_change',

        },
        {
            Header: "COLLECTION ITEMS",
            accessor: "collection_items",
        },
    ],
    []
);

const data = React.useMemo(() => getData(), []);

<div className="w-full">
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div>
            <h1 className="text-xl text-gray-800 text-3xl font-semibold">Collection Contracts</h1>
        </div>
        <div className="mt-4">
            <Table columns={columns} data={data}/>
        </div>
    </main>
</div>
```