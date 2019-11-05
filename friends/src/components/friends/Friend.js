import React from 'react';

function Friend({ friendsList, handleEdit, handleDelete }) {

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
              <button className='editBtn' onClick={() => handleEdit(friend.id, friend)}>
                Edit
              </button>
              <button className='deleteBtn' onClick={() => handleDelete(friend.id)}>
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
