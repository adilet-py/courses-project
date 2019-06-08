import React, { Component } from "react";
import styled from "styled-components";
import api from "../config/api";

let Background = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(./img/back.jpg) no-repeat center top / cover;
`

let Questions = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Akronim');
    @import url('https://fonts.googleapis.com/css?family=Rock+Salt');
    background: rgba(0,0,0,0.8);
    color: #00aeef;
    width:40%;
    height:540px;
    text-align: center;
    
    .section {
         max-width:100%;
         height: 6%;
         text-align:center;
         vertical-align:middle;
    }
    .section h1 {
         margin:0;
         font-size: 30px;
         font-family: "Rock Salt",cursive;
    }

    .header {
        width:100%;
    }

    .add {
        height: 24px;
        padding: 5px;
        font-size: 20px;
        margin: 15px 0 15px 0;
        border:solid 2px #00aeef;
    }

    .addButton {
        height: 35px;
        border: none;
        font-size: 20px;
        background: #00aeef;
        font-family: 'Rock-Salt',cursive;
        cursor: pointer;
        height: 38px;
        margin: 15px 0 15px 0;
        vertical-align: bottom;
        border:solid 2px #00aeef;
    }

    .record {
        width:100%;
        height:300px;
        display: flex;
	    flex-direction: column;
	    flex-wrap: wrap-reverse;
	    justify-content: space-around;
	    align-items: center;

    }
 

    h3 {
        margin: 0 0 20px 0;
    }



    .cost {
        margin-top:39px;
        width: 195px;
        height: 100px;
    }

    input.value {
        width: 181px;
        height: 30px;
        padding: 5px;
        font-size: 20px;
    }
    .fare {
        width: 200px;
        height: 30px;
        margin-bottom: 20px;
    }
    .text {
        resize: none;
        width: 200px;
        height: 200px;
    }
    



`;

class Cabinet extends Component {
    state = {
        company_name: '',
        course_name: '',
        fare: '',
        description: '',
        err: false,
    };

    componentWillMount() {
        api.get('company/me')
            .then(response => {
                this.setState(response.data.me);
            });
    }

    bind = (field, e) => {
        this.setState({
            [field]: e.target.value
        })
    };
    
    course = async (e) => {
        e.preventDefault();
        try {
            let response = await api.post('/course/create', {
                course_name: this.state.course_name,
                fare: this.state.fare,
                description: this.state.description
            });
            this.setState({
                err: false
            });
        } catch(e) {
            this.setState({
                err: true
            });
        }
    };

    render() {
        console.log(this.state.company_name)
        return (
            <Background>
            <Questions>
                <div className="section">
                      <h1>Add The Course</h1>
                      <form  onSubmit={(e) => this.course(e)}>
                        <div className="header"><input className="add" placeholder="Course name" type="text" onChange={(e) => {this.bind('course_name', e)}} required ></input>
                            <input className="addButton" type="submit" value="ADD"/>
                        </div>
                        <h3>Fare</h3>
                        <div>
                            <input className="fare" placeholder="Fare" type="text" onChange={(e) => {this.bind('fare', e)}}  required />
                        </div>
                        <h3>Description</h3>
                        <div className="description">
                            <textarea placeholder="Description..." className="text" onChange={(e) => {this.bind('description', e)}} required></textarea>
                        </div>
                      </form>                       
                </div>

            </Questions>
            </Background>
        );
    }
}

export default Cabinet;