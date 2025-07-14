import React from 'react'
import BottleMessageTitle from '../../components/bottleMessage/BottleMessageTitle'
import BottleMessageCard from '../../components/bottleMessage/BottleMessageCard'
import './BottleMessage.css'

const BottleMessage = () => {
  return (
    <div className='flex column bottle-message'>
      <BottleMessageTitle />
      <BottleMessageCard />
    </div>
  )
}

export default BottleMessage