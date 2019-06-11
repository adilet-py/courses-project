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
    @import url('https://fonts.googleapis.com/css?family=Akronim');
    @import url('https://fonts.googleapis.com/css?family=Rock+Salt');
    width: 80%;
    height: 100vh;
    background: red;
    margin: 0 auto;
    background: rgba(0,0,0,0.8);
    color: #00aeef;
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
                    <h2>Fare: {fare}</h2>
                    <h2>Description: {description}</h2>
                    <button><a href={`/foruser/${this.props.match.params.id}`}>Sign up for course</a></button>
                </Container>
            </Background>
        );
    }
}

export default Course;