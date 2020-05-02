import React, { Component } from "react";
import List from "../components/List";
import axios from "axios";
import "../App.css";

class Directory extends Component {
  state = {
    employees: [],
    employeesToDisplay: [],
    searchTerm: "",
  };

  componentDidMount() {
    this.getEmployees();
  }

  clearFilter = () => {
    this.setState({
      employeesToDisplay: this.state.employees,
      searchTerm: "",
    });
  };

  getEmployees = () => {
    axios
      .get("https://randomuser.me/api/?results=15")
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

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
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

  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-sm-12">
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
          </div>
        </div>

        <div className="row">
          <table className="col-sm-12 table table-striped">
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
            <List employees={this.state.employeesToDisplay} />
          </table>
        </div>
      </div>
    );
  }
}

export default Directory;
