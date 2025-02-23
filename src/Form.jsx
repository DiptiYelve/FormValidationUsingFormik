import React from 'react'
import { useState } from 'react'

function Form() {
    let [formData, setformData] = useState({
        name: "",
        username: "",
        password: ""
    });

    function onChange(e) {
        setformData((prevObject) => {
            return { ...prevObject, [e.target.name]: e.target.value }
        })
    }

    function onSubmit(e) {
        e.preventDefault();
        console.log(formData);
        setformData({
            name: "",
            username: "",
            password: ""
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <h3>Register Now!</h3>
            <label htmlFor="name">Name</label> &nbsp;&nbsp;&nbsp;
            <input type="text" name='name' id='name' value={formData.name} onChange={onChange} /> <br />
            <label htmlFor="username">Username</label> &nbsp;&nbsp;&nbsp;
            <input type="text" name='username' id='username' value={formData.username} onChange={onChange} /> <br />
            <label htmlFor="password">Password</label> &nbsp;&nbsp;&nbsp;
            <input type="password" name='password' id='password' value={formData.password} onChange={onChange} /> <br /><br />
            <button>Submit</button>
        </form>
    )
}

export default Form