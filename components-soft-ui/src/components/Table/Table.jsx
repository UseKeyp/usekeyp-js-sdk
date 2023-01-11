import React from "react";
import {useTable, useGlobalFilter, useAsyncDebounce, useFilters, useSortBy, usePagination} from "react-table";
// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from "regenerator-runtime";
import TextInput from "../TextInput/TextInput.jsx";
import Icon from "../Icon/Icon.jsx";

/**
 * A search filter for the table
 * @param preGlobalFilteredRows - the rows of the table
 * @param globalFilter - the current filter
 * @param setGlobalFilter - the function to set the filter
 * @returns {JSX.Element} - a search filter
 */
function GlobalFilter({
                          preGlobalFilteredRows, globalFilter, setGlobalFilter,
                      }) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (<label className="flex gap-x-2 items-baseline">
        <span className="text-gray-800">Search: </span>
            <TextInput size="small" value={value || ""} onChange={e => {
                setValue(e.target.value);
                onChange(e.target.value);
            }} placeholder={`${count} records...`}/>
    </label>
  )
}

/**
 * Interactive table supporting searching and filtering
 * @param columns - an array of objects that define the columns of the table
 * @param data - an array of objects that define the data of the table
 * @returns {JSX.Element} - a JSX table
 */
function Table({columns, data}) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        nextPage,
        previousPage,
        setPageSize,
        state,
        preGlobalFilteredRows,
        setGlobalFilter
    } = useTable({
        columns, data,
    }, useFilters, useGlobalFilter, useSortBy, usePagination);

    return (<>
        <div className="flex gap-x-2">
            <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
            />
            {headerGroups.map((headerGroup) =>
                headerGroup.headers.map((column) =>
                    column.Filter ? (
                        <div className="mt-2 sm:mt-0" key={column.id}>
                            {column.render("Filter")}
                        </div>
                    ) : null
                )
            )}
        </div>
        <div className="mt-2 flex flex-col">
            <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden sm:rounded-lg">
                        <table {...getTableProps()} className="min-w-full divide-y divide-gray-300">
                            <thead>
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
                                            {...column.getHeaderProps(column.getSortByToggleProps())}
                                        >
                                            {column.render('Header')}
                                            {/* Add a sort direction indicator */}
                                            <span>
                            {column.isSorted
                                ? column.isSortedDesc
                                    ? ' ▼'
                                    : ' ▲'
                                : ''}
                          </span>
                                        </th>
                                    ))}
                                </tr>
                            ))}
                            </thead>
                            <tbody
                                {...getTableBodyProps()}
                                className="bg-white divide-y divide-gray-200"
                            >
                            {page.map((row) => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map(cell => {
                                            return (
                                                <td
                                                    {...cell.getCellProps()}
                                                    className="px-6 py-4 whitespace-nowrap"
                                                >
                                                    {cell.render('Cell')}
                                                </td>
                                            )
                                        })}
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-row gap-x-4 mt-2 mx-auto">
            <div className="flex gap-x-2">
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                <Icon color="fill-gray-800" key="leftarrow" name="leftarrow" size="80px" />
            </button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
                <Icon color="fill-gray-800" key="rightarrow" name="rightarrow" size="80px" />
            </button>
            </div>
            <div className="flex gap-x-1 mt-1 text-gray-800">
          Page
                <strong>
            {state.pageIndex + 1} of {pageOptions.length}
          </strong>
        </div>
            <select
                className="flex w-content h-[32px] pl-4 rounded-md border-gray-300 shadow-sm"
                value={state.pageSize}
                onChange={e => {
                    setPageSize(Number(e.target.value))
                }}
            >
                {[5, 10, 20].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                    </option>
                ))}
            </select>
        </div>
        </>);
}

export default Table;