import React, { useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosutils';
import Friend from './Friend';

function FriendForm() {
  const [userCredentials, setUserCredentials] = useState({
    id: '',
    name: '',
    age: '',
    email: '',
  })

  const handleChanges = e => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/friends', userCredentials)
      .then(res => {
        console.log(res.data)
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
        <h1>New Friend</h1>
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
          Add
        </button>
      </form>
      <div className='friendsList'>
         <Friend />  
      </div>
    </div>
  )
}

export default FriendForm;