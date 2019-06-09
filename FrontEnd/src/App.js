import React, { Component } from "react";
import Landing from "./Landing/Landing"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Courses from "./pages/Courses"
import ForUser from "./pages/ForUser"
import Cabinet from "./pages/Cabinet"
import Course from "./pages/Course"
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class App extends Component {

    render() {
        return (
                <Router>
                    <Route path="/" exact component={Landing}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/courses" component={Courses}/>
                    <Route path="/cabinet" component={Cabinet}/>
                    <Route path="/foruser/:id?" component={ForUser}/>
                    <Route path="/course/:id?" component={Course}/>
                </Router>
        );
    }
}