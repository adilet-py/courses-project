import React, { Component } from "react";
import styled from "styled-components";
import api from "../config/api";
import ls from "local-storage";
import Select from "react-select";

let Background = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(./img/back.jpg) no-repeat center top / cover;
`
let Container = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Akronim');
    @import url('https://fonts.googleapis.com/css?family=Rock+Salt');
    width: 80%;
    height: 90vh;
    background: red;
    margin: 0 auto;
    padding: 20px;
    background: rgba(0,0,0,0.8);
    color: #00aeef;
    h2 {
        font-size: 40px;
        font-family: "Rock Salt", cursive;
        text-align: center;
        margin: 0 auto 40px;
    }
    p {
        font-size: 18px;
        font-family: 'Rock-Salt', cursive;
        margin: 0;
    }
    .form-div {
        display: block;
        margin: 0 auto;
        text-align: center;
        .select {
            width: 253px;
            height: 25px;
            padding: 5px;
            font-size: 20px;
            margin: 15px auto 15px;
        }
    }
    .forms {
        height: 15px;
        padding: 5px;
        font-size: 15px;
        margin: 15px 0 15px 0;
    }
    .submit {
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 35px;
        border: none;
        font-size: 15px;
        background: #00aeef;
        font-family: 'Rock Salt', cursive;
        color: #000;
        cursor: pointer;
    }
`

class ForUser extends Component {
    state = {
        first_name: '',
        last_name: '',
        phone: '',
        time: ''
    }

    bind = (field, e) => {
        this.setState({
            [field]: e.target.value
        })
    };

    signIn = async (e) => {
        e.preventDefault();
        try {
            let response = await api.post('company/users', {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                phone: this.state.phone,
                time: this.state.time
            });
            ls.set('accessToken', response.data.token);
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
        let times = [
            { value: '9:00', label: '9:00' },
            { value: '10:00', label: '10:00' },
            { value: '11:00', label: '11:00' },
            { value: '12:00', label: '12:00' },
            { value: '13:00', label: '13:00' },
            { value: '14:00', label: '14:00' },
            { value: '15:00', label: '15:00' },
            { value: '16:00', label: '16:00' },
            { value: '17:00', label: '17:00' },
            { value: '18:00', label: '18:00' },
        ];
        return(
            <Background>
                <Container>
                    <h2>Sign in for free test lesson!</h2>
                    <form onSubmit={(e) => this.signIn(e)}>
                        <div className="form-div">
                            <p>First name:</p>
                            <input type="text" className="forms" onChange={(e) => {this.bind('email', e)}} required/>
                        </div>
                        <div className="form-div">
                            <p>Last name:</p>
                            <input type="text" className="forms" onChange={(e) => {this.bind('email', e)}} required/>
                        </div>
                        <div className="form-div">
                            <p>Phone:</p>
                            <input type="text" className="forms" onChange={(e) => {this.bind('phone', e)}} required/>
                        </div>
                        <div className="form-div">
                            <p>Time:</p>
                            <Select className="select" options={times} />
                        </div>
                        <div>
                            <input type="submit" className="submit" value="Sign in"/>
                        </div>
                    </form>
                </Container>
            </Background>
        );
    }
}

export default ForUser;