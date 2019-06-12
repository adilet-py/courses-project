import React, { Component } from "react";
import styled from "styled-components";
import api from "../config/api";
import ls from "local-storage";

let Background = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(./img/back.jpg) no-repeat center top / cover;
`
let RegisterForm = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Rock+Salt');
    text-align: center;
    width: 60%;
    background: rgba(0,0,0,0.8);
    color: #fff;
    @media (max-width: 670px) {
        width: 100%;
        height: 100%;
        color: white;
        padding-top: 140px;
        .links {
            font-size: 15px;
            a {
                display: block;
            }
        }
    }
    h2 {
        font-size: 60px;
        font-family: "Rock Salt", cursive;
        margin: 0;
    }
    p {
        font-size: 18px;
        font-family: 'Rock Salt', cursive;
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
        border-radius: 25px; 
        background: #fff;
        color: #000;
        font-size: 15px;
        font-family: 'Rock Salt', cursive;
        cursor: pointer;
    }
    .links {
        margin-bottom: 20px;
        a {
            text-decoration: none;
            color: grey;
            text-decoration: underline;
        }
    }
`

class Register extends Component {
    state = {
        company_name: '',
        email: '',
        password: '',
        err: false
    };

    bind = (field, e) => {
        this.setState({
            [field]: e.target.value
        });
    };
    register = async (e) => {
        e.preventDefault();
        try {
            let response = await api.post('company/register', {
                company_name: this.state.company_name,
                email: this.state.email,
                password: this.state.password
            });
            this.setState({
                err: false
            });

        } catch(e) {
            if(e.response.status === 400) {
                this.setState({
                    err: true,
                    errMessage: e.response.data.message
                });
            }
        }
    };
    render() {
        return (
            <Background>
                <RegisterForm err={this.state.err}>
                    <h2>Sign Up</h2>
                    <form onSubmit={(e) => this.register(e)}>
                        <div>
                            <p>Company's name:</p>
                            <input type="text" className="forms" onChange={(e) => {this.bind('company_name', e)}} value={this.state.company_name} required/>
                        </div>
                        <div>
                            <p>E-Mail:</p>
                            <input type="email" className="forms" onChange={(e) => {this.bind('email', e)}} value={this.state.email} required/>
                        </div>
                        <div>
                            <p>Password:</p>
                            <input type="password" className="forms" onChange={(e) => {this.bind('password', e)}} value={this.state.password} required/>
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