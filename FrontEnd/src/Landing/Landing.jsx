import React, { Component } from "react";
import styled from "styled-components";

let HeaderBar = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Akronim');
    @import url('https://fonts.googleapis.com/css?family=Rock+Salt');
    background: #151f51;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    overflow: hidden;
    z-index: 29;
    .topnav {
        width: 100%;
        z-index: 9999;
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
        z-index: 9999;
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
        width: 70%;
        height: 90%;
        background: url(./img/man.png) no-repeat center top / 100% 100%;
        position: absolute;
        right: 5%;
        bottom: 0;
    }
    @media (max-width: 1010px) {
        height: 55vh;
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
            z-index: 1000;
        }
        span {
            font-size: 40px;
        }
        .topnav {
            width: 100%;
        }
        .nav.responsive {
            position: relative;
            top: -20px;
            left: -40%;
            background: #000;
            border: 1px solid #000;
            z-index: 9999;
            height: 100vh;
            width: 55%;
        }
        .nav.responsive a.icon {
            position: absolute;
            top: 20px;
            right: -72%;
        }
        .nav.responsive a {
            float: none;
            display: block;
            text-align: left;
        }
        .man {
            width: 100%;
            height: 35%;
            bottom: 45vh;
        }
        .text {
            font-size: 20px;
            width: 90%;
            top: 10%;
        }
    }
`  
let Section1 = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Bad+Script&display=swap&subset=cyrillic');
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
            span {
                background: rgba(0,0,0,0.5);
                color: white;
                font-size: 34px;
                font-family: 'Bad Script', cursive;
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
    @media (max-width: 670px) {
        .card {
            height: 100vh;
            flex-flow: column;
            .img {
                width: 100%;
                :hover {
                    flex-grow: 30%;
                }
            }
        }
    }
`
  
class Landing extends Component {
    state = { 

     };

    sidebar = (e) => {
        e.preventDefault();
        let x = document.getElementById("nav");
        if(x.className === "nav") {
            x.className += " responsive";
        }
        else {
            x.className = "nav"
        }
    }
    
    render() {
        return (
            <>
                <HeaderBar>
                    <div className="topnav">
                        <span>_meCourse</span>
                        <div className="nav" id="nav">
                            <a href="/company/login">Login</a>
                            <a href="/company/register">Register</a>
                            <a href="/user/courses">Courses</a>
                            <a onClick={(e) => this.sidebar(e)} id="menu" className="icon" href="#">&#9776;</a>
                        </div>
                    </div>
                    <div className="text">All Courses in the same place! :)</div>
                    <div className="man"></div>
                </HeaderBar>
                <Section1>
                    <h1>About Us</h1>
                    <div className="card">
                        <div className="img first"><span>Запишись</span></div>
                        <div className="img second"><span>на пробный урок</span></div>
                        <div className="img third"><span>не выходя</span></div>
                        <div className="img fourth"><span>из дома!</span></div>
                    </div>
                </Section1>
            </>
        );
    }
}

export default Landing;