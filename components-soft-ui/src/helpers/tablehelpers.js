import React from "react";

export function SelectColumnFilter({
                                       column: {filterValue, setFilter, preFilteredRows, id, render},
                                   }) {
    const options = React.useMemo(() => {
        const options = new Set();
        preFilteredRows.forEach((row) => {
            options.add(row.values[id]);
        });
        return [...options.values()];
    }, [id, preFilteredRows]);
    return (
        <label className="flex gap-x-2 items-center pl-2">
            <span className="text-gray-700">{render("Header")}:</span>
            <select
                name={id}
                className="flex w-full h-[32px] pl-4 rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                id={id}
                value={filterValue}
                onChange={(e) => {
                    setFilter(e.target.value || undefined);
                }}
            >
                <option value="">All</option>
                {options.map((option, i) => (<option key={i} value={option}>
                    {option}
                </option>))}
            </select>
        </label>);
}