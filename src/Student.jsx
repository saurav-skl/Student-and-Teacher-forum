import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddUser from "./AddUser";

const Student = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    // console.log(result);
    setUser(result.data);
  };
  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };
  return (
    <>
      <h1>This Is Student page</h1>
      <div className="alert alert-success text-center border shadow-sm">
        <Link className="btn btn-outline-dark" to="/student/adduser">Add Student</Link>
      </div>
      {/* <div className=""> */}
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Student Form</h2>
          <table className="table border shadow">
            <thead className="thead-dark ">
              <tr>
                <th>S.No.</th>
                <th scope="col">Name</th>
                <th scope="col">Roll no. </th>
                <th scope="col">Class</th>
                <th scope="col">Section</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.rollno}</td>
                  <td>{user.classes}</td>
                  <td>{user.section}</td>
                  <td>
                    {/* <Link class="btn btn-primary mr-2">View</Link> */}
                    <Link className="btn btn-outline-primary mr-2" to={`/student/edituser/${user.id}`}>Edit</Link>
                    <Link className="btn btn-outline-danger" onClick={() => deleteUser(user.id)}>Delete</Link>
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

export default Student;
