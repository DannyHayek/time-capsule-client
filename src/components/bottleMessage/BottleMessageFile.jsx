import React from 'react'

const BottleMessageFile = ({setFile}) => {
  
  return (

    <div className='flex column upload-image-div'>
      <label>Upload an Image...</label>
      <input onChange={e => setFile(e.target.files[0])} type='file'></input>
    </div>
  )
}

export default BottleMessageFile