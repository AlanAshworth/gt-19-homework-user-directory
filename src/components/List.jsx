import React from "react";
import Detail from "./Detail";

const List = (props) => {
  return (
    // <div className="container">
    //   <tbody>
    //     {props.employees.map((employee) => (
    //       <tr>
    //         <th scope="row"></th>
    //         <td className="col"><Detail {...employee} key={employee.id}/></td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </div>
    <tbody className="container">
      {props.employees.map((employee) => (
        <tr>
          <Detail {...employee} key={employee.id}/>
        </tr>
      ))}
    </tbody>
  );
};

export default List;