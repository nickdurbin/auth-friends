import React, { useState } from 'react'
import axios from 'axios';


function LoginForm(props) {
  const [userCredentials, setUserCredentials] = useState({
    name: '',
    age: '',
    email: ''
  })

  const handleChanges = e => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value
    });
  };

    
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/login`, userCredentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        props.history.push('/home');
      })
      .catch(err => {
        return err.response
      })
    resetForm();
  }

  const resetForm = () => {
    setUserCredentials({
      name: '',
      age: '',
      email: ''
    })
  }

  return (
    <div className='formContainer'>
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <hr />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={userCredentials.name}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={userCredentials.age}
          onChange={handleChanges}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userCredentials.email}
          onChange={handleChanges}
        />
        <button className="addBtn btn" type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm;