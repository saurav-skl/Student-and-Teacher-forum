import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            {/* // <h1>Navigation bar</h1> */}
            {/* <div className="navBar">
            <NavLink activeClassName="Navigation_bar" to="/">Home</NavLink>
            <NavLink  activeClassName="Navigation_bar" to="/">Student</NavLink>
            <NavLink  activeClassName="Navigation_bar" to = "">Teacher</NavLink>
        </div> */}
            <div className="navbar_container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <span className="navbar-brand ">Application</span>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active ">
                                <NavLink className="nav-link" exact to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link" exact to="/student">
                                    Students
                            </NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link" exact to="/teacher">
                                    Teacher
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
