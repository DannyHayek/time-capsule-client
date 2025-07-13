import React from 'react'
import BottleMessageDate from './BottleMessageDate'
import BottleMessageStatus from './BottleMessageStatus'
import BottleMessageTag from './BottleMessageTag'
import BottleMessageSurprise from './BottleMessageSurprise'

const BottleMessageDetails = () => {
  return (
    <div>
        <BottleMessageDate />
        <BottleMessageStatus />
        <BottleMessageTag />
        <BottleMessageSurprise />
    </div>
  )
}

export default BottleMessageDetails