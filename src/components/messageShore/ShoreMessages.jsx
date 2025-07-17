import React from 'react'
import ShoreMessageCard from './ShoreMessageCard'
import { useState } from 'react'

const ShoreMessages = () => {
      const [shoreMessages, setShore] = useState([
      { num: 22, bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad", body:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" },
      { num: 33, bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad", body:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" },
      { num: 23, bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad", body:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" },
      { num: 55, bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad", body:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" },
      { num: 77, bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad", body:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" },
      { num: 44, bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad", body:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" },
      { num: 12, bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad", body:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" },
      { num: 45, bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad", body:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" },
      { num: 45, bottled: "26/10/2000", recieved: "29/11/2000", status: "Public", tag:"Sad", body:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" },
    ])

  return (
    <div className='message-stream-section'>
      {shoreMessages.map((message) => {
        return <ShoreMessageCard num={message.num} bottled={message.bottled} recieved={message.recieved} status={message.status} tag={message.tag} body={message.body}/>;
      })}
    </div>
  )
}

export default ShoreMessages