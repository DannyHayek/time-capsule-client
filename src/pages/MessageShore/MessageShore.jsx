import React from 'react'
import './MessageShore.css';
import ShoreTitle from '../../components/messageShore/ShoreTitle';
import ShoreTagSelector from '../../components/messageShore/ShoreTagSelector';
import ShoreMessages from '../../components/messageShore/ShoreMessages';
import ShoreTags from '../../components/messageShore/ShoreTags';

const MessageShore = () => {
  return (
    <div className='flex column'>
      <ShoreTitle />
      <ShoreTags />
      <ShoreMessages />
    </div>
  )
}

export default MessageShore