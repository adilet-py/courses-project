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
    text-align: center;
    width: 60%;
    background: rgba(0,0,0,0.8);
    color: #00aeef;
    h2 {
        font-size: 60px;
        font-family: "Rock Salt", cursive;
        margin: 0;
    }

`

class CourseName extends Component {
    state = {
      company_name:'',
      course_name:[],
      err:false
    };
   
    componentWillMount() {
        api.get('company/me')
        .then(response => {
            this.setState(response.data.me);
            console.log(response)
        });
    }
    
    render() {
        let {company_name, course_name} = this.state;
        return (
            <Background>
                <RegisterForm>
                    <h2>{company_name}</h2>
                
                        <ul>{course_name.map(course_name => (
                        <li key={course_name.id}>
                            course:{course_name.course_name}
                        </li>
                    ))}</ul>

                    
                    <h3>asda</h3>                    
                      

                </RegisterForm>
            </Background>
        );
    }
}

export default CourseName;