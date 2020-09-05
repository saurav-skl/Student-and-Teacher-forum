import React, { useState } from "react";
import axios from 'axios';
import { useHistory,Link } from "react-router-dom";

const AddUser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        rollno: "",
        classes: "",
        section: "",
    });

    const onInputChange = (event) => {
        console.log(event.target.value);
        setUser({ ...user, [event.target.name]: event.target.value })
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/users", user);
        history.push("/Student");
    };

    const { name, rollno, classes, section } = user;

    return (
        <>
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Add A User</h2>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Name"
                                name="name"
                                value={name}
                                onChange={e => onInputChange(e)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="number"
                                className="form-control form-control-lg"
                                placeholder="Enter Your RollNo."
                                name="rollno"
                                value={rollno}
                                onChange={e => onInputChange(e)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="classes"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Class"
                                name="classes"
                                value={classes}
                                onChange={e => onInputChange(e)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Section"
                                name="section"
                                value={section}
                                onChange={e => onInputChange(e)}
                                required
                            />
                        </div>
                        <button className="btn btn-success btn mr-4">Add User</button>
                        <Link className="btn btn- float-right" to="/student">Cancel</Link>
                    </form>
                    
                </div>
            </div>
        </>
    );
};

export default AddUser;
