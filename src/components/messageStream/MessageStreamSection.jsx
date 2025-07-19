import React, { useState } from 'react'
import MessageStreamCard from './MessageStreamCard'

const MessageStreamSection = ({userMessages}) => {

//     const [userMessages, setMessages] = useState([
// { num: 22, user:"user222", bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad", body:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" },
//       { num: 33, user:"user222", bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad", body:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" },
//       { num: 23, user:"user222", bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad", body:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" },
//       { num: 55, user:"user222", bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad", body:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" },
//       { num: 77, user:"user222", bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad", body:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" },
//       { num: 44, user:"user222", bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad", body:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" },
//       { num: 12, user:"user222", bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad", body:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" },
//       { num: 45, user:"user222", bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad", body:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" },
//       { num: 45, user:"user222", bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad", body:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" },
//   ])
console.log(userMessages)
  return (
    <div className='message-stream-section'>
        {userMessages.map((message) => {
        return <MessageStreamCard num={message.id} user={message.username} bottled={message.created_at.slice(0,10)} recieved={message.delivery_date} status={message.status} tag={message.tagname} body={message.text}/>;
      })}
    </div>
  )
}

export default MessageStreamSection