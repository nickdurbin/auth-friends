import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosutils';
import Friend from './Friend';

function FriendForm() {
  const [friendsList, setFriendsList] = useState([])
  const [errors, setErrors] = useState({
    name: '',
    age: '',
    email: '',
  })
  const [userCredentials, setUserCredentials] = useState({
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
    if (!userCredentials.name) {
      return setErrors({ ...errors, 
        name: 'Name cannot be blank!',
        age: 'Age cannot be empty.',
        email: 'Must have an email.'})
    }
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
    setErrors({
      name: '',
      age: '',
      email: ''
    })
  }

  useEffect(() => {

    axiosWithAuth()
      .get('/api/friends')
      .then(res => {
        console.log(res.data)
        setFriendsList(res.data)
      })
      .catch(err => {
        return err.response
      })

  }, [userCredentials])

  const handleDelete = (id) => {
    axiosWithAuth()
    .delete(`/api/friends/${id}`)
    .then(res => {
      console.log(res.data)
      setFriendsList(res.data)
    })
    .catch(err => {
      return err.response
    })
  }

  const handleEdit = (id, friend) => {
    axiosWithAuth()
    .put(`/api/friends/${friend.id}`, friend)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      return err.response
    })
  }

  return (
    <div className='formContainer'>
      <form onSubmit={handleSubmit}>
        <h1>New Friend</h1>
        <hr />
        {errors.name && <p>{errors.name}</p>}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={userCredentials.name}
          onChange={handleChanges}
          required
        />
        {errors.age && <p>{errors.age}</p>}
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={userCredentials.age}
          onChange={handleChanges}
          required
        />
        {errors.email && <p>{errors.email}</p>}
         <input
          type="email"
          name="email"
          placeholder="Email"
          value={userCredentials.email}
          onChange={handleChanges}
          required
        />
        <button className="addBtn" type="submit">
          Add
        </button>
      </form>
      <div className='friendsList'>
         <Friend handleDelete={handleDelete} handleEdit={handleEdit} friendsList={friendsList} />  
      </div>
    </div>
  )
}

export default FriendForm;