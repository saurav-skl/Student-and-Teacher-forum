import React from "react";
import "./Student";
import "./Teacher";
import Student from "./Student";
import Teacher from "./Teacher";
import Home from "./Home";
import Error from "./Error";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Navbar from "./Navbar";
// import {Navbar} from 'react-responsive-navbar-overlay';
import { Route, Switch } from "react-router-dom";
import AddUser from "./AddUser";
import EditUser from './EditUser';
import Addteacher from "./Addteacher";
import Editteacher from "./Editteacher";

const App = () => {
    return (
        <>
            <Navbar />
            <h1>Welcome Guys </h1>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/student" component={Student} />
                <Route exact path="/teacher" component={Teacher} />
                <Route exact path="/student/adduser" component={AddUser} />
                <Route exact path="/student/edituser/:id" component={EditUser} />
                <Route exact path="/teacher/addteacher" component={Addteacher}/>
                <Route exact path="/teacher/editteacher/:id" component={Editteacher}/>
                <Route component={Error} />
            </Switch>
        </>
    );
};

export default App;
