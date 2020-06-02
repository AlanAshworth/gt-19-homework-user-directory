import React from "react";

const Table = ({ data }) => {
  return (
    <table className="table table-sm table-dark table-bordered table-hover">
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
      <tbody>
        {/* Map data for each employee */}
        {data.map(({ id, picture, name, email, phone, location, gender }) => (
          <tr>
            <th scope="row" key={id}>
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
  );
};

export default Table;
