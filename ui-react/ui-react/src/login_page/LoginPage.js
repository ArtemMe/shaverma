import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import qs from 'qs';

import './LoginPage.css';

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            grant_type: 'password',
            client_id: 'fooClientIdPassword',
        }
    }

    handleLogin(event){
        const URL = 'http://localhost:8087/spring-security-oauth-server/oauth/token';
        const data = {
            username: this.state.username,
            password: this.state.password,
            client_id: this.state.client_id,
            grant_type: this.state.grant_type,
        }

        const headers = {
            "Content-Type" : "application/x-www-form-urlencoded",
            "Authorization" : "Basic "+btoa("fooClientIdPassword:secret"),
        };
        const data3 = qs.stringify(data);

        axios.post(
            URL,
            data3,
            {headers : headers}
        )
            .then(result =>{
                const req_data = result.data;
                console.log(req_data);
                localStorage.setItem("access_token",req_data.access_token);
            })
            .catch(error =>{
                console.log(error);
            })
    }

    render(){
        return(
            <div className="wrapp_login">
                <div className="LoginPage">
                    <MuiThemeProvider>
                        <div>
                            <AppBar
                                title="Login"
                            />
                            <TextField
                                hintText="Enter your Username"
                                floatingLabelText="Username"
                                onChange = {(event,newValue)=>{
                                    this.setState({username:newValue});
                                }}
                            />
                            <br/>
                            <TextField
                                hintText="Enter your Password"
                                floatingLabelText="Password"
                                onChange = {(event,newValue)=>{
                                    this.setState({password:newValue});
                                }}
                            />
                            <br/>
                            <RaisedButton
                                label="Submit" primary={true}
                                onClick={(event)=> this.handleLogin()}
                                href = "/protected"
                            />
                        </div>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}

export default LoginPage;