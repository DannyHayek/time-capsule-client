import React from 'react'
import './MessageShore.css';
import ShoreTitle from '../../components/messageShore/ShoreTitle';
import ShoreTagSelector from '../../components/messageShore/ShoreTagSelector';
import ShoreMessages from '../../components/messageShore/ShoreMessages';
import ShoreTags from '../../components/messageShore/ShoreTags';
import CreateAPI from '../../components/shared/CreateAPI';
import GetUserID from '../../components/shared/GetUserID';
import GetToken from '../../components/shared/GetToken';
import { useEffect, useState } from 'react';
import axios from 'axios';

const MessageShore = () => {
  const [shoreMessages, setShoreMessages] = useState();

  const getAllMessages = () => {
    const api = CreateAPI("/guest/message_shore");

    axios.get(api).then(response => setShoreMessages(response.data["payload"]));
  }

  useEffect(() => {
      getAllMessages();
    }, []);

  return (
    <div className='flex column message-shore'>
      <ShoreTitle />
      <ShoreTags />
      {!!shoreMessages && <ShoreMessages shoreMessages = {shoreMessages}/>}
    </div>
  )
}

export default MessageShore