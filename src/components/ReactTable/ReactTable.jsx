import React, { useMemo } from "react";
import { useTable, useSortBy, useFilters } from "react-table";

const ReactTable = ({ data }) => {
  // Define a default UI for filtering
  function DefaultColumnFilter({ column: { filterValue, setFilter } }) {
    return (
      <input
        value={filterValue || ""}
        onChange={(e) => {
          setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
        placeholder={`Filter...`}
      />
    );
  }

  const Table = ({ columns, data }) => {
    const defaultColumn = React.useMemo(
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
            disableFilters: true,
          },
          {
            Header: "Gender",
            accessor: "gender",
            disableFilters: true,
          },
        ],
      },
    ],
    []
  );

  return <Table columns={columns} data={data} />;
};

export default ReactTable;
