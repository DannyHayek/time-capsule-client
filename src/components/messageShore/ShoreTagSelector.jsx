import React, { useState } from 'react'

const ShoreTagSelector = ({ tag , addTag , removeTag }) => {
  const [buttonState, setButton] = useState("primary-btn tag-btn-inactive")

  return (
      <button className= {buttonState} onClick={() => {
        if (localStorage.getItem(tag) == 1) {
          setButton("primary-btn tag-btn-inactive");
          localStorage.setItem(tag, 0);
          removeTag(tag);
        } else {
          setButton("primary-btn tag-btn-active");
          localStorage.setItem(tag, 1);
          addTag(tag);
        }
        console.log(tag, localStorage.getItem(tag))
        }} >
          {tag}
      </button>
  )
}

export default ShoreTagSelector