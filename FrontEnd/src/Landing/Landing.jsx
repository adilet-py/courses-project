import React, { Component } from "react";
import styled from "styled-components";

let HeaderBar = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Akronim');
    @import url('https://fonts.googleapis.com/css?family=Rock+Salt');
    background: #151f51;
    height: 645px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    overflow: hidden;
    z-index: 29;
    .topnav {
        width: 100%;
    }
    span {
        font-family: 'Akronim', sans-serif;
        position: absolute;
        left: 10%;
        top: 20px;
        font-size: 82px;
        color: #fff;
        cursor: pointer;
        z-index: 40;
    }
    .nav {
        display: inline-block;
        float: right;
        margin-right: 10%;
        margin-top: 40px;
        z-index: 100;
        a {
            font-family: 'Rock Salt', sans-serif;
            font-weight: 600;
            text-decoration: none;
            color: #fff;
            margin-left: 30px;
            :hover {
                border-bottom: 3px solid yellow;
            }
        }
        .icon {
                display: none;
        }
    }
    .text {
        font-family: 'Rock Salt', sans-serif;
        width: 550px;
        height: 100px;
        text-align: center;
        position: absolute;
        top: 30%;
        left: 7%;
        color: #fff;
        font-size: 50px;
    }
    .man {
        width: 800px;
        height: 645px;
        background: url(./img/man.png) no-repeat center top / 100% 100%;
        position: absolute;
        right: 5%;
        z-index: 31;
    }
    @media (max-width: 1100px) {
        .nav {
            margin: 20px 20px 0 0;
        }
        .nav a {
            display: none;
        }
        .nav a.icon{
            display: block;
            float: right;
            font-size: 20px;
            z-index: 9999;
        }
        span {
            font-size: 40px;
        }
        .topnav.responsive {
            position: relative;
            top: 50px;
            left: -200px;
        }
        
    }
`  
let Section1 = styled.div`
    width: 100%;
    height: 100vh;
    text-align: center;
    h1 {
        color: #151f51;
        margin-top: 30px;
        font-family: 'Rock Salt', sans-serif;
    }
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
            flex-basis: 25%;
            transition: all 0.2s;
            div {
                background: rgba(0,0,0,0.5);
                color: white;
                font-size: 34px;
                font-family: 'Rock Salt', cursive;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            :hover {
                flex-basis: 100%;
            }
        }
        .first {
            background: url(./img/course1.jpg) no-repeat center top / cover;            
        }
        .second {
            background: url(./img/course5.jpg) no-repeat center top / cover;            
        }
        .third {
            background: url(./img/course4.jpg) no-repeat center top / 100% 100%;            
        }
        .fourth {
            background: url(./img/course2.jpg) no-repeat center top / cover;            
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
                    <div className="topnav">
                        <span>_meCourse</span>
                        <div className="nav">
                            <a href="/login">Login</a>
                            <a href="/register">Register</a>
                            <a href="/courses">Courses</a>
                            <a className="icon" href="#">&#9776;</a>
                        </div>
                    </div>
                    <div className="text">All Courses in the same place! :)</div>
                    <div className="man"></div>
                </HeaderBar>
                <Section1>
                    <h1>About Us</h1>
                    <div className="card">
                        <div className="img first"><div>Запишись</div></div>
                        <div className="img second"><div>на пробный урок</div></div>
                        <div className="img third"><div>не выходя</div></div>
                        <div className="img fourth"><div>из дома!</div></div>
                    </div>
                </Section1>
            </>
        );
    }
}

export default Landing;