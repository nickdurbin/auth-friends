import React, { useState } from 'react'
import { axiosWithAuth } from '../../utils/axiosutils';


function LoginForm(props) {
  const [userCredentials, setUserCredentials] = useState({
    username: '',
    password: ''
  })

  const handleChanges = e => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value
    });
  };

    
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth().post(`/api/login`, userCredentials)
      .then(res => {
        console.log(res.data.token)
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
      username: '',
      password: ''
    })
  }

  return (
    <div className='formContainer'>
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <hr />
        <input
          type="text"
          name="username"
          placeholder="username"
          value={userCredentials.username}
          onChange={handleChanges}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userCredentials.password}
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