import React, { useState } from "react";

const Table = ({ data }) => {
  const [employees, setEmployees] = useState([]);
  const [employeesToDisplay, setEmployeesToDisplay] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // const getEmployees = () => {
  //   setEmployees({data});
  //   setEmployeesToDisplay({data});
  // };

  const clearFilter = () => {
    setEmployeesToDisplay(employees);
    setSearchTerm("");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("HandleSubmit");
    console.log(searchTerm);
    const employees = [...this.state.employees];
    const filteredEmployees = employees.filter((employee) => {
      const regex = new RegExp(searchTerm, "gi");
      return employee.name.first.match(regex);
    });
    setEmployeesToDisplay(filteredEmployees);
  };

  const handleSort = (event) => {
    event.preventDefault();
    console.log("HandleSort");
    const employees = [data];
    const sortedNames = employees.sort((a, b) => {
      if (a.name.first < b.name.first) return -1;
      else if (a.name.first > b.name.first) return 1;
      return 0;
    });
    setEmployeesToDisplay(sortedNames);
  };

  return (
    <>
      <form
        className="form-inline my-2 my-lg-0 float-right"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="form-control mr-sm-2"
          placeholder="Search"
          aria-label="Search"
          name="searchTerm"
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="btn btn-outline-primary my-2 mr-sm-2" type="submit">
          Search
        </button>
        <button
          className="btn btn-outline-secondary my-2 mr-sm-2"
          onClick={clearFilter}
        >
          Clear
        </button>
      </form>

      <table className="table table-sm table-dark table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">Photo</th>
            <th scope="col">
              <a href="/" onClick={handleSort}>
                Name
              </a>
            </th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Location</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          {/* Map data for each employee */}
          {data.map(({ picture, name, email, phone, location, gender }, index) => (
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
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
