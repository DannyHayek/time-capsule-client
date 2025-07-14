import React from 'react'

const BottleMessageStatus = ({setStatus}) => {
  return (
    <div>
        <label htmlFor="message-status" className='bottle-message-label flex column'>Message Status</label>

        <form onChange={e => setStatus(e.target.value)} className='flex column'>
          <div>
            <input type="radio" id="public" name="fav_language" value="Public"></input>
            <label htmlFor="public">Public</label>
          </div>

          <div>
            <input type="radio" id="unlisted" name="fav_language" value="Unlisted"></input>
            <label htmlFor="unlisted">Unlisted</label>
          </div>
          
          <div>
            <input type="radio" id="private" name="fav_language" value="Private"></input>
            <label htmlFor="private">Private</label>
          </div>
          
        </form>
    </div>
  )
}

export default BottleMessageStatus