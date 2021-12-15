import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Login from "./Login";

const Logout = () => {

    const { push } = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.post(`http://localhost:9000/api/logout`, {}, {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                console.log(res)
                localStorage.removeItem('token');
                localStorage.removeItem('username');
                localStorage.removeItem('password');
                localStorage.removeItem('role');
                push('/');
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return(
        <div></div>
    )

}




export default Logout


