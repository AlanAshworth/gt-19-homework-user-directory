import React from "react";
import Detail from "./Detail";

const List = (props) => {
  return (
    <tbody>
      {props.employees.map((employee) => (
        <tr>
          <Detail {...employee} key={employee.id}/>
        </tr>
      ))}
    </tbody>
  );
};

export default List;