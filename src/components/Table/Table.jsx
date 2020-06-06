import React, { useState, useEffect } from "react";

const Table = ({ data }) => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setUsers(data);
  }, [data]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClear = () => {
    setUsers(data);
    setSearchTerm("");
  };

  // TODO: update function to sort descending
  const handleSort = (event, field) => {
    event.preventDefault();

    const userList = [...users];
    const sortedByField = userList.sort((a, b) => {
      switch (field) {
        case "photo":
          a = a.picture.thumbnail;
          b = b.picture.thumbnail;
          break;
        case "name":
          a = a.name.first;
          b = b.name.first;
          // a = `${a.name.first.toLowerCase()} ${a.name.last.toLowerCase()}`;
          // b = `${b.name.first.toLowerCase()} ${b.name.last.toLowerCase()}`;
          break;
        case "email":
          a = a.email;
          b = b.email;
          break;
        case "phone":
          a = a.phone;
          b = b.phone;
          break;
        case "location":
          a = a.location.country;
          b = b.location.country;
          break;
        case "gender":
          a = a.gender;
          b = b.gender;
          break;
        default:
          break;
      }
      if (a < b) return -1;
      else if (a > b) return 1;
      return 0;
    });
    setUsers(sortedByField);
  };

  // TODO: filter w/ last names
  const handleSubmit = (event) => {
    event.preventDefault();

    const userList = [...users];
    const filteredUsers = userList.filter((user) => {
      const regex = new RegExp(searchTerm, "gi");
      return user.name.first.match(regex);
    });
    console.log(`FilerterUsers: `, filteredUsers);
    setUsers(filteredUsers);
  };

  return (
    <>
      <form
        className="form-inline my-2 my-lg-0"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="form-control mr-sm-2"
          placeholder="Search name"
          aria-label="Search"
          name="searchTerm"
          value={searchTerm}
          onChange={handleChange}
          autoComplete="off"
        />
        <button
          className="btn btn-outline-primary my-2 mr-sm-2"
          type="submit"
        >
          Search
        </button>
        <button
          className="btn btn-outline-secondary my-2 mr-sm-2"
          onClick={handleClear}
        >
          Clear
        </button>
      </form>

      <table className="table table-sm table-dark table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col" onClick={(event) => handleSort(event, "photo")}>Photo</th>
            <th scope="col" onClick={(event) => handleSort(event, "name")}>Name</th>
            <th scope="col" onClick={(event) => handleSort(event, "email")}>Email</th>
            <th scope="col" onClick={(event) => handleSort(event, "phone")}>Phone</th>
            <th scope="col" onClick={(event) => handleSort(event, "location")}>Location</th>
            <th scope="col" onClick={(event) => handleSort(event, "gender")}>Gender</th>
          </tr>
        </thead>
        <tbody>
          {/* Map data for each employee */}
          {users.map(
            ({ picture, name, email, phone, location, gender }, index) => (
              <tr key={index}>
                <th scope="row"><img src={picture.thumbnail} alt={name.first}></img></th>
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
