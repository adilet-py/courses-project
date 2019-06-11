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
    @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Rock+Salt');
    width: 60%;
    height: 95%;
    margin: 0 auto;
    background: rgba(0,0,0,0.8);
    color: #fff;
    h1 {
        text-align: center;
        font-family: 'Rock Salt', cursive;
        font-size: 50px;
        margin: 0;
    }
    .menu, .menu ul { 
        list-style: none;
        margin: 0; padding: 0;
    }
    .menu {
        padding: 0 5px; 
        font: 14px Arial, sans-serif;
        color: #fff;
        margin: 40px;
    }
    .menu > li { 
        position: relative;
    }
    .menu a {
        text-decoration: none; 
        color: #fff;
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
        background: grey; 
        color: #000; 
    }
    .menu li:hover ul {
        display: block;
    }
    .company {
        font-family: 'Ubuntu', sans-serif;
        font-size: 25px;
    }
    .course {
        font-family: 'Ubuntu', sans-serif;
        font-size: 20px;
    }
    @media (max-width: 670px) {
        width: 100%;
        height: 100%;
        color: #fff;
        padding-top: 40px;
        h1 {
            font-size: 30px;
        }
        .company {
            font-size: 20px;
        }
        .course {
            font-size: 15px;
        }
        .menu {
            margin: 20px;
        }
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
                    <ul >
                        {
                            companies.map(company => {
                                return(
                                    <li><a className="company" href="#">{company.company_name}</a>
                                        <ul>
                                            {
                                                company.courses.map(course => {
                                                    return(
                                                        <li><a className="course" href={`/course/${course._id}`}>{course.course_name}</a></li>
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