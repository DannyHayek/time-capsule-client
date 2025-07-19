import React from 'react'

const BottleMessageTag = ({setTag}) => {
  return (
    <div className='flex column status-label-buttons'>
        <label htmlFor="message-tag" className='bottle-message-label flex column'>Tag</label>

        <form onChange={e => setTag(e.target.value)} className='flex column radio-form'>
          <div>
            <input type="radio" id="happy" name="tag" value="1"></input>
            <label htmlFor="happy">Happy</label>
          </div>

          <div>
            <input type="radio" id="sad" name="tag" value="2"></input>
            <label htmlFor="sad">Sad</label>
          </div>
          
          <div>
            <input type="radio" id="hopeful" name="tag" value="3"></input>
            <label htmlFor="hopeful">Hopeful</label>
          </div>

          <div>
            <input type="radio" id="neutral" name="tag" value="4"></input>
            <label htmlFor="neutral">Neutral</label>
          </div>
          
        </form>
    </div>
  )
}

export default BottleMessageTag