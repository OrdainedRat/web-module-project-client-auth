import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

 const Login = () => {
    
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const { push } = useHistory();

    const handleChange = e => {
        
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = e => {
        
        e.preventDefault();
        
        return( 
           axios.post(`http://localhost:9000/api/login`, credentials)
                .then(res => {
                    console.log(res.data)
                    const { token, role, username } = res.data;
                    localStorage.setItem("token", token);
                    localStorage.setItem("role", role);
                    localStorage.setItem("username", username);
                    push('/friends')
                })
                .catch(err => {
                    console.error(err)
                })
        );
        }
    

    return (
        <div className="login">
            <h1> Login </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:
                        <input 
                            type='text'
                            name='username'
                            value={credentials.username}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                <label htmlFor="password">Password:
                        <input
                            type='password'
                            name='password'
                            value={credentials.password}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}


export default Login
