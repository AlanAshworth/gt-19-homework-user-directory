// import React from "react";
// import Detail from "./Detail";

// const List = (props) => {
//   return (
//     <div className="container">
//       <div className="row">
//         <h1>You have {props.employees.length} employees.</h1>
//       </div>
//       <div>
//             {props.employees.map((employee) => (
//               <Detail {...employee} key={employee.id}/>
//             ))}
//       </div>
//     </div>
//   );
// };

// export default List;

import React from "react";
import Detail from "./Detail";

const List = (props) => {
  return (
    <div className="container">
      <div className="row">
        <h1>You have {props.employees.length} employees.</h1>
      </div>
      <div>
      <tbody>
            {props.employees.map((employee) => (
              <tr>
              <th scope="row"></th>
              {/* <td><Detail {...employee} key={employee.id}/></td> */}
              <td><Detail {...employee} key={employee.id}/></td>
            </tr>
            ))}
            </tbody>
      </div>
    </div>
  );
};

export default List;