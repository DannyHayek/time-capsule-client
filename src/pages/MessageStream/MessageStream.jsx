import React from 'react'
import StreamTitle from '../../components/messageStream/StreamTitle'
import MessageStreamSection from '../../components/messageStream/MessageStreamSection'
import './MessageStream.css'

const MessageStream = () => {
  return (
    <div className='flex column message-stream'>
        <StreamTitle />
        <MessageStreamSection />
    </div>
  )
}

export default MessageStream