import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Table from "../components/Table";

const Directory_TEST = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios("https://randomuser.me/api/?results=20");
      setData(response.data.results);
    })();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Employees",
        columns: [
          {
            Header: "Photo",
            accessor: "picture.thumbnail",
            Cell: (props) => (
              <img src={props.data[0].picture.thumbnail} alt="name.first" />
            ),
          },
          {
            Header: "Name",
            accessor: "name.first",
          },
        ],
      },
      {
        Header: "Details",
        columns: [
          {
            Header: "Email",
            accessor: "email",
          },
          {
            Header: "Phone",
            accessor: "phone",
          },
          {
            Header: "Location",
            accessor: "location.country",
          },
          {
            Header: "Gender",
            accessor: "gender",
          },
        ],
      },
    ],
    []
  );

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Table columns={columns} data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Directory_TEST;
