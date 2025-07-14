import React from 'react'

const BottleMessageTag = ({setTag}) => {
  return (
    <div>
        <label htmlFor="message-tag" className='bottle-message-label flex column'>Tag</label>

        <form onChange={e => setTag(e.target.value)} className='flex column'>
          <div>
            <input type="radio" id="happy" name="tag" value="Happy"></input>
            <label htmlFor="happy">Happy</label>
          </div>

          <div>
            <input type="radio" id="sad" name="tag" value="Sad"></input>
            <label htmlFor="sad">Sad</label>
          </div>
          
          <div>
            <input type="radio" id="hopeful" name="tag" value="Hopeful"></input>
            <label htmlFor="hopeful">Hopeful</label>
          </div>

          <div>
            <input type="radio" id="neutral" name="tag" value="Neutral"></input>
            <label htmlFor="neutral">Neutral</label>
          </div>
          
        </form>
    </div>
  )
}

export default BottleMessageTag