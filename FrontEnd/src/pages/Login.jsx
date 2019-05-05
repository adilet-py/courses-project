import React, { Component } from "react";
import styled from "styled-components";

let Background = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
let LoginForm = styled.div`
    text-align: center;
    width: 60%;
    background: rgba(0,0,0,0.5);
`

class Login extends Component {
   
    render() {
        return (
            <Background>
                <LoginForm>
                    
                </LoginForm>
            </Background>
        );
    }
}

export default Login;