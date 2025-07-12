import React from 'react'
import PropTypes from 'prop-types'

const AuthButton = () => {

  return (
    <div>
        <button className='auth-page-btn primary-btn login-btn font'>
            {localStorage.getItem("authType")}
        </button>
    </div>
  )
}

export default AuthButton