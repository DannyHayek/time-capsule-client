import React from 'react'
import PropTypes from 'prop-types'

const AuthButton = () => {

  return (
    <div>
        <button>
            {localStorage.getItem("authType")}
        </button>
    </div>
  )
}

export default AuthButton