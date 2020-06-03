import React, { useMemo } from "react";
import { useTable, useSortBy, useFilters } from "react-table";

const ReactTable = ({ data }) => {
  // Define a default UI for filtering
  const DefaultColumnFilter = ({ column: { filterValue, setFilter } }) => {
    return (
      <input
        value={filterValue || ""}
        onChange={(e) => {
          setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
        placeholder={`Filter...`}
      />
    );
  };

  // This is a custom filter UI for selecting
  // a unique option from a list
  const SelectColumnFilter = ({
    column: { filterValue, setFilter, preFilteredRows, id },
  }) => {
    // Calculate the options for filtering
    // using the preFilteredRows
    const options = useMemo(() => {
      const options = new Set();
      preFilteredRows.forEach((row) => {
        options.add(row.values[id]);
      });
      return [...options.values()].sort();
    }, [id, preFilteredRows]);

    // Render a multi-select box
    return (
      <select
        value={filterValue}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
      >
        <option value="">All</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  };

  const Table = ({ columns, data }) => {
    const defaultColumn = useMemo(
      () => ({
        // Let's set up our default Filter UI
        Filter: DefaultColumnFilter,
      }),
      []
    );

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({ columns, data, defaultColumn }, useFilters, useSortBy);

    return (
      <table
        className="table table-sm table-dark table-bordered table-hover"
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  <div>
                    <span {...column.getSortByToggleProps()}>
                      {column.render("Header")}
                      {/* Add a sort direction indicator */}
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </div>
                  {/* Render the columns filter UI */}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  const columns = useMemo(
    () => [
      {
        Header: "Employees",
        columns: [
          {
            Header: "Photo",
            accessor: "picture.thumbnail",
            disableFilters: true,
            Cell: (props) => <img src={props.value} alt="name.first" />,
          },
          {
            Header: "Name",
            accessor: "name.first",
            disableFilters: false,
          },
        ],
      },
      {
        Header: "Details",
        columns: [
          {
            Header: "Email",
            accessor: "email",
            disableFilters: true,
          },
          {
            Header: "Phone",
            accessor: "phone",
            disableFilters: true,
          },
          {
            Header: "Location",
            accessor: "location.country",
            disableFilters: false,
            Filter: SelectColumnFilter,
            filter: "equals",
          },
          {
            Header: "Gender",
            accessor: "gender",
            disableFilters: false,
            Filter: SelectColumnFilter,
            filter: "equals",
          },
        ],
      },
    ],
    []
  );

  return <Table columns={columns} data={data} />;
};

export default ReactTable;
