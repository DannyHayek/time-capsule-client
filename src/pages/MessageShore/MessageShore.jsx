import React from 'react'
import './MessageShore.css';
import ShoreTitle from '../../components/messageShore/ShoreTitle';
import ShoreTagSelector from '../../components/messageShore/ShoreTagSelector';
import ShoreMessages from '../../components/messageShore/ShoreMessages';

const MessageShore = () => {
  return (
    <div>
      <ShoreTitle />
      <ShoreTagSelector />
      <ShoreMessages />
    </div>
  )
}

export default MessageShore