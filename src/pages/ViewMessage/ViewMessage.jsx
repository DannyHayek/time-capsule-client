import React from 'react'

const ViewMessage = () => {
  return (
    <div>
        {localStorage.getItem("currentMessage")}
    </div>
  )
}

export default ViewMessage