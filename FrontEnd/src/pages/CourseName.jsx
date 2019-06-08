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
    @import url('https://fonts.googleapis.com/css?family=Akronim');
    @import url('https://fonts.googleapis.com/css?family=Rock+Salt');
    width: 40%;
    height:90%;
    background: rgba(0,0,0,0.8);
    color: #00aeef;
    h2 {
        text-align:center;
        font-size: 60px;
        font-family: "Rock Salt", cursive;
        margin: 0;
    }
    
    ul {

    }

    li {
        position: relative;
        display: block;
        margin-bottom: 5px;
        padding: 10px;
        text-transform: uppercase;
        a {
            color:#00aeef;
            text-decoration: none;
            font-family: "Rock Salt";
        }
    }      

    .cabinet {
        text-align:center;
    }

    button {
        height: 45px;
        margin-bottom: 15px;
        border: none;   
        background: #00aeef;
        font-size: 15px;
        font-family: 'Rock Salt', cursive;
        cursor: pointer;
        
        a {
            text-decoration:none;
            color:black;
        }

    }


`

class CourseName extends Component {
    state = {
      courses:[]
    };
   
    componentWillMount() {
        api.get('company/me')
        .then(response => {
            this.setState(response.data.me);
            console.log(response)
        });
    }
    
    render() {
        let {courses,company_name} = this.state;
        return (
            <Background>
                <RegisterForm>
                    <h2>{company_name}</h2>
                    <ul>
                        {
                            courses.map(course => {
                                return(
                                            <li><a href="#">{course.course_name}</a></li>
                                )
                            })
                        }
                    </ul>
                       
                       <div className="cabinet"><button ><a href="/cabinet">ADD Course</a></button></div>
                
       
                      

                </RegisterForm>
            </Background>
        );
    }
}

export default CourseName;