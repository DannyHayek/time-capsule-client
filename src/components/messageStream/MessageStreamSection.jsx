import React, { useState } from 'react'
import MessageStreamCard from './MessageStreamCard'

const MessageStreamSection = () => {

    const [userMessages, setMessages] = useState([
{ num: 22, user:"user222", bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad", body:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" },
      { num: 33, user:"user222", bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad", body:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" },
      { num: 23, user:"user222", bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad", body:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" },
      { num: 55, user:"user222", bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad", body:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" },
      { num: 77, user:"user222", bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad", body:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" },
      { num: 44, user:"user222", bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad", body:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" },
      { num: 12, user:"user222", bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad", body:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" },
      { num: 45, user:"user222", bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad", body:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" },
      { num: 45, user:"user222", bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad", body:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" },
  ])

  return (
    <div className='message-stream-section'>
        {userMessages.map((message) => {
        return <MessageStreamCard num={message.num} user={localStorage.getItem("currentName")} bottled={message.bottled} recieved={message.recieved} status={message.status} tag={message.tag} body={message.body}/>;
      })}
    </div>
  )
}

export default MessageStreamSection