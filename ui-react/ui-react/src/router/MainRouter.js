import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRedirect
} from 'react-router-dom';

import LoginPage from "../login_page/LoginPage";
import Shaverma_list from "../content/Shaverma_list";
import App from "../app/App";

const MainRouter = () =>(
        <Router>
            <div>
                <Route path="/public" component={Public}/>
                <Route path="/login" component={LoginPage}/>
                <PrivateRoute path="/protected" component={Protected}/>
            </div>
        </Router>
);


const isAuthenticated =()=>{
    const access_token = localStorage.getItem("access_token");
    console.log(access_token);
    if(access_token!==null){
        return true;
    }
    return false;
};

const PrivateRoute = ({component:Component, ...rest}) =>(
    <Route
        {...rest}
        render={props =>(
            isAuthenticated()
            ? (<Component {...props}/>)
            : (<Redirect
                to={{
                    pathname:"/login",
                    state:{from: props.location}
                }}
               />
            )
        )}
    />
)


const Public = () => <h3>pulbic</h3>;
const Protected = () => (<App/>);

export default MainRouter;