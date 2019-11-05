import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosutils';

function Friend() {
  const [friendsList, setFriendsList] = useState([])

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

  }, [])
 
  return (
    <>
      {friendsList.map(friend => {
        return (
          <div className='friendContainer' key={friend.id}>
            <div className='details'>
              <h2>Name: {friend.name}</h2>
              <h2>Age: {friend.age}</h2>
              <h2>Email: {friend.email}</h2>
            </div>
            <div className='buttonContainer'>
              <button className='editBtn'>
                Edit
              </button>
              <button className='deleteBtn'>
                Delete
              </button>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Friend;
