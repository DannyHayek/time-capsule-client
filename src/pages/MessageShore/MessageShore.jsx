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
  const [activeMessages, setActiveMessages] = useState();

  const getAllMessages = () => {
    const api = CreateAPI("/guest/message_shore");

    axios.get(api).then(response => setShoreMessages(response.data["payload"])).then(setActiveMessages(shoreMessages)).then(console.log(activeMessages));
  }

  const addTag = (tagname) => {
    const tempTags = {};

    for (let t in activeTags) {
      tempTags[t] = activeTags[t];
    }
    tempTags[tagname] = 1;
    setActiveTags(tempTags);
    console.log(activeTags);
  }

  const removeTag = (tagname) => {
    const tempTags = {};

    for (let t in activeTags) {
      tempTags[t] = activeTags[t];
    }

    tempTags[tagname] = 0;
    setActiveTags(tempTags);
    console.log(activeTags);
  }

  const changeFilter = () => {

  }

  useEffect(() => {
      getAllMessages();
    }, []);

    useEffect(() => {
          console.log("Tags changed");
        }, [activeTags])
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