import React from 'react'

const BottleMessageButton = ({bottleMessage}) => {
  return (
    <div>
        <hr></hr>
        
        <button className='primary-btn bottle-message-button' onClick={() => {
            bottleMessage();
             }}>
                Bottle a Message!
            </button>
    </div>
  )
}

export default BottleMessageButton