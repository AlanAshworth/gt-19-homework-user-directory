import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";

const ReactTable = ({ data }) => {
  const Table = ({ columns, data }) => {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({ columns, data }, useSortBy);

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
                  <span {...column.getSortByToggleProps()}>
                    {column.render("Header")}
                    {/* Add a sort direction indicator */}
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
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
            Cell: (props) => <img src={props.value} alt="name.first" />,
          },
          {
            Header: "Name",
            accessor: "name.first",
          },
        ],
      },
      {
        Header: "Details",
        columns: [
          {
            Header: "Email",
            accessor: "email",
          },
          {
            Header: "Phone",
            accessor: "phone",
          },
          {
            Header: "Location",
            accessor: "location.country",
          },
          {
            Header: "Gender",
            accessor: "gender",
          },
        ],
      },
    ],
    []
  );

  return <Table columns={columns} data={data} />;
};

export default ReactTable;
