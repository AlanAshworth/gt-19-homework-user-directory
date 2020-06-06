import React, { Component } from "react";
import axios from "axios";

/**
 * ! Componet currently imports props from directory container without
 * ! use, either set componet to work with props or only utilize data
 * ! from getEmployees() axios call.
 * TODO: Convert class component to functional component w/ hooks
 */
class Table extends Component {
  state = {
    employees: [],
    employeesToDisplay: [],
    searchTerm: "",
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    axios
      .get("https://randomuser.me/api/?results=20")
      .then((response) => {
        this.setState({
          employees: response.data.results,
          employeesToDisplay: response.data.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  clearFilter = () => {
    this.setState({
      employeesToDisplay: this.state.employees,
      searchTerm: "",
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  
  handleSort = (event) => {
    event.preventDefault();
    console.log("HandleSort");
    const employees = [...this.state.employees];
    const sortedNames = employees.sort((a, b) => {
      if (a.name.first < b.name.first) return -1;
      else if (a.name.first > b.name.first) return 1;
      return 0;
    });
    this.setState({
      employeesToDisplay: sortedNames,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("HandleSubmit");
    console.log(this.state.searchTerm);
    const employees = [...this.state.employees];
    const filteredEmployees = employees.filter((employee) => {
      const regex = new RegExp(this.state.searchTerm, "gi");
      return employee.name.first.match(regex);
    });
    this.setState({
      employeesToDisplay: filteredEmployees,
    });
  };

  render() {
    return (
      <>
        <form
          className="form-inline my-2 my-lg-0 float-right"
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            className="form-control mr-sm-2"
            placeholder="Search"
            aria-label="Search"
            name="searchTerm"
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <button
            className="btn btn-outline-primary my-2 mr-sm-2"
            type="submit"
          >
            Search
          </button>
          <button
            className="btn btn-outline-secondary my-2 mr-sm-2"
            onClick={this.clearFilter}
          >
            Clear
          </button>
        </form>

        <table className="table table-sm table-dark table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">Photo</th>
              <th scope="col">
                <a href="/" onClick={this.handleSort}>
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
            {this.state.employeesToDisplay.map(
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
  }
}

export default Table;
