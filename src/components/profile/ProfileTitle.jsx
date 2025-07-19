import React from 'react'

const ProfileTitle = ({ pending }) => {
  return (
    <div className='flex column flex-center'>
        <h2 className='profile-title font'>Hello from Upstream, {JSON.parse(localStorage.getItem("user"))["name"]}</h2>
        <h3 className='profile-subtitle font'>You have <span className='number-messages font'>{pending}</span> bottles travelling in the river</h3>
    </div>
  )
}

export default ProfileTitle