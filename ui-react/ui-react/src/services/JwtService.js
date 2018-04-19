import axios from 'axios';

const getResource = (url) => {
    const headers = {
        "Content-Type" : "application/x-www-form-urlencoded",
        "Authorization" : "Bearer "+localStorage.getItem('access_token'),
    };
    console.log(headers);
    const req = axios.get(url,{headers: headers});
    return req;
}

const registerOrder = (data)=>{
    const url = "http://localhost:8082/spring-security-oauth-resource/registerOrder";
    const headers = {
        "Content-Type" : "application/json",
        "Authorization" : "Bearer "+localStorage.getItem('access_token'),
    };
    const req = axios.post(url,data,{headers:headers});
    return req;
}

export {getResource,registerOrder};