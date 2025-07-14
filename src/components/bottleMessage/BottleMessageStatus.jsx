import React from 'react'

const BottleMessageStatus = ({setStatus}) => {
  return (
    <div className='flex column status-label-buttons'>
        <label htmlFor="message-status" className='bottle-message-label flex column'>Message Status</label>

        <form onChange={e => setStatus(e.target.value)} className='flex column radio-form'>
          <div>
            <input type="radio" id="public" name="status" value="Public"></input>
            <label className='radio-button' htmlFor="public">Public</label>
          </div>

          <div>
            <input type="radio" id="unlisted" name="status" value="Unlisted"></input>
            <label htmlFor="unlisted">Unlisted</label>
          </div>
          
          <div>
            <input type="radio" id="private" name="status" value="Private"></input>
            <label htmlFor="private">Private</label>
          </div>
          
        </form>
    </div>
  )
}

export default BottleMessageStatus