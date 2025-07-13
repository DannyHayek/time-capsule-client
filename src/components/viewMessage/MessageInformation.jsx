import React from 'react'

const MessageInformation = () => {
  return (
    <div className='flex'>
        <div className='message-stream-info'>
          <article>
            <h4 className='stream-info-title'>Bottled</h4>
            <p>{JSON.parse(localStorage.getItem("currentMessage"))["bottled"]}</p>
          </article>

          <article>
            <h4 className='stream-info-title'>Recieved</h4>
            <p>{JSON.parse(localStorage.getItem("currentMessage"))["recieved"]}</p>
          </article>

          <article>
            <h4 className='stream-info-title'>Status</h4>
            <p>{JSON.parse(localStorage.getItem("currentMessage"))["status"]}</p>
          </article>

          <article>
            <h4 className='stream-info-title'>Tag</h4>
            <p>{JSON.parse(localStorage.getItem("currentMessage"))["tag"]}</p>
          </article>
        </div>
    </div>
  )
}

export default MessageInformation