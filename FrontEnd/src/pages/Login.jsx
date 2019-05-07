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
let LoginForm = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Akronim');
    @import url('https://fonts.googleapis.com/css?family=Rock+Salt');
    text-align: center;
    width: 60%;
    background: rgba(0,0,0,0.8);
    color: #00aeef;
    h2 {
        font-size: 60px;
        font-family: "Rock Salt", cursive;
        margin: 0;
    }
    p {
        font-size: 18px;
        font-family: 'Rock-Salt', cursive;
        margin: 0;
    }
    .forms {
        height: 25px;
        padding: 5px;
        font-size: 20px;
        margin: 15px 0 15px 0;
    }
    .submit {
        height: 35px;
        margin-bottom: 15px;
        border: none;
        font-size: 20px;
        background: #00aeef;
        font-family: 'Rock-Salt', cursive;
        cursor: pointer;
    }
    .links {
        margin-bottom: 20px;
        a {
            text-decoration: none;
            color: #00aeef;
            text-decoration: underline;
        }
    }
`

class Login extends Component {
   
    render() {
        return (
            <Background>
                <LoginForm>
                    <h2>Sign In</h2>
                    <form action="">
                        <div>
                            <p>E-Mail:</p>
                            <input type="email" className="forms" required/>
                        </div>
                        <div>
                            <p>Password:</p>
                            <input type="password" className="forms" required/>
                        </div>
                        <div>
                            <input type="submit" className="submit" value="Sign in"/>
                        </div>
                    </form>
                    <p className="links">Forgot your password? <a href="#">Click Here!</a></p>
                    <p className="links">Don't have an account? <a href="/register">Sign Up Now!</a></p>
                </LoginForm>
            </Background>
        );
    }
}

export default Login;