import React, {Fragment} from "react";

const Detail = (props) => {
  return (
    <Fragment>
      <th scope="row"><img src={props.picture.thumbnail} alt={props.name.first}></img></th>
      <td className="col">{props.name.first} {props.name.last}</td>
      <td className="col">{props.email}</td>
      <td className="col">{props.phone}</td>
      <td className="col">{props.location.country}</td>
      <td className="col">{props.gender}</td>
    </Fragment>
  );
};

export default Detail;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Detail = () => {

//   const [employeePicture, setEmployeePicture] = useState("https://randomuser.me/api/portraits/thumb/women/9.jpg");
//   const [employeeId, setEmployeeId] = useState("976-68-2634");
//   const [employeeName, setEmployeeName] = useState("Vicki");
//   const [employeeEmail, setEmployeeEmail] = useState("vicki.burns@example.com");
//   const [employeePhone, setEmployeePhone] = useState("(724)-590-4253");
//   const [employeeGender, setEmployeeGender] = useState("female");
//   const [employeeDOB, setEmployeeDOB] = useState("1964-08-21T16:05:09.123Z");

//   useEffect(() => {
//     axios
//       .get("https://randomuser.me/api/?inc=picture,id,name,email,phone,gender,dob")
//       .then((response) => {
//         console.log(response.data.results);
//         setEmployeePicture(response.data.results[0].picture.thumbnail);
//         setEmployeeId(response.data.results[0].id.value);
//         setEmployeeName(response.data.results[0].name.first);
//         setEmployeeEmail(response.data.results[0].email);
//         setEmployeePhone(response.data.results[0].phone);
//         setEmployeeGender(response.data.results[0].gender);
//         setEmployeeDOB(response.data.results[0].dob.date);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <div className="row">
//       <div className="col"><img src={employeePicture} alt={employeeName}></img></div>
//       <div className="col">{employeeId}</div>
//       <div className="col">{employeeName}</div>
//       <div className="col">{employeeEmail}</div>
//       <div className="col">{employeePhone}</div>
//       <div className="col">{employeeGender}</div>
//       <div className="col">{employeeDOB}</div>
//     </div>
//   );
// };

// export default Detail;