import React, { useEffect, useState } from 'react'
import StreamTitle from '../../components/messageStream/StreamTitle'
import MessageStreamSection from '../../components/messageStream/MessageStreamSection'
import './MessageStream.css'
import axios from 'axios'
import CreateAPI from '../../components/shared/CreateAPI'
import GetUserID from '../../components/shared/GetUserID'
import GetToken from '../../components/shared/GetToken'

const MessageStream = () => {
  const [userMessages, setMessages] = useState();

  const getUserMessages = () => {
    const api = CreateAPI("/user/user_messages");

    const userID = GetUserID();
    const token = GetToken();

    axios.post(api, {"id" : userID}, {
      headers: {
        'Authorization': `bearer ${token}`,
      }
    }).then(response => setMessages(response.data["payload"]));

  }

  useEffect(() => {
      getUserMessages();
    }, []);

  return (
    <div className='flex column message-stream'>
        <StreamTitle />
        {!!userMessages && <MessageStreamSection userMessages={userMessages}/>}
    </div>
  )
}

export default MessageStream