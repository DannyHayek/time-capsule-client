import React from 'react'

const BottleMessageStatus = () => {
  return (
    <div>
        <label htmlFor="message-status" className='bottle-message-label flex column'>Message Status</label>

        <form className='flex column'>
          <div>
            <input type="radio" id="html" name="fav_language" value="HTML"></input>
            <label htmlFor="html">Public</label>
          </div>

          <div>
            <input type="radio" id="css" name="fav_language" value="CSS"></input>
            <label htmlFor="css">Unlisted</label>
          </div>
          
          <div>
            <input type="radio" id="javascript" name="fav_language" value="JavaScript"></input>
            <label htmlFor="javascript">Private</label>
          </div>
          
        </form>
    </div>
  )
}

export default BottleMessageStatus