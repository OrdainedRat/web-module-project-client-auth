import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


 const AddFriend = () => {
    const [newFriend, setNewFriend] = useState({
        id: '',
        name: '',
        age: '',
        email: ''
    })

    const { push } = useHistory();

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            id: Date.now(),
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const token = localStorage.getItem('token')
        return( 
            axios.post(`http://localhost:9000/api/friends`, newFriend, {
                headers: {
                    authorization: token
                }
            })
            .then(res => {
                push('/friends');
            })
            .catch(err => {
                console.error(err)
            })
        );
        }

    return (
        <div>
            <h1> Add a friend</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:
                        <input 
                            type='text'
                            name='name'
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>Age:
                        <input 
                            type='text'
                            name='age'
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                <label>Email:
                        <input
                            type='email'
                            name='email'
                            onChange={handleChange} 
                        />
                    </label>
                </div>
                <button>Add friend</button>
            </form>
        </div>
    )
}

export default AddFriend;