import React, { useState } from 'react'
import ShoreTagSelector from './ShoreTagSelector'

const ShoreTags = () => {
    const [tagList, setTags] = useState(["Happy", "Sad", "Hopeful", "Neutral"]);

  return (
    <div className='flex flex-center'>

        {tagList.map((tag) => {
            return <ShoreTagSelector tag={tag} />;
        })}
    </div>
  )
}

export default ShoreTags