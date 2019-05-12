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
let RegisterForm = styled.div`
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
    input {
        ${props => !!props.err && `
                border: 1px solid red;
        `
        }
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

class Register extends Component {
    state = {
        email: '',
        password: '',
        err: false
    };
   
    render() {
        return (
            <Background>
                <RegisterForm>
                    <h2>Sign Up</h2>
                    <form onSubmit={(e) => this.login(e)}>
                        <div>
                            <p>Company's name:</p>
                            <input type="text" className="forms" onChange={(e) => {this.bind('email', e)}} value={this.state.email} required/>
                        </div>
                        <div>
                            <p>E-Mail:</p>
                            <input type="email" className="forms" onChange={(e) => {this.bind('email', e)}} value={this.state.email} required/>
                        </div>
                        <div>
                            <p>Password:</p>
                            <input type="password" className="forms" onChange={(e) => {this.bind('email', e)}} value={this.state.password} required/>
                        </div>
                        <div>
                            <p>Confirm your password:</p>
                            <input type="password" className="forms" onChange={(e) => {this.bind('email', e)}} value={this.state.password} required/>
                        </div>
                        <div>
                            <input type="submit" className="submit" value="Sign Up"/>
                        </div>
                    </form>
                    <p className="links">Already have an account? <a href="/login">Sign In Now!</a></p>
                </RegisterForm>
            </Background>
        );
    }
}

export default Register;