import React from 'react'

const ProfileTitle = () => {
  return (
    <div className='flex column flex-center'>
        <h2 className='profile-title font'>Hello from Upstream, {localStorage.getItem("currentName")}</h2>
        <h3 className='profile-subtitle font'>You have <span className='number-messages font'>X</span> bottles travelling in the river</h3>
    </div>
  )
}

export default ProfileTitle