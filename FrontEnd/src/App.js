import React, { Component } from "react";
import Landing from "./Landing/Landing"
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class App extends Component {

    render() {
        return (
            <div id="root">
                <Landing />
                <Router>
                    <Route></Route>
                </Router>
            </div>
        );
    }
}