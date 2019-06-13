import React, { Component } from "react";
import styled from "styled-components";
import api from "../config/api";

let Background = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(/img/back.jpg) no-repeat center top / cover;
`
let Container = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Rock+Salt');
    width: 80%;
    background: red;
    margin: 0 auto;
    background: rgba(0,0,0,0.8);
    color: #fff;
    h1 {
        text-align: center;
        font-family: 'Rock Salt', cursive;
    }
    h2 {
        text-align: center;
        font-family: 'Ubuntu', sans-serif;
    }
    button {
        background: grey;
        border: 1px solid grey;
        border-radius: 25px;
        padding: 5px 10px;
        position: relative;
        left: 50%;
        transform: translate(-50%, -50%);
        margin-top: 20px;
    }
    a {
        font-family: 'Rock Salt', cursive;
        text-decoration: none;
        color: #000;
    }
    @media (max-width: 670px) {
        width: 100%;
        height: 100%;
        color: white;
        padding-top: 40px;
    }
`

class Course extends Component {
    state = {
        course_name: '',
        fare: '',
        description: ''
    }

    async componentWillMount() {
        let response = await api.get(`/course/${this.props.match.params.id}`);
        this.setState(response.data);
    }

    render() {
        let { course_name, fare, description } = this.state;
        return(
            <Background>
                <Container>
                    <h1>{course_name}</h1>
                    <h2>Price: {fare}</h2>
                    <h2>Description: {description}</h2>
                    <button><a href={`/user/foruser/${this.props.match.params.id}`}>Sign up for course</a></button>
                </Container>
            </Background>
        );
    }
}

export default Course;