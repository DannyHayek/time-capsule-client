import React, { useState } from 'react'
import MessageStreamCard from './MessageStreamCard'

const MessageStreamSection = ({userMessages}) => {


// console.log(userMessages)
  return (
    <div className='message-stream-section'>
        {userMessages.map((message) => {
        return <MessageStreamCard num={message.id} user={message.username} bottled={message.created_at.slice(0,10)} recieved={message.delivery_date} status={message.status} tag={message.tagname} country={message.location} body={message.text} surprise={message.isSurprise} attachable={message.attachable}/>;
      })}
    </div>
  )
}

export default MessageStreamSection