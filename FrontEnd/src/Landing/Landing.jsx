import React, { Component } from "react";
import styled from "styled-components";

let HeaderBar = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Akronim');
    @import url('https://fonts.googleapis.com/css?family=Rock+Salt');
    background: url(./img/banner.gif) no-repeat center top / cover;
    height: 645px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    overflow: hidden;
    z-index: 29;
    span {
        font-family: 'Akronim', sans-serif;
        font-size: 82px;
        color: #fff;
        margin-top: 20px;
    }
    .text {
        font-family: 'Rock Salt', sans-serif;
        width: 550px;
        height: 100px;
        text-align: center;
        position: absolute;
        top: 20%;
        left: 8%;
        color: #fff;
        font-size: 40px;
    }
    .nav {
        margin: 20px 0 0 0;
        z-index: 100;
        a {
            font-family: 'Rock Salt', sans-serif;
            font-weight: 600;
            text-decoration: none;
            color: #fff;
            margin-left: 30px;
        }
    }
    .man {
        width: 448px;
        height: 652px;
        background: url(./img/man.gif) no-repeat center top / cover;
        position: absolute;
        left: 700px;
        top: 30px;
        z-index: 31;
    }
    .some {
        background: url(./img/some.gif) no-repeat center top / cover;
        position: absolute;
        top: 75px;
        width: 100%;
        height: 570px;
        z-index: 30;
    }
`  
let Section1 = styled.div`
    width: 100%;
    height: 100vh;
    .card {
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 40;
        .img {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 500px;
            height: 100vh;
            border: 1px solid #000;
            background: url(./img/course1.jpg) no-repeat center top / cover;
            flex-basis: 25%;
            transition: all 0.2s;
            :hover {
                flex-basis: 100%;
            }
        }
    }
`
  
class Landing extends Component {
    state = { 

     };
    
    render() {
        return (
            <>
                <HeaderBar>
                    <span>_meCourse</span>
                    <div className="text">All of the Courses in the same place! :)</div>
                    <div className="nav">
                        <a href="/login">Login</a>
                        <a href="localhost:3000/register">Register</a>
                        <a href="/courses">Courses</a>
                    </div>
                    <div className="man"></div>
                    <div className="some"></div>
                </HeaderBar>
                <Section1>
                    <div className="card">
                        <div className="img"></div>
                        <div className="img"></div>
                        <div className="img"></div>
                        <div className="img"></div>
                    </div>
                </Section1>
            </>
        );
    }
}

export default Landing;