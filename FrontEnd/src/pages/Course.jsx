import React, { Component } from "react";
import styled from "styled-components";

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
`

class Course extends Component {
    state = {

    }

    render() {
        return(
            <Background>
                <Container>
                    <h1>Hello!</h1>
                </Container>
            </Background>
        );
    }
}

export default Course;