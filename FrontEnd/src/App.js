import React, { Component } from "react";
import Landing from "./Landing/Landing"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Courses from "./pages/Courses"
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class App extends Component {

    render() {
        return (
            <div id="root">
                <Router>
                    <Route path="/main" component={Landing}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                    <Route path="/courses" component={Courses}></Route>
                </Router>
            </div>
        );
    }
}