import React, { Component } from "react";
import styled from "styled-components";
import api from "../config/api";

let Background = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(./img/back.jpg) no-repeat center top / cover;
`
let Container = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Akronim');
    @import url('https://fonts.googleapis.com/css?family=Rock+Salt');
    width: 80%;
    height: 100vh;
    background: red;
    margin: 0 auto;
    background: rgba(0,0,0,0.8);
    color: #00aeef;
    h1 {
        text-align: center;
    }
    .menu, .menu ul { 
        list-style: none;
        margin: 0; padding: 0;
    }
    .menu {
        padding: 0 5px; 
        font: 14px Arial, sans-serif;
        color: #00aeef;
    }
    .menu > li { 
        position: relative;
    }
    .menu a {
        text-decoration: none; 
        color: #00aeef;
        display: block; 
    }
    .menu > li > a {
        padding: 10px 15px; 
        position: relative; 
        z-index: 3; 
    }
    .menu ul {
        display: none;
    }
    .menu ul {
        position: relative;
        left: 50px;
        display: none;
        width: 200px; 
    }
    .menu ul a {
        padding: 5px 10px; 
    }
    .menu ul a:hover {
        background: #008df2; 
        color: #fff; 
    }
    .menu li:hover ul {
        display: block;
    }
`
class Courses extends Component {
    state = {
        companies: []
    }

    componentWillMount() {
        api.get('/company/all')
        .then(response => {
            console.log(response.data.companies)
            this.setState(response.data);
        });
    }

    render() {
        let { companies } = this.state;
        console.log(companies)
        return (
            <Background>
                <Container>
                    <h1>Companies...</h1>
                    <ul className="menu">
                        {
                            companies.map(company => {
                                return(
                                    <li><a href="#">{company.company_name}</a>
                                        <ul>
                                            {
                                                company.courses.map(course => {
                                                    return(
                                                        <li><a href="#">{course.course_name}</a></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </Container>
            </Background>
        );
    }
}

export default Courses;