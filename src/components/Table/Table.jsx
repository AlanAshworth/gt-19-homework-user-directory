import React, { useState, useMemo } from "react";

/**
 * Code resource from:
 * https://www.smashingmagazine.com/2020/03/sortable-tables-react/
 * @param {*} items 
 * @param {*} config 
 */
const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

// FIXME: Sorting not functional on columns where table data
// has narrowing scope (i.e "location.counrty" or "name.first")
const Table = ({ data }) => {
  const { items, requestSort, sortConfig } = useSortableData(data);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      console.log("not sortconfig");
      return;
    }
    console.log(`sort config`, sortConfig);
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <>
      <table className="table table-sm table-dark table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">
              <button
                type="button"
                onClick={() => requestSort("photo")}
                className={getClassNamesFor("photo")}
              >
                Photo
              </button>
            </th>
            <th scope="col">
              <button
                type="button"
                onClick={() => requestSort("name")}
                className={getClassNamesFor("name")}
              >
                Name
              </button>
            </th>
            <th scope="col">
              <button
                type="button"
                onClick={() => requestSort("email")}
                className={getClassNamesFor("email")}
              >
                Email
              </button>
            </th>
            <th scope="col">
              <button
                type="button"
                onClick={() => requestSort("phone")}
                className={getClassNamesFor("phone")}
              >
                Phone
              </button>
            </th>
            <th scope="col">
              <button
                type="button"
                onClick={() => requestSort("location")}
                className={getClassNamesFor("location")}
              >
                Location
              </button>
            </th>
            <th scope="col">
              <button
                type="button"
                onClick={() => requestSort("gender")}
                className={getClassNamesFor("gender")}
              >
                Gender
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map(
            ({ picture, name, email, phone, location, gender }, index) => (
              <tr key={index}>
                <th scope="row">
                  <img src={picture.thumbnail} alt={name.first}></img>
                </th>
                <td className="col">{name.first}</td>
                <td className="col">{email}</td>
                <td className="col">{phone}</td>
                <td className="col">{location.country}</td>
                <td className="col">{gender}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
};

export default Table;
