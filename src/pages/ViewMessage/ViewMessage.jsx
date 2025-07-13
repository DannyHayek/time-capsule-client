import React from 'react'
import ViewMessageTitle from '../../components/viewMessage/ViewMessageTitle'
import ViewMessageCard from '../../components/viewMessage/ViewMessageCard'
import './ViewMessage.css'

const ViewMessage = () => {
  return (
    <div className='flex column view-message-page'>
        <ViewMessageTitle />
        <ViewMessageCard />
    </div>
  )
}

export default ViewMessage