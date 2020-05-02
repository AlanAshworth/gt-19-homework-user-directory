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
      return employee.employee_name.match(regex);
    });
    this.setState({
      employeesToDisplay: filteredEmployees,
    });
  };

  // render() {
  //   return (
  //     <div>
  //       <table class="table table-striped">
  //         <thead>
  //           <tr>
  //             <th scope="col">Photo</th>
  //             <th scope="col">Name</th>
  //             <th scope="col">Email</th>
  //             <th scope="col">Phone</th>
  //             <th scope="col">Location</th>
  //             <th scope="col">Gender</th>
  //           </tr>
  //         </thead>
  //         <List employees={this.state.employees} />
  //       </table>
  //     </div>
  //   );
  // }

  render() {
    return (
      <div className="container App">
        <div className="row float-right">
          <div className="col-sm-12">
            <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
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
                type="submit"
              >
                Clear
              </button>
            </form>
          </div>
        </div>

        {this.state.employees.length !==
          this.state.employeesToDisplay.length && (
          <button
            className="btn btn-secondary"
            onClick={this.clearFilter}
          >
            Clear Filter
          </button>
        )}
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Photo</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Location</th>
              <th scope="col">Gender</th>
            </tr>
          </thead>
          <List employees={this.state.employeesToDisplay} />
        </table>
      </div>
    );
  }
}

export default Directory;
