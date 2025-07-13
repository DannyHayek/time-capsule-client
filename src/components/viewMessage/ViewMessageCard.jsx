import React from 'react'
import MessageInformation from './MessageInformation'
import MessageBody from './MessageBody'

const ViewMessageCard = () => {
  return (
    <div className='flex column view-message-body'>
        <MessageInformation />
        <MessageBody />
    </div>
  )
}

export default ViewMessageCard