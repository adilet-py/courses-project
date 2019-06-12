import React, { Component } from "react";
import Landing from "./Landing/Landing"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Courses from "./pages/Courses"
import ForUser from "./pages/ForUser"
import Cabinet from "./pages/Cabinet"
import Course from "./pages/Course"
import CourseName from "./pages/CourseName"

import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class App extends Component {

    render() {
        return (
                <Router>
                    <Route path="/" exact component={Landing}/>
                    <Route path="/company/login" component={Login}/>
                    <Route path="/company/register" component={Register}/>
                    <Route path="/user/courses" component={Courses}/>
                    <Route path="/company/cabinet" component={Cabinet}/>
                    <Route path="/user/foruser/:id?" component={ForUser}/>
                    <Route path="/user/course/:id?" component={Course}/>
                    <Route path="/company/CourseName/:id?" component={CourseName}/>
                </Router>
        );
    }
}