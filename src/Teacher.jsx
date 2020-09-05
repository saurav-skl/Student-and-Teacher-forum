import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddUser from "./AddUser";

const Teacher = () => {
  const [teach, setUser] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3004/teach");
    // console.log(result);
    setUser(result.data);
  };
  const deleteUser = async id => {
    await axios.delete(`http://localhost:3004/teach/${id}`);
    loadUsers();
  };
  return (
    <>
      <h1>This Is Teacher page</h1>
      <div className="alert alert-success text-center border shadow-sm">
        <Link className="btn btn-outline-dark" to="/teacher/addteacher">Add Teacher</Link>
      </div>
      {/* <div className=""> */}
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Teacher Form</h2>
          <table className="table border shadow">
            <thead className="thead-dark ">
              <tr>
                <th>S.No.</th>
                <th scope="col">Name</th>
                <th scope="col">Teacher Id </th>
                <th scope="col">Class</th>
                <th scope="col">Section</th>
              </tr>
            </thead>
            <tbody>
              {teach.map((teach, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{teach.name}</td>
                  <td>{teach.teacherid}</td>
                  <td>{teach.classes}</td>
                  <td>{teach.section}</td>
                  <td>
                    {/* <Link class="btn btn-primary mr-2">View</Link> */}
                    <Link className="btn btn-outline-primary mr-2" to={`/teacher/editteacher/${teach.id}`}>Edit</Link>
                    <Link className="btn btn-outline-danger" onClick={() => deleteUser(teach.id)}>Delete</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Teacher;
