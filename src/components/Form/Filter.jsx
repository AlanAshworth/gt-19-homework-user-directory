import React, { useState, useEffect } from "react";

const Filter = (props) => {
  const [employees, setEmployees] = useState([]);
  const [employeesToDisplay, setEmployeesToDisplay] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = () => {
    setEmployees([props.employees]);
  };

  const clearFilter = () => {
    setEmployeesToDisplay(employees);
    setSearchTerm("");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearchTerm({
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("HandleSubmit");
    console.log(searchTerm);
    const employees = [...employees];
    const filteredEmployees = employees.filter((employee) => {
      const regex = new RegExp(searchTerm, "gi");
      return employee.name.first.match(regex);
    });
    setEmployeesToDisplay(filteredEmployees);
  };

  return (
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
  );
};

export default Filter;
