import React, { act } from 'react'
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
  const [activeTags, setActiveTags] = useState({
    "Happy" : 0,
    "Sad" : 0,
    "Hopeful" : 0,
    "Neutral" : 0,
  });

  const getAllMessages = () => {
    const api = CreateAPI("/guest/message_shore");

    axios.get(api).then(response => setShoreMessages(response.data["payload"]));
  }

  const addTag = (tagname) => {
    const tempTags = activeTags;
    tempTags[tagname] = 1;
    setActiveTags(tempTags);
    console.log(activeTags);
  }

  const removeTag = (tagname) => {
    const tempTags = activeTags;
    tempTags[tagname] = 0;
    setActiveTags(tempTags);
    console.log(activeTags);
  }

  useEffect(() => {
      getAllMessages();
    }, []);

    // console.log(activeTags);

  return (
    <div className='flex column message-shore'>
      <ShoreTitle />
      <ShoreTags setActiveTags={setActiveTags} addTag={addTag} removeTag={removeTag}/>
      {!!shoreMessages && <ShoreMessages shoreMessages = {shoreMessages} activeTags = {activeTags}/>}
    </div>
  )
}

export default MessageShore