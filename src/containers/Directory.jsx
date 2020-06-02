import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../components/Table/Table";
import ReactTable from "../components/ReactTable/ReactTable";
import "../App.css";

const Directory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios("https://randomuser.me/api/?results=20");
      setData(response.data.results);
    })();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="container-sm">
            <h6>Table</h6>
            <Table data={data} />
          </div>
        </div>
        <div className="col">
          <div className="container-sm">
            <h6>React Table</h6>
            <ReactTable data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directory;
