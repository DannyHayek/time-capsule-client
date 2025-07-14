import React from 'react'

const BottleMessageButton = ({bottleMessage}) => {
  return (
    <div>
        <hr className='horizontal-rule-bottle'></hr>
        
        <button className='primary-btn bottle-message-button bottle-message-bottle-button' onClick={() => {
            bottleMessage();
             }}>
                Bottle Message!
            </button>
    </div>
  )
}

export default BottleMessageButton