import React, { useState } from 'react'
import MessageStreamCard from './MessageStreamCard'

const MessageStreamSection = () => {

    const [userMessages, setMessages] = useState([
    { messageNumber: 22, bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad" },
    { messageNumber: 33, bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad" },
    { messageNumber: 23, bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad" },
    { messageNumber: 55, bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad" },
    { messageNumber: 77, bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad" },
    { messageNumber: 44, bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad" },
    { messageNumber: 12, bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad" },
    { messageNumber: 45, bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad" },
    { messageNumber: 45, bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad" },
  ])

  return (
    <div className='message-stream-section'>
        {userMessages.map((message) => {
        return <MessageStreamCard num={message.num} bottled={message.bottled} recieved={message.recieved} status={message.status} tag={message.tag}/>;
      })}
    </div>
  )
}

export default MessageStreamSection