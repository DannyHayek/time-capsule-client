import React from 'react'

const ViewMessageTitle = () => {

    return (
    <div className='font view-message-title'>
        <h2>{JSON.parse(localStorage.getItem("currentMessage"))["user"]} - Bottle #{JSON.parse(localStorage.getItem("currentMessage"))["num"]}</h2>
    </div>
  )
}

export default ViewMessageTitle