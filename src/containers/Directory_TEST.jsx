import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../components/Table";
import "../App.css";
import { useMemo } from "react";

const Directory_TEST = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios("https://randomuser.me/api/?results=20");
      setData(response.data.results);
    })();
  }, []);

  const columns = useMemo(() => [
    {
      Header: "Employees",
      columns: [
        {
          Header: "Photo",
          accessor: "picture.thumbnail",
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
  []);

  return (
    <>
      <Table columns={columns} data={data}/>
    </>
  );
};

export default Directory_TEST;
