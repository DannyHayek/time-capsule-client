import React, { useState } from 'react'
import ShoreTagSelector from './ShoreTagSelector'

const ShoreTags = ({ addTag, removeTag}) => {
    const [tagList, setTags] = useState(["Happy", "Sad", "Hopeful", "Neutral"]);

  return (
    <div className='flex tag-selector-div'>
        <h3>Filter by:</h3>

        {tagList.map((tag) => {
            return <ShoreTagSelector tag={tag} addTag={addTag} removeTag={removeTag}/>;
        })}
    </div>
  )
}

export default ShoreTags