import React from "react";
import Detail from "./Detail";

const List = (props) => {
  return (
    <div className="container">
      <tbody>
        {props.employees.map((employee) => (
          <tr>
            <th scope="row"></th>
            <td><Detail {...employee} key={employee.id}/></td>
            {/* <td><Detail {...employee} key={employee.id}/></td> */}
          </tr>
        ))}
      </tbody>
    </div>
  );
};

export default List;