import React from 'react'

const MessageBody = () => {

  return (
    <div>
        <p>
            {JSON.parse(localStorage.getItem("currentMessage"))["body"]};
        </p>
    </div>
  )
}

export default MessageBody